import authReducer from "@/features/auth/authSlice";
import assistantReducer from "@/features/crud/assistant/assistantSlice";
import doctorReducer from "@/features/crud/doctor/doctorSlice";
import patientReducer from "@/features/crud/patient/patientSlice";
import visitReducer from "@/features/visit/visitSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./api/apiSlice";

// Combine reducers
const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  assistant: assistantReducer,
  doctor: doctorReducer,
  patient: patientReducer,
  auth: authReducer,
  visit: visitReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// A utility used to enable refetchOnFocus and refetchOnReconnect behaviors.
setupListeners(store.dispatch);
