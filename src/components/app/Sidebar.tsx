import Nav from "./Nav";
import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center bg-indigo-600 text-neutral-50 w-72 2xl:w-80 h-screen justify-between py-16">
      <div className="flex flex-col items-center">
        <img
          src="src/assets/profile/doctor.jpg"
          alt="doctor"
          className="w-2/5 aspect-square object-cover rounded-full"
        />
        <div className="flex flex-col items-center mt-6">
          <p className="text-sm 2xl:text-base font-extrabold">
            Lekhder Belloumi
          </p>
          <p className="text-sm 2xl:text-base font-medium mt-1">Lead Doctor</p>
        </div>
      </div>
      <Nav />
      <div className="flex flex-col w-full">
        <Link
          className="flex gap-4 items-center justify-left pl-20 py-5 2xl:py-7 text-sm 2xl:text-base text-center font-bold hover:bg-indigo-700"
          to="/dashboard"
        >
          <FaPowerOff size={20} />
          Logout
        </Link>
      </div>
    </div>
  );
}
