import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/cn";

type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
};

export default function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant }), className)}
    />
  );
}

const buttonVariants = cva("py-2 px-12 font-bold rounded-md hover:opacity-80", {
  variants: {
    variant: {
      primary: "bg-blue-custom text-white",
      secondary: "bg-gray-200 text-primary",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
