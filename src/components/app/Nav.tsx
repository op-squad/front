import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="flex flex-col items-center text-neutral-50 my-32 w-full">
      <div className="flex flex-col w-full">
        <Link
          className="py-8 text-center hover:bg-indigo-700"
          to="/dashboard"
        >
          Dashboard
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <Link
          className="py-8 text-center hover:bg-indigo-700"
          to="/patients"
        >
          Patients
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <Link
          className="py-8 text-center hover:bg-indigo-700"
          to="/models"
        >
          Models
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <Link
          className="py-8 text-center hover:bg-indigo-700"
          to="/calendar"
        >
          Calendar
        </Link>
      </div>
    </div>
  );
}
