import { useState, useEffect } from "react";
import moment from "moment";
import { useGetStatVisitsByDateQuery } from "@/features/stat/statApiSlice";
import Appointment from "./Appointment";
import CalendarController from "./CalendarController";
import Calendar from "./Calendar";
import { Link } from "react-router-dom";

export default function ScheduleCard() {
  const [date, setDate] = useState(moment());
  const {
    // data: visitsByDate,
    isLoading,
    isError,
    refetch,
  } = useGetStatVisitsByDateQuery({});

  useEffect(() => {
    refetch(); // Ensure data is refetched when date changes
  }, [date, refetch]);

  return (
    <div className="flex flex-col gap-6 bg-blue-50 text-blue-950 rounded-xl p-8">
      <div className="flex justify-between">
        <p className="font-extrabold text-xl 2xl:text-2xl text-blue-950 cursor-pointer hover:underline">
          <Link to="/calendar">Schedule</Link>
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
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching visits for {date.format("YYYY-MM-DD")}</p>
      ) : (
        <div className="flex flex-col gap-4">
          {/* {visitsByDate &&
            // visitsByDate[date.format("YYYY-MM-DD")].map((visit) => ( */}
          {/* <React.Fragment key={visit.id}> */}
          <Appointment
            duration="10:00 AM - 11:00 AM"
            title={"visit.doctorName" || "Dr. John Doe"}
            link={""}
          />
          <hr />
          {/* </React.Fragment> */}
          {/* ))} */}
        </div>
      )}
    </div>
  );
}
