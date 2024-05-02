import { useRef } from "react";
import Button from "./ui/Button";
import Input from "../components/ui/Input";

export default function LoginDetailForm() {
  const emailRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex h-fit outline-2 outline-red-500 flex-col items-center gap-12">
      <p className="font-extrabold text-primary font-Raleway text-4xl">
        Let's talk more about you!
      </p>

      <form className="mb-8 w-8/12">
        <div className="flex gap-4 justify-between mb-4">
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-light"
            >
              First Name
            </label>
            <Input
              label="Username"
              autoComplete="on"
              ref={emailRef}
              id="username"
              required
            ></Input>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-light"
            >
              Last Name
            </label>
            <Input
              label="Username"
              autoComplete="on"
              ref={emailRef}
              id="username"
              required
            ></Input>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-xs font-light"
          >
            Birthdate
          </label>
          <Input
            label="Username"
            id="username"
            required
          ></Input>
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-xs font-light"
          >
            Gender
          </label>
          <div className="relative mb-3 ">
            <Input
              id="password"
              className="font-Lato"
              required
            ></Input>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-xs font-light"
          >
            Address
          </label>
          <div className="relative mb-8 ">
            <Input
              id="password"
              className="font-Lato"
              required
            ></Input>
          </div>
        </div>
        <Button
          variant="primary"
          typeof="submit"
          className="font-Raleway w-full"
        >
          Continue
        </Button>
      </form>
    </div>
  );
}
