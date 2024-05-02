import Button from "./ui/Button";
import check from "../assets/check.svg";

export default function ChangePasswordStatus() {
  return (
    <div className="flex h-fit outline-2 outline-red-500 flex-col items-center gap-8">
      <p className="font-extrabold text-primary font-Raleway text-4xl">
        You password has been changed successfully!
      </p>

      <img
        src={check}
        className="size-32 opacity-30"
        alt="Check picture"
      />

      <Button
        variant="primary"
        typeof="submit"
        className="font-Raleway w-4/12"
      >
        Let's Go To Home Page
      </Button>
    </div>
  );
}
