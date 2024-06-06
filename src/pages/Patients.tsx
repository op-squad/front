/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import Fuse from "fuse.js";
import Sidebar from "@/components/app/Sidebar";
import { GoPlus } from "react-icons/go";
import Patient from "@/components/app/patient_list/PatientCard";
import { useGetPatientsQuery } from "@/features/crud/patient/patientApiSlice";
import Input from "@/components/ui/Input";
import { useAddPatientMutation } from "@/features/crud/doctor/doctorApiSlice";

export default function Patients() {
  const patientListRequest = useGetPatientsQuery();
  const { data, error, isLoading } = patientListRequest;
  const patientList = data || [];

  const fuseOptions = {
    keys: ["firstname", "lastname", "nextAppointment"],
    threshold: 0.3, // Adjust the threshold for more or less fuzzy matching
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPatients, setFilteredPatients] = useState(patientList);

  useEffect(() => {
    const fuse = new Fuse(patientList, fuseOptions);
    if (searchQuery.trim() === "") {
      setFilteredPatients(patientList);
    } else {
      const results = fuse.search(searchQuery);
      setFilteredPatients(results.map((result) => result.item));
    }
  }, [searchQuery, patientList]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
    }
  };

  const [patientUsername, setPatientUsername] = useState("");
  const [addPatient] = useAddPatientMutation();

  const handleAddPatient = async (e) => {
    e.preventDefault();
    try {
      const response = await addPatient(patientUsername);
      console.log(response);
      setInterfaceOpen(false);
      setPatientUsername("");
    } catch (err) {
      console.log(err);
    }
  };

  const myPatientList = filteredPatients.map((item, index) => (
    <React.Fragment key={item.id}>
      {index !== 0 && <hr />}
      <Patient
        key={item.id}
        id={item.id}
        props={item}
      />
    </React.Fragment>
  ));

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

  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        {error.status}
      </div>
    );

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
                className="rounded-xl h-8 w-96 px-2 py-6 bg-gray-300"
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress}
              />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setInterfaceOpen(true);
              }}
              className="flex gap-2 items-center h-8 bg-indigo-600 rounded-xl px-8 py-6 text-blue-50 font-semibold text-sm"
            >
              <GoPlus size={18} />
              Add Patient
            </button>
          </div>
          <div className="grid grid-cols-[repeat(4,_1fr)_auto] text-blue-950 px-8 pl-28 w-full bg-blue-50 h-10 rounded-xl mb-[-16px] text-sm font-semibold">
            <div className="flex items-center">NAME</div>
            <div className="flex items-center">LAST VISIT</div>
            <div className="flex items-center">DIAGNOSIS</div>
            <div className="flex items-center ml-2">STATUS</div>
            <div className="flex items-center">ACTION</div>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center mt-16 text-blue-950 text-lg">
              Loading...
            </div>
          ) : (
            <div className="flex flex-col">{myPatientList}</div>
          )}
        </div>
      </div>
      {interfaceOpen && (
        <div className="absolute h-screen w-screen flex flex-col justify-center items-center">
          <div className="bg-gray-600 h-screen w-screen opacity-20"></div>
          <div
            ref={floatingWindowRef}
            className="flex flex-col bg-blue-50 rounded-xl p-8 gap-8 shadow-xl absolute"
          >
            <div className="font-bold text-xl text-blue-950">Add Patient</div>
            <form
              onSubmit={handleAddPatient}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="family-name"
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
