interface PasswordResetMessageProps {
  sent?: boolean;
}

export default function PasswordResetMessage({
  sent = false,
}: PasswordResetMessageProps) {
  return (
    <div className="mb-8 flex flex-col items-center gap-2">
      <p className="font-bold text-4xl text-center whitespace-nowrap">
        {sent ? `We've Sent You A Verification Code` : `Forgot Password?`}
      </p>
      <p className="text-base font-extralight mb-8">
        {sent ? "Check your email." : `Don't worry, we'll help you with that.`}
      </p>
      <form className={sent ? `w-3/4` : `w-5/6`}>
        <div className="mb-4">
          <label
            htmlFor={sent ? `code` : `email`}
            className="block text-sm font-medium"
          >
            {sent ? `Verification Code` : `Email`}
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 p-4 bg-gray-300 block w-full"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-black w-full font-bold mb-24 p-4 text-white"
        >
          {sent ? `Reset Your Password` : `Send Verification Code`}
        </button>
      </form>
    </div>
  );
}
