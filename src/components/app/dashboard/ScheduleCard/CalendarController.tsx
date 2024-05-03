import moment from "moment";
export default function CalendarController({ date, setDate }) {
  return (
    <div className="flex gap-2">
      <div
        className="cursor-pointer hover:underline"
        onClick={() => setDate(moment(date).subtract(1, "M").date(1))}
      >
        left
      </div>
      <div>{date.format("MMM'YY")}</div>
      <div
        className="cursor-pointer hover:underline"
        onClick={() => setDate(moment(date).add(1, "M").date(1))}
      >
        right
      </div>
    </div>
  );
}
