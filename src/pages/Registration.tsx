import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { ToastAction } from "@/components/ui/Toast";
import { useToast } from "@/utils/use-toast";
import { Toaster } from "@/utils/toaster";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LuAlertCircle } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import {
  useAssistantRegisterMutation,
  useDoctorRegisterMutation,
} from "../features/auth/authApiSlice";
import { Link } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const FormSchema = z.object({
  type: z.enum(["assistant", "doctor"], {
    required_error: "You need to select a notification type.",
  }),
});

export default function Register() {
  const userRef = useRef<HTMLInputElement | null>(null);

  const [pwdVisible, setPwdVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { toast } = useToast();

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [assistantRegister] = useAssistantRegisterMutation();
  const [doctorRegister] = useDoctorRegisterMutation();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);

    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = EMAIL_REGEX.test(email);
    const v3 = PWD_REGEX.test(pwd);
    if (!v1 || !v2 || !v3) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      setIsLoading(false);
      console.log("im here");

      return;
    }

    if (data.type === "assistant") {
      await assistantRegister({
        username: user,
        password: pwd,
        email: email,
      })
        .unwrap()
        .then((result) => {
          console.log(result);
          toast({
            title: "Your operation was successful",
            description: "Redirecting to verification page...",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
          navigate("/email-verification");
        })
        .catch(() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "Unknown error occurred",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
          return;
        });
    }

    if (data.type === "doctor") {
      await doctorRegister({
        username: user,
        password: pwd,
        email: email,
      })
        .unwrap()
        .then(() => {
          toast({
            title: "Your operation was successful",
            description: "Redirecting to email verification page...",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
          navigate("/email-verification");
        })
        .catch(() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "Unknown error occurred",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
          return;
        });
    }

    setIsLoading(false);
  }

  const togglePwdVisibility = () => {
    const newVal = !pwdVisible;
    setPwdVisible(newVal);
  };

  return (
    <div className="flex font-inter">
      <Toaster />
      <div className="flex justify-center items-center bg-gray-100 h-screen w-7/12">
        <img
          src="/src/assets/register-picture.jpg"
          className="object-cover drop-shadow-sm h-full w-full rounded-br-[96px]"
          alt="Surgery picture"
        />
      </div>
      <div className="bg-gray-100 flex outline-4 outline-red-700 flex-grow ">
        <div className="w-7/12  m-auto">
          <div className="mb-8">
            <p className="font-extrabold text-primary font-Raleway mb-4 text-4xl">
              Sign Up
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mb-6"
            >
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="flex justify-between text-xs font-light"
                >
                  Username
                  <p
                    id="uidnote"
                    className={`${userFocus && user && !validName ? "flex items-center text-red-700" : "hidden"}`}
                  >
                    <LuAlertCircle className="mr-1" />
                    4-24 chars, start with letter.
                  </p>
                </label>
                <Input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                ></Input>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="flex justify-between text-xs font-light"
                >
                  Email
                  <p
                    id="emailnote"
                    className={`${emailFocus && email && !validEmail ? "flex items-center text-red-700" : "hidden"}`}
                  >
                    <LuAlertCircle className="mr-1" />
                    Enter a valid email address.
                  </p>
                </label>
                <Input
                  type="text"
                  id="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="emailnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                ></Input>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="flex justify-between text-xs font-light"
                >
                  Password
                  <p
                    id="pwdnote"
                    className={`${pwdFocus && pwd && !validPwd ? "flex items-center text-red-700" : "hidden"}`}
                  >
                    <LuAlertCircle className="mr-1" />
                    8-24 chars, upper-lower, digits, !@#$%
                  </p>
                </label>
                <div className="relative mb-3 ">
                  <Input
                    type={pwdVisible ? `text` : `password`}
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                  ></Input>

                  {pwdVisible ? (
                    <FaEye
                      size="1.25rem"
                      onClick={togglePwdVisibility}
                      className="absolute text-gray-700 right-4 top-[11px]"
                    />
                  ) : (
                    <FaEyeSlash
                      size="1.25rem"
                      onClick={togglePwdVisibility}
                      className="absolute right-4 text-gray-700 top-[11px] "
                    />
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirm-password"
                  className="flex justify-between text-xs font-light"
                >
                  Confirm Password
                  <p
                    id="confirmnote"
                    className={`${matchFocus && !validMatch ? "flex items-center text-red-700" : "hidden"}`}
                  >
                    <LuAlertCircle className="mr-1" />
                    Passwords must match.
                  </p>
                </label>
                <div className="relative mb-6 ">
                  <Input
                    type={pwdVisible ? `text` : `password`}
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                  ></Input>

                  {pwdVisible ? (
                    <FaEye
                      size="1.25rem"
                      onClick={togglePwdVisibility}
                      className="absolute text-gray-700 right-4 top-[11px]"
                    />
                  ) : (
                    <FaEyeSlash
                      size="1.25rem"
                      onClick={togglePwdVisibility}
                      className="absolute right-4 text-gray-700 top-[11px] "
                    />
                  )}
                </div>
              </div>

              {/* Form field for the radio group */}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    {/* <FormLabel>Notify me about...</FormLabel> */}
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex justify-around"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="assistant" />
                          </FormControl>
                          <FormLabel>Assistant</FormLabel>
                        </FormItem>

                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="doctor" />
                          </FormControl>
                          <FormLabel>Doctor</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                variant="primary"
                typeof="submit"
                // disabled={!validName || !validPwd || !validMatch ? true : false}
                aria-disabled={
                  !validName || !validPwd || !validMatch ? true : false
                }
                className="font-Raleway w-full"
              >
                {isLoading ? `Loading...` : `Create an account`}
              </Button>
            </form>
          </Form>

          <p className="text-xs font-light text-primary opacity-60">
            You already have an account?&nbsp;&nbsp;
            <Link
              to="/login"
              className="underline  text-blue-custom hover:text-blue-950 font-semibold"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
