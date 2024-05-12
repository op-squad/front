import Sidebar from "@/components/app/Sidebar";
import StatCard from "@/components/app/dashboard/StatCard";
import ScheduleCard from "@/components/app/dashboard/ScheduleCard/ScheduleCard";
import Visits from "@/components/app/dashboard/Visits/Visits";
import PatientListCard from "@/components/app/dashboard/PatientList/PatientListCard";
import {
  useGetStatCountAppointmentQuery,
  useGetStatTotalPatientCountQuery,
  // useGetStatVisitsByDateQuery,
} from "@/features/stat/statApiSlice";
import ClockLoader from "react-spinners/ClockLoader";

export default function Dashboard() {
  const { data: patientCount, isLoading: totalPatientLoading } =
    useGetStatTotalPatientCountQuery({});
  const { data: appointmentCount, isLoading: appointmentCountLoading } =
    useGetStatCountAppointmentQuery({});
  // const { data: visitsByDate } = useGetStatVisitsByDateQuery({});

  return totalPatientLoading && appointmentCountLoading ? (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <ClockLoader
        color="#393DD8"
        size={70}
      />
    </div>
  ) : (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col gap-8 w-full h-full p-8 overflow-y-auto bg-blue-100">
        <h1 className="text-4xl 2xl:text-5xl font-extrabold py-4 text-blue-950">
          Dashboard
        </h1>
        <div className="flex gap-8 h-fit">
          <div className="flex flex-col h-full gap-8 basis-[65%]">
            <div className="flex gap-4">
              <StatCard
                key={1}
                card={{
                  cardName: "Patients",
                  value: patientCount,
                }}
                style={{
                  textColor: "text-blue-950",
                  cardColor: "bg-indigo-300",
                  circleColor: "bg-blue-50",
                }}
                icon={{
                  src: "src/assets/stat-cards/1.svg",
                  alt: "bandage",
                }}
              />
              <StatCard
                key={2}
                card={{
                  cardName: "Appointments",
                  value: appointmentCount,
                }}
                style={{
                  textColor: "text-blue-50",
                  cardColor: "bg-blue-950",
                  circleColor: "bg-blue-50",
                }}
                icon={{
                  src: "src/assets/stat-cards/2.svg",
                  alt: "diagnosis",
                }}
              />
              <StatCard
                key={3}
                card={{
                  cardName: "Model Reports",
                  value: 27,
                }}
                style={{
                  textColor: "bg-blue-50",
                  cardColor: "text-indigo-950",
                  circleColor: "bg-indigo-200",
                }}
                icon={{
                  src: "src/assets/stat-cards/3.svg",
                  alt: "robot",
                }}
              />
            </div>
            <Visits />
            <PatientListCard />
          </div>
          <div className="flex flex-col gap-8 h-max basis-[35%]">
            <div className="bg-blue-50 rounded-xl p-8">
              <p className="font-extrabold text-xl 2xl:text-2xl text-blue-950">
                To be determined
              </p>
            </div>
            <ScheduleCard />
          </div>
        </div>
      </div>
    </div>
  );
}
