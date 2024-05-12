import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Patient {
  id: number;
  firstname: string;
  lastname: string;
  phoneNumber: string;
}

interface PatientState {
  patients: Patient[];
}

const initialState: PatientState = {
  patients: [],
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    addPatient: (state, action: PayloadAction<Patient>) => {
      state.patients.push(action.payload);
    },

    removePatient: (state, action: PayloadAction<number>) => {
      state.patients = state.patients.filter(
        (patient) => patient.id !== action.payload,
      );
    },

    // Update the patient with the given ID (yet to be implemented in the backend)
    updatePatient: (state, action: PayloadAction<Patient>) => {
      const { id, firstname, lastname, phoneNumber } = action.payload;
      const existingPatient = state.patients.find(
        (patient) => patient.id === id,
      );
      if (existingPatient) {
        existingPatient.firstname = firstname;
        existingPatient.lastname = lastname;
        existingPatient.phoneNumber = phoneNumber;
      }
    },

    setPatients: (state, action: PayloadAction<Patient[]>) => {
      state.patients = action.payload;
    },
  },
});

export default patientSlice.reducer;

// Grabbing a slice of the state and getting the patients list
export const selectPatients = (state: { patient: PatientState }) =>
  state.patient.patients;
