
import Input from "@/components/ui/Input";

export default function PasswordSettings(toggleEdit) {
  console.log(toggleEdit);
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl 2xl:text-2xl font-bold">Contact Info</h2>
      <div className="grid grid-cols-2 gap-y-4">
        <div className="flex flex-col gap-0">
          <label
            htmlFor="passowrd"
            className="flex justify-between text-lg font-light"
          >
            Password
          </label>
          <Input
            className="rounded-md h-10 border-solid border-2 px-4 w-max"
            type="password"
            id="password"
          ></Input>
        </div>
        <div className="flex flex-col gap-0 col-start-1">
          <label
            htmlFor="passowrd"
            className="flex justify-between text-lg font-light"
          >
            Confirm Password
          </label>
          <Input
            className="rounded-md h-10 border-solid border-2 px-4 w-max"
            type="password"
            id="confirm"
          ></Input>
        </div>
      </div>
    </div>
  );
}
