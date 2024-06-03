import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Visit {
  id: number;
  assistantName: string;
  doctorName: string;
  isVisited: boolean;
  diagnosis: string;
  visitDate: string;
}

interface StatState {
  visits: Visit[];
  visitsByMonth: number[]; // Array to hold the number of visits for each month
  totalPatientCount: number;
  appointmentCount: number;
}

const initialState: StatState = {
  visits: [],
  visitsByMonth: [],
  totalPatientCount: 0,
  appointmentCount: 0,
};

const statSlice = createSlice({
  name: "stat",
  initialState,
  reducers: {
    addVisit: (state, action: PayloadAction<Visit>) => {
      state.visits.push(action.payload);
    },

    removeVisit: (state, action: PayloadAction<number>) => {
      state.visits = state.visits.filter(
        (visit) => visit.id !== action.payload,
      );
    },

    updateVisit: (state, action: PayloadAction<Visit>) => {
      const { id, assistantName, doctorName, isVisited, diagnosis, visitDate } =
        action.payload;
      const existingVisit = state.visits.find((visit) => visit.id === id);
      if (existingVisit) {
        existingVisit.assistantName = assistantName;
        existingVisit.doctorName = doctorName;
        existingVisit.isVisited = isVisited;
        existingVisit.diagnosis = diagnosis;
        existingVisit.visitDate = visitDate;
      }
    },

    setStats: (
      state,
      action: PayloadAction<{
        totalPatientCount: number;
        appointmentCount: number;
      }>,
    ) => {
      state.totalPatientCount = action.payload.totalPatientCount;
      state.appointmentCount = action.payload.appointmentCount;
    },

    setVisitsByMonth: (state, action: PayloadAction<number[]>) => {
      state.visitsByMonth = action.payload;
    },
  },
});

export const {
  addVisit,
  removeVisit,
  updateVisit,
  setStats,
  setVisitsByMonth,
} = statSlice.actions;

export default statSlice.reducer;
