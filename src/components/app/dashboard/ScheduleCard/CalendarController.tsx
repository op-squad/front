import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import moment from "moment";
export default function CalendarController({ date, setDate }) {
  return (
    <div className="flex items-center w-32 justify-between">
      <div
        className="cursor-pointer"
        onClick={() => setDate(moment(date).subtract(1, "M").date(1))}
      >
        <FaChevronLeft size={14} />
      </div>
      <div className="font-semibold text-lg">{date.format("MMM'YY")}</div>
      <div
        className="cursor-pointer"
        onClick={() => setDate(moment(date).add(1, "M").date(1))}
      >
        <FaChevronRight size={14} />
      </div>
    </div>
  );
}
