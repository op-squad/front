import doctorImg from "@/assets/profile/doctor.jpg";
import Input from "@/components/ui/Input";
import { RefObject, useRef } from "react";

const chooseFile = (ref: RefObject<HTMLInputElement>) => {
  ref.current?.click();
};

export default function ProfileSettings() {
  const ref = useRef(null);
  return (
    <div className="flex flex-col gap-16 pl-4">
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl 2xl:text-2xl font-bold">Profile Picture</h2>
        <div className="flex gap-24 items-center">
          <img
            src={doctorImg}
            alt="doctor"
            className="w-48 aspect-square border-2 border-primary border-opacity-30 object-cover rounded-full"
          />
          <div className="flex flex-col justify-center gap-4">
            <Input
              className="hidden"
              type="file"
              ref={ref}
            ></Input>
            <button
              onClick={() => chooseFile(ref)}
              className="bg-blue-600 text-blue-50 px-8 py-2 rounded-md text-lg font-semibold"
            >
              Change Picture
            </button>
            <button className="border-solid border-2 border-red-600 text-red-600 px-8 py-2 rounded-md text-lg font-semibold">
              Delete Picture
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl 2xl:text-2xl font-bold">Basic Information</h2>
        <div className="grid grid-cols-2 gap-y-4">
          <div className="flex flex-col gap-0">
            <label
              htmlFor="family-name"
              className="flex justify-between text-lg font-light"
            >
              First Name
            </label>
            <Input
              className="rounded-lg h-10 border-solid border-2 px-4 w-max"
              type="text"
              id="family-name"
            ></Input>
          </div>
          <div className="flex flex-col mb-2 gap-0">
            <label
              htmlFor="family-name"
              className="flex justify-between text-lg font-light"
            >
              Last Name
            </label>
            <Input
              className="rounded-lg h-10 border-solid border-2 px-4 w-max"
              type="text"
              id="first-name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="role"
              className="flex justify-between text-lg font-light"
            >
              Gender
            </label>
            <select
              id="role"
              className="rounded-md h-10 border-solid border-2 px-4 w-max"
            >
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="specialty"
              className="flex justify-between text-lg font-light"
            >
              Specialty
            </label>
            <select
              id="specialty"
              className="rounded-md h-10 border-solid border-2 px-4 w-max"
            >
              <option value="Surgery">Surgery</option>
              <option value="Neurology">Neurology</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
