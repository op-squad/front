import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="flex flex-col items-center text-neutral-50 w-full">
      <div className="flex flex-col w-full">
        <Link
          className="py-5 2xl:py-7 text-sm 2xl:text-base text-center font-bold hover:bg-indigo-700"
          to="/dashboard"
        >
          Dashboard
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <Link
          className="py-5 2xl:py-7 text-sm 2xl:text-base text-center font-bold hover:bg-indigo-700"
          to="/patients"
        >
          Patients
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <Link
          className="py-5 2xl:py-7 text-sm 2xl:text-base text-center font-bold hover:bg-indigo-700"
          to="/models"
        >
          Models
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <Link
          className="py-5 2xl:py-7 text-sm 2xl:text-base text-center font-bold hover:bg-indigo-700"
          to="/calendar"
        >
          Calendar
        </Link>
      </div>
    </div>
  );
}
