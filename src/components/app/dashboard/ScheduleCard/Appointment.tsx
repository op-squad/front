import { Link } from "react-router-dom";

export default function Appointment({ duration, title, link }) {
  return (
    <div className="flex justify-between items-end">
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-bold text-gray-400">{duration}</p>
        <p className="text-lg font-semibold">{title}</p>
      </div>
      <Link
        className="text-sm font-semibold text-blue-700 hover:underline cursor-pointer"
        to={link}
      >
        View Details
      </Link>
    </div>
  );
}
