import Input from "@/components/ui/Input";

export default function ContactSettings({ toggleEdit }) {
  console.log(toggleEdit);
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl 2xl:text-2xl font-bold">Contact Info</h2>
      <div className="flex flex-col gap-4 justify-between">
        <div className="flex flex-col gap-0">
          <label
            htmlFor="phone-number"
            className="flex justify-between text-lg font-light"
          >
            Phone Number
          </label>
          <Input
            className="rounded-md h-10 border-solid border-2 px-4 w-max"
            type="tel"
            id="phone-number"
          ></Input>
        </div>
        <div className="flex flex-col gap-0 col-start-1 col-end-3">
          <label
            htmlFor="address"
            className="flex justify-between text-lg font-light"
          >
            Address
          </label>
          <Input
            className="rounded-md h-10 border-solid border-2 px-4 w-96"
            type="text"
            id="address"
          ></Input>
        </div>
      </div>
    </div>
  );
}
