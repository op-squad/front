import moment from "moment";

function Day({ index, currentDay, setCurrentDay }) {
  const startOfMonth = currentDay.clone().startOf("month").day() + 1;
  let style =
    "flex justify-center items-center before:content-[''] before:size-8 2xl:before:size-10 before:rounded-full relative before:absolute before:-z-10 z-0 cursor-pointer";
  if (index == 1) {
    style += " col-start-" + startOfMonth;
  }
  if (index != currentDay.date()) {
    style += " before:hover:bg-blue-600 hover:text-blue-50";
  } else {
    style += " before:bg-blue-600 text-blue-50";
  }

  return (
    <div
      className={style}
      onClick={() => setCurrentDay(moment(currentDay).date(index))}
      key={index}
    >
      {index}
    </div>
  );
}

export default function Calendar({ currentDay, setCurrentDay }) {
  const days = [...Array(currentDay.daysInMonth())].map((e, i) => (
    <Day
      index={i + 1}
      currentDay={currentDay}
      setCurrentDay={setCurrentDay}
    />
  ));
  return (
    <div>
      <div className="flex justify-between pb-5 2xl:pb-6 w-full">
        <div className="text-center font-medium text-sm 2xl:text-base w-8 2xl:w-9">
          Sun
        </div>
        <div className="text-center font-medium text-sm 2xl:text-base w-8 2xl:w-9">
          Mon
        </div>
        <div className="text-center font-medium text-sm 2xl:text-base w-8 2xl:w-9">
          Tue
        </div>
        <div className="text-center font-medium text-sm 2xl:text-base w-8 2xl:w-9">
          Wen
        </div>
        <div className="text-center font-medium text-sm 2xl:text-base w-8 2xl:w-9">
          Thu
        </div>
        <div className="text-center font-medium text-sm 2xl:text-base w-8 2xl:w-9">
          Fri
        </div>
        <div className="text-center font-medium text-sm 2xl:text-base w-8 2xl:w-9">
          Sat
        </div>
      </div>
      <div className="grid grid-cols-7 gap-y-4 2xl:gap-y-6 gap-x-8 px-3 2xl:px-0">
        {days.map((e) => e)}
      </div>
    </div>
  );
}
