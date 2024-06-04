import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface doctorState {
  firstname: string;
  lastname: string;
  gender: "MALE" | "FEMALE"; // Assuming gender can be one of these options
  address: string;
  phoneNumber: string;
  birthDate: string;
  speciality: string;
}

const initialState: doctorState = {
  firstname: "string",
  lastname: "string",
  gender: "MALE",
  address: "string",
  phoneNumber: "string",
  birthDate: "string",
  speciality: "string",
};

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    clearProfile: (state) => {
      state.address = "string";
      state.birthDate = "string";
      state.firstname = "string";
      state.lastname = "string";
      state.phoneNumber = "string";
      state.gender = "MALE";
      state.speciality = "string";
    },
    setDoctorProfile: (
      state,
      action: PayloadAction<{ profile: doctorState }>,
    ) => {
      const { profile } = action.payload;

      state.address = profile.address;
      state.birthDate = profile.birthDate;
      state.firstname = profile.firstname;
      state.lastname = profile.lastname;
      state.phoneNumber = profile.phoneNumber;
      state.gender = profile.gender;
      state.speciality = profile.speciality;
    },
  },
});

export default doctorSlice.reducer;
