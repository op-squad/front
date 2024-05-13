import { useState } from "react";
import { IoIosMore } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Patient({ selected, props }) {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(selected);
  function handleCheckbox() {
    setChecked(!checked);
  }

  function renderStatus() {
    switch (props.status) {
      case "active":
        return (
          <div className="w-32 flex items-center before:inline before:bg-green-600 before:w-3 before:aspect-square before:rounded before:mr-3">
            Active
          </div>
        );
      case "non-active":
        return (
          <div className="w-32 flex items-center before:inline before:bg-red-600 before:w-3 before:aspect-square before:rounded before:mr-3">
            Non-Active
          </div>
        );
      case "new":
        return (
          <div className="w-32 flex items-center before:inline before:bg-gray-400 before:w-3 before:aspect-square before:rounded before:mr-3">
            New Patient
          </div>
        );
      default:
        <div>unknown</div>;
    }
  }

  return (
    <button
      onClick={() => navigate("/settings")}
      className="flex w-full p-6 pr-12 pl-8 bg-white hover:bg-gray-100 cursor-pointer first:rounded-t-xl last:rounded-b-xl justify-between items-center text-blue-950"
    >
      <div className="flex items-center gap-8">
        <input
          type="checkbox"
          checked={checked}
          onClick={(e) => {
            handleCheckbox();
            e.stopPropagation();
          }}
        />
        <img
          className="w-12 rounded-full aspect-square object-cover"
          src={props.profilePicture}
          alt=""
        />
        <div className="flex flex-col items-start w-64">
          <div className="font-bold">
            {props.firstName + " " + props.familyName}
          </div>
          {!!props.nextAppointment && (
            <div className="font-Lato font-medium text-sm text-gray-500">
              Next Appointment: {props.nextAppointment}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start w-24">
        <div className="font-Lato">{props.lastVisit}</div>
        <button
          onClick={(e) => {
            navigate("/dashboard");
            e.stopPropagation;
          }}
          className="text-sm font-semibold text-blue-600 hover:underline"
        >
          Notes
        </button>
      </div>
      <div className="w-48 flex justify-start">{props.diagnosis}</div>
      {renderStatus()}
      <button
        onClick={(e) => {
          console.log("jaja");
          e.stopPropagation();
        }}
        className="hover:bg-gray-300 rounded-full p-1.5"
      >
        <IoIosMore />
      </button>
    </button>
  );
}
