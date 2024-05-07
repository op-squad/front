import { useRef } from "react";
import doctorImg from "/home/wb21/projects/op-squad/front/src/assets/profile/doctor.jpg";

const chooseFile = (ref) => {
  ref.current.click();
};

export default function ProfileSettings() {
  const ref = useRef();
  return (
    <div className="flex flex-col gap-16 pl-4">
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl 2xl:text-2xl font-bold">Profile Picture</h2>
        <div className="flex gap-24 items-center">
          <img
            src={doctorImg}
            alt="doctor"
            className="w-48 aspect-square object-cover rounded-full"
          />
          <div className="flex flex-col gap-4">
            <input
              className="hidden"
              type="file"
              ref={ref}
            />
            <button
              onClick={() => chooseFile(ref)}
              className="bg-blue-600 text-blue-50 px-8 py-2 rounded-xl text-sm font-semibold"
            >
              Change Picture
            </button>
            <button className="border-solid border-2 border-red-600 text-red-600 px-8 py-2 rounded-xl text-sm font-semibold">
              Delete Picture
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl 2xl:text-2xl font-bold">Basic Information</h2>
        <div className="grid grid-cols-2 gap-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="family-name">Family Name</label>
            <input
              className="rounded-lg h-10 border-solid border-2 px-4 w-max"
              type="text"
              id="family-name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="first-name">First Name</label>
            <input
              className="rounded-lg h-10 border-solid border-2 px-4 w-max"
              type="text"
              id="first-name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              className="rounded-lg h-10 border-solid border-2 px-4 w-max"
            >
              <option value="Doctor">Doctor</option>
              <option value="Assistant">Assistant</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="specialty">Specialty</label>
            <select
              id="specialty"
              className="rounded-lg h-10 border-solid border-2 px-4 w-max"
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