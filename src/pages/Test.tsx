import React, { useEffect } from "react";
import { useGetPatientsQuery } from "@/features/crud/patient/patientApiSlice";
import { useDispatch } from "react-redux";
import { setPatients } from "@/features/crud/patient/patientSlice";

const Test = () => {
  const dispatch = useDispatch();

  // Fetch patients using the useGetPatientsQuery hook
  const {
    data: patients,
    error,
    isLoading,
  } = useGetPatientsQuery({ page: 0, size: 10 }); // Adjust page and size as needed

  useEffect(() => {
    // When the data is fetched successfully, update the state in patientSlice
    if (patients) {
      dispatch(setPatients(patients)); // Dispatching setPatients action with fetched patients data
    }
  }, [dispatch, patients]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: Unknown error</div>;
  }

  return (
    <div>
      <h2>Patients List</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.firstname} {patient.lastname} - {patient.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
