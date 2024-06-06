import Layout from "@/components/Layout";
import ContactSettings from "@/components/app/settings/ContactSettings";
import PasswordSettings from "@/components/app/settings/PasswordSettings";
import ProfileSettings from "@/components/app/settings/ProfileSettings";
import Dashboard from "@/pages/Dashboard";
import EmailVerification from "@/pages/EmailVerification";
import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import PasswordReset from "@/pages/PasswordReset";
import RegisterDetails from "@/pages/RegisterDetails";
import Register from "@/pages/Registration";
import Settings from "@/pages/Settings";
import { useEffect, useReducer } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import RequireUnAuth from "./components/RequireUnauth";
import Test from "./pages/Test";
import PatientProfile from "./components/app/patient_list/PatientProfile";
import Patients from "@/pages/Patients";
import ChatRoom from "@/pages/ChatRoom";
import Calendar from "./pages/Calendar";
import {
  useGetDoctorProfileQuery,
  useGetProfilePictureQuery,
} from "./features/crud/doctor/doctorApiSlice";
// import doctorProfile from "./assets/profile/doctorProfile";

const actionTypes = {
  ENTER_EDIT_MODE: "ENTER_EDIT_MODE",
  DISCARD_CHANGES: "DISCARD_SETTINGS",
  SAVE_SETTINGS: "SAVE_SETTINGS",
  UPDATE_SETTING: "UPDATE_SETTING",
  SET_PROFILE: "SET_PROFILE",
  SET_PROFILE_PICTURE: "SET_PROFILE_PICTURE",
};

const initialState = {
  profileSettings: {},
  editMode: false,
  unsavedChanges: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PROFILE:
      return {
        ...state,
        profileSettings: action.payload,
      };
    case actionTypes.SET_PROFILE_PICTURE:
      return {
        ...state,
        profileSettings: {
          ...state.profileSettings,
          profilePicture: action.payload, // Assuming profilePicture is part of profileSettings
        },
      };
    case actionTypes.DISCARD_CHANGES:
      return {
        ...state,
        editMode: false,
        unsavedChanges: {},
      };
    case actionTypes.SAVE_SETTINGS:
      console.log("Saving changes");
      console.log(state.unsavedChanges);

      return {
        ...state,
        editMode: false,
        profileSettings: { ...state.profileSettings, ...state.unsavedChanges },
        unsavedChanges: {},
      };
    case actionTypes.UPDATE_SETTING:
      return {
        ...state,
        editMode: true,
        unsavedChanges: {
          ...state.unsavedChanges,
          [action.payload.key]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default function App() {
  const requestProfile = useGetDoctorProfileQuery();
  const { data, isLoading, error } = requestProfile;
  const requestProfilePicture = useGetProfilePictureQuery();

  const [state, dispatch] = useReducer(reducer, initialState);
  const context = { state, dispatch };

  useEffect(() => {
    if (data) {
      dispatch({ type: "SET_PROFILE", payload: data });
    }
  }, [data]);

  useEffect(() => {
    if (requestProfilePicture.data) {
      const profilePictureUrl = requestProfilePicture.data;
      dispatch({
        type: actionTypes.SET_PROFILE_PICTURE,
        payload: profilePictureUrl,
      });
    }
  }, [requestProfilePicture.data]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        {/* Public routes  */}
        <Route element={<RequireUnAuth />}>
          <Route
            path="/"
            element={<Landing />}
          ></Route>
          <Route
            path="login"
            element={<Login />}
          ></Route>
          <Route
            path="register"
            element={<Register />}
          ></Route>
          <Route
            path="password-reset"
            element={<PasswordReset />}
          ></Route>
          <Route
            path="email-verification"
            element={<EmailVerification />}
          ></Route>
        </Route>

        {/* We want to protect these routes */}
        <Route element={<RequireAuth />}>
          <Route
            path="dashboard"
            element={<Dashboard />}
          ></Route>
          <Route
            path="profile-details"
            element={<RegisterDetails />}
          ></Route>
          <Route
            path="patients"
            element={<Patients />}
          ></Route>
          <Route
            path="patients/:patientId"
            element={<PatientProfile />}
          ></Route>
          <Route
            path="calendar"
            element={<Calendar />}
          ></Route>
          <Route
            path="settings"
            element={
              <Settings
                context={context}
                actions={actionTypes}
              />
            }
          >
            <Route
              index
              element={
                <Navigate
                  to="profile"
                  replace
                />
              }
            ></Route>
            <Route
              path="profile"
              element={
                <ProfileSettings
                  context={context}
                  actions={actionTypes}
                />
              }
            ></Route>
            <Route
              path="contact"
              element={
                <ContactSettings
                  context={context}
                  actions={actionTypes}
                />
              }
            ></Route>
            <Route
              path="password"
              element={
                <PasswordSettings
                  context={context}
                  actions={actionTypes}
                />
              }
            ></Route>
          </Route>

          <Route
            path="profile-details"
            element={<RegisterDetails />}
          ></Route>
        </Route>

        {/* Testing route */}
        <Route
          path="/test"
          element={<Test />}
        ></Route>
        <Route
          path="/chat"
          element={<ChatRoom />}
        ></Route>

        {/* catch all */}
        <Route
          path="*"
          element={<NotFound />}
        ></Route>
      </Route>
    </Routes>
  );
}
