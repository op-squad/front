import { useState, useEffect } from "react";
import moment from "moment";
import { useGetVisitsByDateQuery } from "@/features/visit/visitApiSlice";
import Appointment from "./Appointment";
import CalendarController from "./CalendarController";
import Calendar from "./Calendar";
import { Link } from "react-router-dom";

export default function ScheduleCard() {
  const [date, setDate] = useState(moment());
  const responseVisits = useGetVisitsByDateQuery({
    date: date.format("YYYY-MM-DD"),
    page: 0,
    size: 3,
  });

  console.log(responseVisits);

  const { data: visitsByDate, isLoading, isError, refetch } = responseVisits;
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
          {visitsByDate &&
            visitsByDate.map((visit) => (
              <>
                <Appointment
                  title={visit.patientName}
                  // link={""}
                />
                <hr />
              </>
            ))}
        </div>
      )}
    </div>
  );
}
