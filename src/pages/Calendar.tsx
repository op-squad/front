import Sidebar from "@/components/app/Sidebar";
import { Dropdown } from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import {
  useCreateVisitMutation,
  useGetVisitsQuery,
} from "@/features/visit/visitApiSlice";
import moment from "moment";
import React from "react";
import { useEffect, useRef, useState } from "react";

export default function Calendar() {
  const visits = useGetVisitsQuery();
  const { data, isLoading, error } = visits;
  const myData = data || [];

  const [patientUsername, setPatientUsername] = useState("");
  const [date, setDate] = useState("");

  const [newVisit] = useCreateVisitMutation();
  const handleNewAppointment = async (e) => {
    const data = {
      patientUsername: patientUsername,
      doctorName: "asdf",
      diagnosis: "asdf",
      visitDate: date,
    };
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/visit/doctor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiRE9DVE9SIiwic3ViIjoiYW1pcmRvY3RvciIsImlhdCI6MTcxNzYzNzk2OCwiZXhwIjoxNzE3NjczOTY4fQ.5QbzDBAfJylKKXfqpdYdsbg_8aDkYHMjJcDlqgftYAo",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      setInterfaceOpen(false);
      setPatientUsername("");
    } catch (err) {
      console.log(err);
    }
  };

  const [interfaceOpen, setInterfaceOpen] = useState(false);
  const floatingWindowRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        floatingWindowRef.current &&
        !floatingWindowRef.current.contains(e.target)
      ) {
        setInterfaceOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col gap-8 w-full h-full p-8 overflow-y-auto bg-blue-100 text-blue-950">
        <h1 className="text-4xl 2xl:text-5xl font-extrabold py-4 text-blue-950">
          Calendar
        </h1>
        <div className="flex flex-col gap-8 h-fit w-full">
          <div className="self-end">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setInterfaceOpen(true);
              }}
              className="bg-indigo-600 px-8 py-4 rounded-xl text-blue-50 font-semibold text-sm"
            >
              New Appointment
            </button>
          </div>
          <div className="grid grid-cols-[auto_repeat(4,_1fr)_auto] gap-x-8 w-full p-8 gap-y-8 bg-blue-50 rounded-xl">
            <div className="text-gray-600 font-semibold">#</div>
            <div className="text-gray-600 font-semibold">Scheduled</div>
            <div className="text-gray-600 font-semibold">Patient</div>
            <div className="text-gray-600 font-semibold">Type</div>
            <div className="text-gray-600 font-semibold">Status</div>
            <div className="text-gray-600 font-semibold">Action</div>

            {myData.map((item, index) => (
              <React.Fragment key={item.id}>
                <div className="font-medium">{index + 1}</div>
                <div className="font-medium font-Lato">
                  {moment(item.visitDate).format("YYYY/MM/DD")}
                </div>
                <div className="font-medium">{item.patientName}</div>
                <div className="font-medium">{item.diagnosis || "-"}</div>
                <div className="font-medium">
                  {item.isVisited ? "Done" : "Pending"}
                </div>
                <div className="font-medium">
                  <Dropdown />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      {interfaceOpen && (
        <div className="absolute h-screen w-screen flex flex-col justify-center items-center">
          <div className="bg-gray-600 h-screen w-screen opacity-20"></div>
          <div
            ref={floatingWindowRef}
            className="flex flex-col bg-blue-50 rounded-xl p-8 gap-8 shadow-xl absolute"
          >
            <div className="font-bold text-xl text-blue-950">
              New Appointment
            </div>
            <form
              onSubmit={handleNewAppointment}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="patient-username"
                    className="flex justify-between text-lg font-light"
                  >
                    Patient Username
                  </label>
                  <Input
                    className="rounded-lg h-10 border-solid border-2 px-4 w-max"
                    type="text"
                    id="patient-username"
                    value={patientUsername}
                    onChange={(e) => {
                      setPatientUsername(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="date"
                    className="flex justify-between text-lg font-light"
                  >
                    Date
                  </label>
                  <Input
                    className="rounded-lg h-10 border-solid border-2 px-4 w-max"
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="p-4 py-2 bg-indigo-600 rounded-xl text-blue-50 self-end"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
