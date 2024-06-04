import { Link } from "react-router-dom";

export default function Appointment({ duration, title, link }) {
  return (
    <div className="flex justify-between items-end">
      <div className="flex flex-col gap-0.5">
        <p className="text-xs 2xl:text-sm font-bold text-gray-400">
          {duration}
        </p>
        <p className="text-base 2xl:text-lg font-semibold">{title}</p>
      </div>
      <Link
        className="text-xs 2xl:text-sm font-semibold text-blue-700 hover:underline cursor-pointer"
        to={link}
      >
        View Details
      </Link>
    </div>
  );
}
