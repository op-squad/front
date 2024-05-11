import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Visit {
  id: number;
  assistantName: string;
  doctorName: string;
  isVisited: boolean;
  diagnosis: string;
  visitDate: string;
}

interface VisitState {
  visits: Visit[];
}

const initialState: VisitState = {
  visits: [],
};

const visitSlice = createSlice({
  name: "visit",
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

    // Update the visit with the given ID (yet to be implemented in the backend)
    updateVisit: (state, action: PayloadAction<Visit>) => {
      const { id, assistantName, doctorName, isVisited } = action.payload;
      const existingvisit = state.visits.find((visit) => visit.id === id);
      if (existingvisit) {
        existingvisit.assistantName = assistantName;
        existingvisit.doctorName = doctorName;
        existingvisit.isVisited = isVisited;
        existingvisit.diagnosis = action.payload.diagnosis;
        existingvisit.visitDate = action.payload.visitDate;
      }
    },

    setVisits: (state, action: PayloadAction<Visit[]>) => {
      state.visits = action.payload;
    },
  },
});

export default visitSlice.reducer;
