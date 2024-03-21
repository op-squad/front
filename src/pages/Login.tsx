import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import brokenPicture from "../assets/broken.svg";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { setCredentials } from "../features/auth/authSlice";

export default function Login() {
  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLInputElement | null>(null);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

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

    try {
      console.log("in the login action block");

      const token = await login({
        username: "admin",
        password: "admin",
        email: "example@example.com",
      }).unwrap();

      console.log(token);
      console.log(token.accessToken);

      dispatch(setCredentials({ user: "anas", token: token.accessToken }));
      setUser("");
      setPwd("");
      navigate("/dashboard");
    } catch (err) {
      setErrMsg(`ERROR OCCURED: ${err}`);
      errRef.current?.focus();
    }
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser(e.target.value);
  const handlePwdInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPwd(e.target.value);

  return (
    <div className="flex font-inter">
      <div className="flex justify-center items-center bg-gray-300 h-screen w-7/12">
        <img
          src={brokenPicture}
          className="w-4/12"
          alt="Broken Picture SVG"
        />
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="bg-gray-100 flex flex-grow ">
          <div className="w-7/12  m-auto my-16">
            {errMsg ? (
              <h1>`Login Error: ${errMsg}`</h1>
            ) : (
              <div className="bg-gray-300 w-fit m-auto  py-2 px-8 mb-24">
                Logo
              </div>
            )}
            <div className="mb-8">
              <p className="text-xl font-semibold">Welcome Back Doc!</p>
              <p className="font-bold text-4xl">Let's log you in.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium"
                >
                  Username
                </label>
                <input
                  type="text"
                  ref={userRef}
                  id="username"
                  className="mt-1 p-4 bg-gray-300 block w-full"
                  value="anas"
                  onChange={handleUserInput}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 bg-gray-300 mb-4 p-4 block w-full"
                  value="12345"
                  onChange={handlePwdInput}
                  required
                />
                <label
                  htmlFor="password"
                  className="block mb-8 underline text-[12px] font-medium text-gray-600"
                >
                  Can't log in?
                </label>
              </div>
              <button
                type="submit"
                className="bg-black font-bold mb-24 py-2 px-12  text-white"
              >
                Login
              </button>
            </form>
            <button
              type="submit"
              className="bg-gray-300 py-2 w-full text-black font-bold"
            >
              OR Login Using Google
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
