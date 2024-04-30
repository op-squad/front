import { cn } from "../../utils/cn";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div>
        <label
          htmlFor={props.id}
          className="block text-sm font-medium"
        >
          {label}
        </label>
        <input
          ref={ref}
          className={cn(
            "mt-1 p-4  bg-gray-300 block w-full rounded-md",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
