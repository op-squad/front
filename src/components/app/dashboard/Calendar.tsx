import moment from "moment";
import { useState } from "react";

function Day({ index, startOfMonth, currentDay, onClick }) {
  let style =
    "flex justify-center items-center rounded-full h-9 cursor-pointer";
  if (index == 1) {
    style += ` col-start-${startOfMonth}`;
  }
  if (index != currentDay.date()) {
    style += " hover:bg-blue-600 hover:text-blue-50";
  } else {
    style += " bg-blue-600 text-blue-50";
  }

  return (
    <div
      className={style}
      onClick={() => onClick(moment(currentDay).date(index))}
      key={index}
    >
      {index}
    </div>
  );
}

export default function Calendar() {
  const today = moment("2024-06-23");
  const [currentDay, setCurrentDay] = useState(today);
  console.log(currentDay.date());
  const start =
    ((((currentDay.day() - currentDay.date() + 1) % 7) + 7) % 7) + 1;
  const days = [...Array(currentDay.daysInMonth())].map((e, i) => (
    <Day
      index={i + 1}
      startOfMonth={start}
      currentDay={currentDay}
      onClick={setCurrentDay}
    />
  ));
  return (
    <div>
      <div className="grid grid-cols-7 pb-4 gap-x-8">
        <div className="text-center">Sun</div>
        <div className="text-center">Mon</div>
        <div className="text-center">Tue</div>
        <div className="text-center">Wen</div>
        <div className="text-center">Thu</div>
        <div className="text-center">Fri</div>
        <div className="text-center">Sat</div>
      </div>
      <div className="grid grid-cols-7 gap-y-2 gap-x-8">
        {days.map((e) => e)}
      </div>
    </div>
  );
}
