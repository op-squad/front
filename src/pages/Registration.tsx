import { useState, useRef, useEffect } from "react";
import Button from "../components/ui/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";

export default function Register() {
  const emailRef = useRef<HTMLInputElement | null>(null);

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [pwdVisible, setPwdVisible] = useState(false);

  // const navigate = useNavigate();

  // const dispatch = useDispatch();

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // await login({
    //   username: user,
    //   password: pwd,
    //   email: "example@example.com",
    // })
    //   .unwrap()
    //   .then((token) => {
    //     dispatch(setCredentials({ user: "anas", token: token.accessToken }));

    //     setUser("");
    //     setPwd("");

    //     navigate("/dashboard");
    //   })
    //   .catch((error) => {
    //     setErrMsg(`ERROR OCCURED: ${error?.data?.message}`);
    //     errRef.current?.focus();
    //   });
  };

  const togglePwdVisibility = () => {
    const newVal = !pwdVisible;
    setPwdVisible(newVal);
  };

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser(e.target.value);
  const handlePwdInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPwd(e.target.value);
  const handleConfirmPwdInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmPwd(e.target.value);

  return (
    <div className="flex font-inter">
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
          <form
            className="mb-8"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-xs font-light"
              >
                Email
              </label>
              <Input
                label="Username"
                autoComplete="on"
                ref={emailRef}
                value={email}
                onChange={handleEmailInput}
                id="username"
                required
              ></Input>
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-xs font-light"
              >
                Username
              </label>
              <Input
                label="Username"
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
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-xs font-light"
              >
                Confirm Password
              </label>
              <div className="relative mb-8 ">
                <Input
                  type={pwdVisible ? "text" : "password"}
                  id="password"
                  value={confirmPwd}
                  className="font-Lato"
                  onChange={handleConfirmPwdInput}
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
            </div>
            <Button
              variant="primary"
              typeof="submit"
              className="font-Raleway w-full"
            >
              Create an account
            </Button>
          </form>
          <Button
            variant="secondary"
            className="font-Raleway mb-8 w-full"
          >
            Sign up with Google
          </Button>
        </div>
      </div>
    </div>
  );
}
