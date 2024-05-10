import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useLoginMutation } from "@/features/auth/authApiSlice";
import { setCredentials } from "@/features/auth/authSlice";
import { useToast } from "@/utils/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import React, { useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const userRef = useRef<HTMLInputElement | null>(null);

  const { toast } = useToast();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [pwdVisible, setPwdVisible] = useState(false);

  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await login({
      username: "chikoulaMina",
      password: pwd,
      email: user,
    })
      .unwrap()
      .then((result) => {
        console.log(result.accessToken);

        dispatch(setCredentials({ user: user, token: result.accessToken }));
        toast({
          title: "Your operation was successful",
          description: "Redirecting to dashboard...",
          // action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        setUser("");
        setPwd("");

        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: err.data.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      });
  };

  const togglePwdVisibility = () => {
    const newVal = !pwdVisible;
    setPwdVisible(newVal);
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser(e.target.value);
  const handlePwdInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPwd(e.target.value);

  return (
    <div className="flex  bg-gray-50 h-dvh ">
      <div className="bg-gray-50 flex items-center h-full flex-grow ">
        <div className="w-7/12  m-auto my-16 ">
          {errMsg && (
            <div className="bg-red-300 font-bold w-fit py-2 px-8 mb-4 text-center">
              <p>{errMsg}</p>
            </div>
          )}
          <div className="mb-12">
            <p className="font-extrabold text-primary font-Raleway mb-6 text-6xl">
              Login
            </p>
            <p className="text-lg font-light font-Raleway text-primary opacity-60">
              Welcome back Doc! Let's log you in.
            </p>
          </div>
          <form
            className="flex flex-col mb-8"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-lg font-light"
              >
                Email
              </label>
              <Input
                label="Username"
                autoComplete="on"
                ref={userRef}
                value={user}
                onChange={handleUserInput}
                id="username"
                required
              ></Input>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-lg font-light"
              >
                Password
              </label>
              <div className="relative mb-3 ">
                <Input
                  type={pwdVisible ? "text" : "password"}
                  id="password"
                  value={pwd}
                  className="font-Lato"
                  onChange={handlePwdInput}
                  required
                ></Input>

                {pwdVisible ? (
                  <FaEye
                    size="1.5rem"
                    onClick={togglePwdVisibility}
                    className="absolute text-gray-700 right-5 top-[16px]"
                  />
                ) : (
                  <FaEyeSlash
                    size="1.5rem"
                    onClick={togglePwdVisibility}
                    className="absolute right-5 text-gray-700 top-[16px] "
                  />
                )}
              </div>
              <Link
                to="/password-reset"
                className="block mb-4 text-[16px] hover:text-gray-500 underline text-gray-400"
              >
                Forgot passowrd?
              </Link>
            </div>
            <Button
              variant="primary"
              className="font-Raleway"
            >
              {isLoading ? `Loading...` : `Login`}
            </Button>
          </form>
          <p className="text-lg font-light text-primary opacity-60">
            You don't have an account?&nbsp;&nbsp;
            <Link
              to="/register"
              className="underline  text-blue-custom hover:text-blue-950 font-semibold"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center  h-full w-7/12">
        <img
          src="src/assets/login-picture.jpeg"
          className="object-cover drop-shadow-sm h-full w-full rounded-tl-[96px]"
          alt="Doctor picture"
        />
      </div>
    </div>
  );
}
