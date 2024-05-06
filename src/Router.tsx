import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PasswordReset from "./pages/PasswordReset";
import Register from "./pages/Registration";
import Dashboard from "./pages/Dashboard.tsx";
import Settings from "./pages/Settings.tsx";

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
    path: "/password-reset",
    element: <PasswordReset />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
