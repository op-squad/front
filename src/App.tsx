import Layout from "@components/Layout";
import ContactSettings from "@components/app/settings/ContactSettings";
import PasswordSettings from "@components/app/settings/PasswordSettings";
import ProfileSettings from "@components/app/settings/ProfileSettings";
// import RequireAuth from "@components/RequireAuth";
import Dashboard from "@pages/Dashboard";
import EmailVerification from "@pages/EmailVerification";
import Landing from "@pages/Landing";
import Login from "@pages/Login";
import NotFound from "@pages/NotFound";
import PasswordReset from "@pages/PasswordReset";
import RegisterDetails from "@pages/RegisterDetails";
import Register from "@pages/Registration";
import Settings from "@pages/Settings";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  const [settingsEditState, setSettingsEditState] = useState(false);
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        {/* Public routes  */}
        <Route
          path="landing"
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

        {/* We want to protect these routes */}
        {/* <Route element={<RequireAuth />}> */}
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
              toggleEdit={settingsEditState}
              setToggleEdit={setSettingsEditState}
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
            element={<ProfileSettings editState={settingsEditState} />}
          ></Route>
          <Route
            path="contact"
            element={<ContactSettings editState={settingsEditState} />}
          ></Route>
          <Route
            path="password"
            element={<PasswordSettings editState={settingsEditState} />}
          ></Route>
        </Route>
        {/* </Route>  */}

        {/* catch all */}
        <Route
          path="*"
          element={<NotFound />}
        ></Route>
      </Route>
    </Routes>
  );
}
