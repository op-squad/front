import { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { ToastAction } from "@radix-ui/react-toast";
import { useToast } from "@components/ui/use-toast";
import {
  usePwdForgotMutation,
  usePwdResetMutation,
} from "../features/auth/authApiSlice";
import { Toaster } from "../toaster";

export default function PasswordReset() {
  const [sent, setSent] = useState(false); // State to track if verification code was sent
  const [isLoading, setIsLoading] = useState(false); // State to track if verification code was sent
  const [email, setEmail] = useState(""); // State to hold user's email input
  const [newPwd, setNewPwd] = useState(""); // State to hold user's email input

  const { toast } = useToast();
  const [pwdForgot] = usePwdForgotMutation();
  const [pwdReset] = usePwdResetMutation();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!sent) {
      // Logic to send verification code (simulate in this example)
      console.log("Sending verification code to:", email);
      // Update state to indicate code was sent

      setIsLoading(true);

      await pwdForgot({
        email: email,
      })
        .unwrap()
        .then(() => {
          toast({
            title: "Your operation was successful",
            description: "",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
          setSent(true);
        })
        .catch((err) => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: err.data.message,
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        });
      setIsLoading(false);
    } else {
      // Logic to handle password reset (simulate in this example)
      console.log("Resetting password for:", email, newPwd);
      // Reset the form after password reset (clear email and set 'sent' back to false)

      setIsLoading(true);
      await pwdReset({
        passwordResetToken: email,
        password: newPwd,
      })
        .unwrap()
        .then(() => {
          toast({
            title: "Your password is reset successful",
            description: "Redirecting to log in page...",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        })
        .catch((err) => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: err.data.message,
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        });
      setEmail("");
      setSent(false);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Toaster />
      <div className="absolute top-16 text-gray-600 left-24">
        <p>{"←"}&nbsp;&nbsp; back to login page</p>
      </div>
      <div className="flex h-fit outline-2 outline-red-500 flex-col items-center gap-4">
        <p className="font-extrabold text-primary font-Raleway text-4xl">
          {sent ? `We Sent You A Verification Code` : `Forgot Password?`}
        </p>
        <p className="text-sm font-light font-Raleway mb-8 text-primary opacity-60">
          {sent
            ? "Check your email."
            : `Don't worry, we'll help you with that.`}
        </p>
        <form
          onSubmit={handleFormSubmit}
          className={sent ? `w-7/12` : `w-full`}
        >
          <div className="mb-4">
            <label
              htmlFor={sent ? `code` : `email`}
              className="block text-xs font-light"
            >
              {sent ? `Password Token` : `Email`}
            </label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id={sent ? "code" : "email"}
              required
            />
          </div>
          {sent && (
            <div className="mb-8">
              <label
                htmlFor="newPwd"
                className="block text-xs font-light"
              >
                New Password
              </label>
              <Input
                value={newPwd}
                onChange={(e) => setNewPwd(e.target.value)}
                id="newPwd"
                required
              />
            </div>
          )}
          <Button
            variant="primary"
            type="submit" // Use 'type' instead of 'typeof' for form submission
            className="font-Raleway w-full"
          >
            {isLoading
              ? `Loading...`
              : sent
                ? `Reset Your Password`
                : `Send Verification Code`}
          </Button>
        </form>
      </div>
    </div>
  );
}
