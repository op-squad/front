import { useState } from "react";
import Calendar from "./Calendar/Calendar";
import moment from "moment";
import { Link } from "react-router-dom";

function Appointment({ duration, title, link }) {
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

export default function ScheduleCard() {
  const [date, setDate] = useState(moment());

  return (
    <div className="flex flex-col gap-6 bg-blue-50 text-blue-950 rounded-xl p-8">
      <div className="flex justify-between">
        <p className="font-extrabold text-2xl text-blue-950">Schedule</p>
        {/* <CalendarController /> */}
      </div>
      <hr className="mx-[-32px]" />
      <Calendar
        currentDay={date}
        setCurrentDay={setDate}
      />
      <hr className="mx-[-32px]" />
      <div className="flex flex-col gap-4">
        <Appointment
          duration={"10:00am - 10:30am"}
          title={"Patient Checkup"}
          link={""}
        />
        <hr />
        <Appointment
          duration={"10:00am - 10:30am"}
          title={"Patient Checkup"}
          link={""}
        />
        <hr />
        <Appointment
          duration={"10:00am - 10:30am"}
          title={"Patient Checkup"}
          link={""}
        />
      </div>
    </div>
  );
}
