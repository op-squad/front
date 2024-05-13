import Sidebar from "@/components/app/Sidebar";
import { useNavigate } from "react-router-dom";
import { IoIosMore } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";
// const list = [{}];

const Patient = () => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  function handleCheckbox() {
    setChecked(!checked);
  }
  return (
    <button
      onClick={() => navigate("/settings")}
      className="flex p-6 pr-12 pl-8 bg-white hover:bg-gray-100 cursor-pointer first:rounded-t-xl last:rounded-b-xl justify-between items-center text-blue-950"
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
          src="src/assets/profile/doctor.jpg"
          alt=""
        />
        <div className="flex flex-col items-start">
          <div className="font-bold">Lekhder Belloumi</div>
          <div className="font-Lato font-medium text-gray-500">
            Next Appointment: 16 Jun - 1:00PM
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <div>2024/05/01</div>
        <div className="text-sm font-semibold text-blue-600">Notes</div>
      </div>
      <div>Ear Infection</div>
      <div className="before:inline-block before:bg-green-600 before:w-2.5 before:aspect-square before:rounded-full before:mx-1">
        Active
      </div>
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
};

export default function Patients() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col gap-8 w-full h-full p-8 overflow-y-auto bg-blue-100">
        <h1 className="text-4xl 2xl:text-5xl font-extrabold py-4 text-blue-950">
          Patients List
        </h1>
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            <div className="flex items-center gap-8">
              <input
                className="rounded-md h-8 w-96 px-2 bg-gray-300"
                type="text"
              />
              <button className="h-8 bg-indigo-600 rounded-md px-6 text-blue-50 font-semibold text-sm">
                Search
              </button>
              <FaFilter
                size={20}
                color="#2563eb"
              />
            </div>
            <button className="flex gap-2 items-center h-8 bg-indigo-600 rounded-md px-6 text-blue-50 font-semibold text-sm">
              <GoPlus size={18} />
              Add Patient
            </button>
          </div>
          <div className="flex flex-col">
            <Patient />
            <hr />
            <Patient />
            <hr />
            <Patient />
            <hr />
            <Patient />
            <hr />
            <Patient />
            <hr />
            <Patient />
            <hr />
            <Patient />
            <hr />
            <Patient />
            <hr />
            <Patient />
            <hr />
            <Patient />
            <hr />
            <Patient />
            <hr />
            <Patient />
            <hr />
            <Patient />
          </div>
        </div>
      </div>
    </div>
  );
}
