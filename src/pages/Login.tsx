import React, { useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
    <div className="flex font-inter">
      <div className="flex justify-center items-center bg-gray-300 h-screen w-7/12">
        <img
          src={brokenPicture}
          className="w-4/12"
          alt="Broken Picture SVG"
        />
      </div>

      <div className="bg-gray-100 flex flex-grow ">
        <div className="w-7/12  m-auto my-16">
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
                autoComplete="on"
                id="username"
                className="mt-1 p-4 bg-gray-300 block w-full"
                value={user}
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
              <div className="relative flex">
                <input
                  type={pwdVisible ? "text" : "password"}
                  id="password"
                  className="mt-1 bg-gray-300 mb-4 p-4 block w-full"
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
                Forget Password?
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
    </div>
  );
}
