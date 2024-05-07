import { useRef } from "react";
import Button from "./ui/Button";
import Input from "../components/ui/Input";

export default function ChangePasswordForm() {
  const emailRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex h-fit outline-2 outline-red-500 flex-col items-center gap-12">
      <p className="font-extrabold text-primary font-Raleway text-4xl">
        Now let's change your password.
      </p>
      <form className="w-7/12">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-xs font-light"
          >
            New Password
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
        <div className="mb-8">
          <label className="block text-xs font-light">Confirm Password</label>
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
          Submit
        </Button>
      </form>
    </div>
  );
}
