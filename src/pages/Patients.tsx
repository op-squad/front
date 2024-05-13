import Sidebar from "@/components/app/Sidebar";
import { GoPlus } from "react-icons/go";
import { FaFilter } from "react-icons/fa";
import Patient from "@/components/app/patient_list/PatientCard";
import patientList from "@/assets/patients/patients";

const myPatientList = patientList.map((item, index) => {
  if (index == 0) {
    return (
      <Patient
        key={index}
        id={index}
        selected={false}
        props={item}
      />
    );
  } else {
    return (
      <>
        <hr />
        <Patient
          key={index}
          id={index}
          selected={false}
          props={item}
        />
      </>
    );
  }
});

const handleFilter = () => {
  console.log("handle filter");
};

const handleSearch = () => {
  console.log("handle search");
};

const handleAddPatient = () => {
  console.log("handle add patient");
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
              <button
                onClick={handleSearch}
                className="h-8 bg-indigo-600 rounded-md px-6 text-blue-50 font-semibold text-sm"
              >
                Search
              </button>
              <button onClick={handleFilter}>
                <FaFilter
                  size={20}
                  color="#4f46e5"
                />
              </button>
            </div>
            <button
              onClick={handleAddPatient}
              className="flex gap-2 items-center h-8 bg-indigo-600 rounded-md px-6 text-blue-50 font-semibold text-sm"
            >
              <GoPlus size={18} />
              Add Patient
            </button>
          </div>
          <div className="flex items-center justify-between text-blue-950 px-8 w-full bg-white h-10 rounded-xl mb-[-16px] text-sm font-semibold">
            <div className="flex items-center">
              <div>
                <input type="checkbox" />
              </div>
              <div className="ml-28 w-64">NAME</div>
            </div>
            <div className="w-24">LAST VISIT</div>
            <div className="w-48">DIAGNOSIS</div>
            <div className="w-28">STATUS</div>
            <div>ACTION</div>
          </div>
          <div className="flex flex-col">{myPatientList}</div>
        </div>
      </div>
    </div>
  );
}
