import Sidebar from "../components/app/Sidebar";
import StatCard from "../components/app/dashboard/StatCard";
import BarChart from "../components/app/dashboard/BarChart";
import ScheduleCard from "../components/app/dashboard/ScheduleCard/ScheduleCard";

export default function Dashboard() {
  return (
    <div className="h-[1300px]">
      <Sidebar />
      <div className="pl-80 bg-blue-100 h-full">
        <div className="flex flex-col gap-8 h-full p-8">
          <div className="text-5xl font-extrabold py-4 text-blue-950">Home</div>
          <div className="flex gap-8 h-full">
            <div className="flex flex-col h-full gap-8 basis-[65%]">
              <div className="flex gap-8">
                <StatCard
                  card={{
                    cardName: "Patients",
                    value: 145,
                  }}
                  style={{
                    textColor: "text-blue-950",
                    cardColor: "bg-indigo-300",
                    circleColor: "bg-blue-50",
                  }}
                  icon={{
                    src: "src/assets/stat_cards/1.svg",
                    alt: "bandage",
                  }}
                />
                <StatCard
                  card={{
                    cardName: "Appointments",
                    value: 514,
                  }}
                  style={{
                    textColor: "text-blue-50",
                    cardColor: "bg-blue-950",
                    circleColor: "bg-blue-50",
                  }}
                  icon={{
                    src: "src/assets/stat_cards/2.svg",
                    alt: "diagnosis",
                  }}
                />
                <StatCard
                  card={{
                    cardName: "Model Reports",
                    value: 64,
                  }}
                  style={{
                    textColor: "bg-blue-50",
                    cardColor: "text-indigo-950",
                    circleColor: "bg-indigo-200",
                  }}
                  icon={{
                    src: "src/assets/stat_cards/3.svg",
                    alt: "robot",
                  }}
                />
              </div>
              <div className="flex flex-col gap-8 basis-1/2 bg-blue-50 rounded-xl p-8">
                <p className="font-extrabold text-2xl text-blue-950">
                  Patient Visits
                </p>
                <BarChart />
              </div>
              <div className="flex flex-col gap-8 basis-1/2 bg-blue-50 rounded-xl p-8">
                <p className="font-extrabold text-2xl text-blue-950">
                  Patient List
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 basis-[35%] h-max">
              <div className="bg-blue-50 rounded-xl p-8">
                <p className="font-extrabold text-2xl text-blue-950">
                  To be determined
                </p>
              </div>
              <ScheduleCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
