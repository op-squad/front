import React, { useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import brokenPicture from "../assets/broken.svg";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { setCredentials } from "../features/auth/authSlice";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

export default function Login() {
  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLInputElement | null>(null);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [pwdVisible, setPwdVisible] = useState(false);

  const navigate = useNavigate();

  const [login] = useLoginMutation();
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
      email: "example@example.com",
    })
      .unwrap()
      .then((token) => {
        dispatch(setCredentials({ user: "anas", token: token.accessToken }));

        setUser("");
        setPwd("");

        navigate("/dashboard");
      })
      .catch((error) => {
        setErrMsg(`ERROR OCCURED: ${error?.data?.message}`);
        errRef.current?.focus();
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
    <div className="flex font-inter h-dvh ">
      <div className="flex justify-center items-center  h-full bg-gray-300 w-7/12">
        <img
          src={brokenPicture}
          className="w-4/12"
          alt="Broken Picture SVG"
        />
      </div>
      <div className="bg-gray-200 flex h-full flex-grow ">
        <div className="w-7/12  m-auto my-16 ">
          <div
            className={`bg-gray-300 w-fit m-auto py-2 px-8 ${errMsg ? "mb-4" : "mb-24"}`}
          >
            Logo
          </div>
          {errMsg && (
            <div className="bg-red-300 font-bold w-fit py-2 px-8 mb-4 text-center">
              <p>{errMsg}</p>
            </div>
          )}
          <div className="mb-8">
            <p className="text-xl font-semibold">Welcome Back Doc!</p>
            <p className="font-bold text-4xl">Let's log you in.</p>
          </div>
          <form
            className="flex flex-col"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
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
                className="block text-sm font-medium"
              >
                Password
              </label>
              <div className="relative flex">
                <input
                  type={pwdVisible ? "text" : "password"}
                  id="password"
                  className="mt-1 bg-gray-300 mb-4 rounded-md p-4 block w-full"
                  value={pwd}
                  onChange={handlePwdInput}
                  required
                />
                <button
                  type="button"
                  onClick={togglePwdVisibility}
                >
                  {pwdVisible ? (
                    <FaEyeSlash
                      size="1.5rem"
                      className="absolute top-5 right-4"
                    />
                  ) : (
                    <FaEye
                      size="1.5rem"
                      className="absolute top-5 right-4"
                    />
                  )}
                </button>
              </div>
              <label
                htmlFor="password"
                className="block mb-8 underline text-[12px] font-medium text-gray-600"
              >
                Forgot Password?
              </label>
            </div>
            <Button variant="primary">Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
