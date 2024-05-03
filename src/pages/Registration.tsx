import { useState, useRef, useEffect } from "react";
import { Label } from "@components/ui/Label";
import { RadioGroup, RadioGroupItem } from "@components/ui/RadioGroup";
import Button from "@components/ui/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Input from "@components/ui/Input";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { LuAlertCircle } from "react-icons/lu";
import { useToast } from "@components/ui/use-toast";
import { ToastAction } from "@components/ui/Toast";
import { Toaster } from "../toaster";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export default function Register() {
  const userRef = useRef<HTMLInputElement | null>(null);
  // const errorRef = useRef<HTMLInputElement | null>(null);

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

  // const [errMsg, setErrMsg] = useState("");

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

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

  useEffect(() => {
    // setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      console.log("im here");

      return;
    }
    // navigate("register/details");
  };

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
          <form onSubmit={handleSubmit}>
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
            <RadioGroup
              className="flex justify-around mb-6"
              defaultValue="assistant"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="assistant"
                  id="assistant"
                />
                <Label htmlFor="assistant">Assistant</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="doctor"
                  id="doctor"
                />
                <Label htmlFor="doctor">Doctor</Label>
              </div>
            </RadioGroup>

            <Button
              variant="primary"
              typeof="submit"
              // disabled={!validName || !validPwd || !validMatch ? true : false}
              aria-disabled={
                !validName || !validPwd || !validMatch ? true : false
              }
              className={`font-Raleway w-full ${
                !validName || !validPwd || !validMatch
                  ? "opacity-40 hover:cursor-not-allowed"
                  : ""
              }`}
            >
              Create an account
            </Button>
          </form>
          {/* <Button
            variant="secondary"
            className="font-Raleway mb-8 w-full"
          >
            Sign up with Google
          </Button> */}
        </div>
      </div>
    </div>
  );
}
