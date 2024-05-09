import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AssistantState {
  firstname: string;
  lastname: string;
  gender: "MALE" | "FEMALE"; // Assuming gender can be one of these options
  address: string;
  phoneNumber: string;
  birthDate: string;
}

const initialState: AssistantState = {
  firstname: "string",
  lastname: "string",
  gender: "MALE",
  address: "string",
  phoneNumber: "string",
  birthDate: "string",
};

const assistantSlice = createSlice({
  name: "assistant",
  initialState,
  reducers: {
    clearProfile: (state) => {
      state.address = "string";
      state.birthDate = "string";
      state.firstname = "string";
      state.lastname = "string";
      state.phoneNumber = "string";
      state.gender = "MALE";
    },
    setAssistantProfile: (
      state,
      action: PayloadAction<{ profile: AssistantState }>,
    ) => {
      const { profile } = action.payload;

      state.address = profile.address;
      state.birthDate = profile.birthDate;
      state.firstname = profile.firstname;
      state.lastname = profile.lastname;
      state.phoneNumber = profile.phoneNumber;
      state.gender = profile.gender;
    },
  },
});

export default assistantSlice.reducer;
