import { useState } from "react";
import Calendar from "./Calendar";
import moment from "moment";
import Appointment from "./Appointment";
import CalendarController from "./CalendarController";

export default function ScheduleCard() {
  const [date, setDate] = useState(moment());

  return (
    <div className="flex flex-col gap-6 bg-blue-50 text-blue-950 rounded-xl p-8">
      <div className="flex justify-between">
        <p className="font-extrabold text-xl 2xl:text-2xl text-blue-950">
          Schedule
        </p>
        <CalendarController
          date={date}
          setDate={setDate}
        />
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
