import Layout from "@components/Layout";
// import RequireAuth from "@components/RequireAuth";
import Dashboard from "@pages/Dashboard";
import EmailVerification from "@pages/EmailVerification";
import Landing from "@pages/Landing";
import Login from "@pages/Login";
import NotFound from "@pages/NotFound";
import PasswordReset from "@pages/PasswordReset";
import RegisterDetails from "@pages/RegisterDetails";
import Register from "@pages/Registration";
import { Routes, Route } from "react-router-dom";

export default function App() {
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
