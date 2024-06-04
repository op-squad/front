import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FaCalendarAlt, FaRobot } from "react-icons/fa";
import { IoBandageSharp } from "react-icons/io5";

export default function Nav() {
  return (
    <div className="flex flex-col items-center text-neutral-50 w-full">
      <div className="flex flex-col w-full">
        <Link
          className="flex gap-4 items-center justify-left pl-16 2xl:pl-20 py-5 2xl:py-4 text-xs 2xl:text-sm 2xl:text-sm text-center font-bold hover:bg-indigo-700"
          to="/dashboard"
        >
          <GoHomeFill size={20} />
          Dashboard
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <Link
          className="flex gap-4 items-center justify-left pl-16 2xl:pl-20 py-5 2xl:py-4 text-xs 2xl:text-sm 2xl:text-sm text-center font-bold hover:bg-indigo-700"
          to="/patients"
        >
          <IoBandageSharp size={20} />
          Patients
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <Link
          className="flex gap-4 items-center justify-left pl-16 2xl:pl-20 py-5 2xl:py-4 text-xs 2xl:text-sm 2xl:text-sm text-center font-bold hover:bg-indigo-700"
          to="/models"
        >
          <FaRobot size={20} />
          Models
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <Link
          className="flex gap-4 items-center justify-left pl-16 2xl:pl-20 py-5 2xl:py-4 text-xs 2xl:text-sm 2xl:text-sm text-center font-bold hover:bg-indigo-700"
          to="/calendar"
        >
          <FaCalendarAlt size={20} />
          Calendar
        </Link>
      </div>
    </div>
  );
}
