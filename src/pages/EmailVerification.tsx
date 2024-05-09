// import ChangePasswordForm from "../components/ChangePasswordForm";

import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import { useToast } from "@components/ui/use-toast";
import { useRef, useState } from "react";
import { useVerifyMutation } from "../features/auth/authApiSlice";
import { Toaster } from "../utils/toaster";
import { ToastAction } from "@radix-ui/react-toast";

export default function EmailVerification() {
  const codeRef = useRef<HTMLInputElement | null>(null);
  const [code, setCode] = useState("");

  const [verify, { isLoading }] = useVerifyMutation();
  const { toast } = useToast();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(code);

    await verify({
      code: code,
    })
      .unwrap()
      .then((result) => {
        console.log(result);

        toast({
          title: "Your operation was successful",
          description: "Redirecting to email verification page...",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      })
      .catch((err) => {
        console.log(err);

        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: err.data.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
        return;
      });
  }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* <div className="absolute top-16 text-gray-600 left-24">
        <p>{"←"}&nbsp;&nbsp; back to login page</p>
      </div> */}
      <Toaster />
      <div className="flex h-fit outline-2 outline-red-500 flex-col items-center gap-4">
        <p className="font-extrabold text-primary font-Raleway text-4xl">
          We Sent You A Verification Code
        </p>
        <p className="text-sm font-light font-Raleway mb-8 text-primary opacity-60">
          Check your email.
        </p>
        <form
          className="w-7/12"
          onSubmit={handleSubmit}
        >
          <div className="mb-8">
            <label
              htmlFor="code"
              className="block text-xs font-light"
            >
              Verification Code
            </label>
            <Input
              ref={codeRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              id="code"
              required
            ></Input>
          </div>
          <Button
            variant="primary"
            typeof="submit"
            className="font-Raleway w-full"
          >
            {isLoading ? `Loading...` : `Send Verification Code`}
          </Button>
        </form>
      </div>
    </div>
  );
}
