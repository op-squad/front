import { useRef } from "react";
import Button from "./ui/Button";
import Input from "../components/ui/Input";
interface PasswordResetMessageProps {
  sent?: boolean;
}

export default function PasswordResetMessage({
  sent = false,
}: PasswordResetMessageProps) {
  const emailRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex h-fit outline-2 outline-red-500 flex-col items-center gap-4">
      <p className="font-extrabold text-primary font-Raleway text-4xl">
        {sent ? `We Sent You A Verification Code` : `Forgot Password?`}
      </p>
      <p className="text-sm font-light font-Raleway mb-8 text-primary opacity-60">
        {sent ? "Check your email." : `Don't worry, we'll help you with that.`}
      </p>
      <form className={sent ? `w-7/12` : `w-full`}>
        <div className="mb-8">
          <label
            htmlFor={sent ? `code` : `email`}
            className="block text-xs font-light"
          >
            {sent ? `Verification Code` : `Email`}
          </label>
          <Input
            label="Email"
            autoComplete="on"
            ref={emailRef}
            // value={user}
            // onChange={handleUserInput}
            id="username"
            required
          ></Input>
        </div>
        <Button
          variant="primary"
          typeof="submit"
          className="font-Raleway w-full"
        >
          {sent ? `Reset Your Password` : `Send Verification Code`}
        </Button>
      </form>
    </div>
  );
}
