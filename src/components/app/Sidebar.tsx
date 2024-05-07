import Nav from "./Nav";
import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import doctorImg from "/home/wb21/projects/op-squad/front/src/assets/profile/doctor.jpg";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center bg-indigo-600 text-neutral-50 w-72 2xl:w-80 h-screen justify-between py-16">
      <div className="flex flex-col items-center">
        <img
          src={doctorImg}
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
      <div className="flex flex-col items-center text-neutral-50 w-full">
        <div className="flex flex-col w-full">
          <Link
            className="flex gap-4 items-center justify-left pl-16 2xl:pl-20 py-5 2xl:py-4 text-xs 2xl:text-sm 2xl:text-sm text-center font-bold hover:bg-indigo-700"
            to="/settings"
          >
            <IoSettingsSharp size={20} />
            Setting
          </Link>
        </div>
        <div className="flex flex-col w-full">
          <Link
            className="flex gap-4 items-center justify-left pl-16 2xl:pl-20 py-5 2xl:py-4 text-xs 2xl:text-sm 2xl:text-sm text-center font-bold hover:bg-indigo-700"
            to="/dashboard"
          >
            <FaPowerOff size={18} />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
