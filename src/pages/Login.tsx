import React, { useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { setCredentials } from "../features/auth/authSlice";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useToast } from "@components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { Toaster } from "../toaster";

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
      username: user,
      password: pwd,
      email: user,
    })
      .unwrap()
      .then((token) => {
        dispatch(setCredentials({ user: user, token: token.accessToken }));

        setUser("");
        setPwd("");

        navigate("/dashboard");
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
      <Toaster />
      <div className="bg-gray-50 flex items-center h-full flex-grow ">
        <div className="w-7/12  m-auto my-16 ">
          {errMsg && (
            <div className="bg-red-300 font-bold w-fit py-2 px-8 mb-4 text-center">
              <p>{errMsg}</p>
            </div>
          )}
          <div className="mb-12">
            <p className="font-extrabold text-primary font-Raleway mb-4 text-4xl">
              Login
            </p>
            <p className="text-sm font-light font-Raleway text-primary opacity-60">
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
                className="block text-xs font-light"
              >
                Username
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
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-xs font-light"
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
              <label
                htmlFor="password"
                className="block mb-4 text-[11px] underline text-gray-400"
              >
                Can't log in?
              </label>
            </div>
            <Button
              variant="primary"
              className="font-Raleway"
            >
              {isLoading ? `Loading...` : `Login`}
            </Button>
          </form>
          <Button
            variant="secondary"
            className="font-Raleway mb-8 w-full"
          >
            Log in with Google
          </Button>
          <p className="text-xs font-light text-primary opacity-60">
            You don't have an account?&nbsp;&nbsp;
            <span className="underline  text-blue-custom font-semibold">
              Sign up
            </span>
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
