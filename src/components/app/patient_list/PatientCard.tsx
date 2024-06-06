import { Dropdown } from "@/components/ui/Dropdown";
import { useGetVisitClosestQuery } from "@/features/visit/visitApiSlice";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import defaultImg from "../../../assets/default_profile_picture/default_profile_picture.jpeg";

export default function Patient({ id, props }) {
  const navigate = useNavigate();
  // const [checked, setChecked] = useState(selected);'http://localhost:8080/visit/doctor' 
  const visit = useGetVisitClosestQuery(id);
  // console.log(visit);
  const lastVisit = "-" || "";
  const profilePicture = defaultImg || "";

  function renderStatus() {
    function getDurationInDays(date1: Date, date2: Date): number {
      const millisecondsInDay = 1000 * 60 * 60 * 24;

      // Get the difference in milliseconds
      const differenceInMilliseconds = Math.abs(
        date2.getTime() - date1.getTime(),
      );

      // Convert milliseconds to days
      const differenceInDays = differenceInMilliseconds / millisecondsInDay;

      return differenceInDays;
    }
    if (
      lastVisit == "-" &&
      getDurationInDays(new Date(props.createdAt), new Date())
    ) {
      return (
        <div className="w-32 flex items-center before:inline before:bg-gray-400 before:w-3 before:aspect-square before:rounded before:mr-3">
          New Patient
        </div>
      );
    }
    if (getDurationInDays(new Date(lastVisit), new Date()) < 14) {
      return (
        <div className="w-32 flex items-center before:inline before:bg-green-600 before:w-3 before:aspect-square before:rounded before:mr-3">
          Active
        </div>
      );
    }
    return (
      <div className="w-32 flex items-center before:inline before:bg-red-600 before:w-3 before:aspect-square before:rounded before:mr-3">
        Non-Active
      </div>
    );
  }

  return (
    <button
      onClick={() => navigate(`/patients/${id}`)}
      className="flex w-full items-center gap-8 p-6 pr-12 pl-8 bg-blue-50 hover:bg-gray-100 cursor-pointer first:rounded-t-xl last:rounded-b-xl text-blue-950"
    >
      <img
        className="w-12 rounded-full aspect-square object-cover border"
        src={profilePicture}
        alt=""
      />
      <div className="grid grid-cols-[repeat(4,_1fr)_auto] w-full">
        <div className="flex flex-col justify-center items-start w-64">
          <div className="font-bold">
            {`${props.firstname.charAt(0).toUpperCase() + props.firstname.slice(1)} ${props.lastname.charAt(0).toUpperCase() + props.lastname.slice(1)}`}
          </div>
          {/* <div>asdf</div> */}
          {/* {!!props.nextAppointment && (
            <div className="font-Lato font-medium text-sm text-gray-500">
              Next Appointment: {props.nextAppointment}
            </div>
          )} */}
        </div>
        <div className="flex flex-col justify-center items-start w-24">
          <div className="font-Lato">{lastVisit}</div>
          {lastVisit != "-" && (
            <button
              onClick={(e) => {
                navigate("/dashboard");
                e.stopPropagation();
              }}
              className="text-sm font-semibold text-blue-600 hover:underline"
            >
              Notes
            </button>
          )}
        </div>
        <div className="w-48 flex justify-start items-center">
          {"Ear Infection"}
        </div>
        {renderStatus()}
        <div className="flex items-center justify-end">
          <Dropdown />
        </div>
      </div>
    </button>
  );
}
