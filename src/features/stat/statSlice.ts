import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Visit {
  id: number;
  assistantName: string;
  doctorName: string;
  isStated: boolean;
  diagnosis: string;
  visitDate: string;
}

interface StatState {
  visits: Visit[];
  totalPatientCount: number;
  appointmentCount: number;
}

const initialState: StatState = {
  visits: [],
  totalPatientCount: 0,
  appointmentCount: 0,
};

const statSlice = createSlice({
  name: "stat",
  initialState,
  reducers: {
    addStat: (state, action: PayloadAction<Visit>) => {
      state.visits.push(action.payload);
    },

    removeStat: (state, action: PayloadAction<number>) => {
      state.visits = state.visits.filter(
        (visit) => visit.id !== action.payload,
      );
    },

    updateStat: (state, action: PayloadAction<StatState>) => {
      const { visits, totalPatientCount, appointmentCount } = action.payload;
      state.visits = visits;
      state.totalPatientCount = totalPatientCount;
      state.appointmentCount = appointmentCount;
    },

    setStats: (state, action: PayloadAction<Visit[]>) => {
      state.visits = action.payload;
    },
  },
});

export default statSlice.reducer;
