import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StatState {
  visitsByMonth: number[]; // Array to hold the number of visits for each month
  totalPatientCount: number;
  appointmentCount: number;
}

const initialState: StatState = {
  visitsByMonth: [], // Initialize visitsByMonth as an empty array
  totalPatientCount: 0,
  appointmentCount: 0,
};

const statSlice = createSlice({
  name: "stat",
  initialState,
  reducers: {
    setStats: (state, action: PayloadAction<StatState>) => {
      const { visitsByMonth, totalPatientCount, appointmentCount } =
        action.payload;
      state.visitsByMonth = visitsByMonth;
      state.totalPatientCount = totalPatientCount;
      state.appointmentCount = appointmentCount;
    },

    setVisitsByMonth: (state, action: PayloadAction<number[]>) => {
      state.visitsByMonth = action.payload;
    },
  },
});

export const { setStats, setVisitsByMonth } = statSlice.actions;

export default statSlice.reducer;
