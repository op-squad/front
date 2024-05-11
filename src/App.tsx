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
import { useReducer } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import RequireUnAuth from "./components/RequireUnauth";
// import Test from "@/pages/Test";
import doctorProfile from "./assets/profile/doctorProfile";

const actionTypes = {
  ENTER_EDIT_MODE: "ENTER_EDIT_MODE",
  DISCARD_CHANGES: "DISCARD_SETTINGS",
  SAVE_SETTINGS: "SAVE_SETTINGS",
  UPDATE_SETTING: "UPDATE_SETTING",
};

const initialState = {
  profileSettings: { ...doctorProfile },
  editMode: false,
  unsavedChanges: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.DISCARD_CHANGES:
      return {
        ...state,
        editMode: false,
        unsavedChanges: {},
      };
    case actionTypes.SAVE_SETTINGS:
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const context = { state, dispatch };
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
            element={<NotFound />}
          ></Route>
          <Route
            path="models"
            element={<NotFound />}
          ></Route>
          <Route
            path="calendar"
            element={<NotFound />}
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
              element={<ContactSettings toggleEdit={state} />}
            ></Route>
            <Route
              path="password"
              element={<PasswordSettings toggleEdit={state} />}
            ></Route>
          </Route>

          <Route
            path="profile-details"
            element={<RegisterDetails />}
          ></Route>
        </Route>

        {/* Testing route */}
        {/* <Route
          path="/test"
          element={<Test />}
        ></Route> */}

        {/* catch all */}
        <Route
          path="*"
          element={<NotFound />}
        ></Route>
      </Route>
    </Routes>
  );
}
