// import { selectPatients } from "@/features/crud/patient/patientSlice";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import { useGetPatientsByPageQuery } from "@/features/crud/patient/patientApiSlice";

// Function to convert a string to title case
const toTitleCase = (str: string) => {
  return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
};

const Patient = ({ id, imgSrc, name, lastVisit, diagnosis }) => {
  // Convert the name to title case
  const titleCaseName = toTitleCase(name);

  return (
    <div className="grid grid-cols-3 gap-4 items-center">
      {/* Column 1: Image and Name */}
      <div className="flex items-center gap-4">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src={imgSrc}
          alt=""
        />
        <div className="text-xs">
          <Link to={`/patients/${id}`}>
            Full Name: <br />
            <span className="text-lg font-semibold cursor-pointer hover:underline">
              {titleCaseName}
            </span>
          </Link>
        </div>
      </div>

      {/* Column 2: Last Visit */}
      <div className="text-xs">
        Last Visit: <br />
        <span className="text-lg">{lastVisit}</span>
      </div>

      {/* Column 3: Diagnosis */}
      <div className="text-xs">
        Diagnosis: <br />
        <span className="text-lg">{diagnosis}</span>
      </div>
    </div>
  );
};

export default function PatientListCard() {
  // // Fetch patient data using Redux Toolkit Query
  const {
    data: patients,
    error,
    isLoading,
  } = useGetPatientsByPageQuery({
    page: 0,
    size: 3,
  });

  // const storedPatients = useSelector(selectPatients);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: Unknown error</div>;

  return (
    <div className="flex flex-col gap-8 bg-blue-50 rounded-xl p-8">
      <div className="flex justify-between items-center w-full text-blue-950">
        <div className="font-extrabold text-xl 2xl:text-2xl cursor-pointer hover:underline">
          <Link to="/patients">Patient List</Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 text-blue-950 px-2 2xl:px-4">
        {patients.map((patient) => (
          <React.Fragment key={patient.id}>
            <Patient
              id={patient.id}
              imgSrc="src/assets/profile/doctor.jpg" // Assuming each patient object has an imgSrc property
              name={patient.firstname + " " + patient.lastname}
              lastVisit="2 days ago"
              diagnosis="Hypertension"
            />
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
