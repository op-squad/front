import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PasswordReset from "./pages/PasswordReset";
import Register from "./pages/Registration";
import RegisterDetails from "@pages/RegisterDetails";
import EmailVerification from "@pages/EmailVerification";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/register/details",
    element: <RegisterDetails />,
  },
  {
    path: "/email-verify",
    element: <EmailVerification />,
  },
  {
    path: "/password-reset",
    element: <PasswordReset />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
