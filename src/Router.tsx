import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PasswordReset from "./pages/PasswordReset";
import Register from "./pages/Registration";
import Dashboard from "./pages/Dashboard.tsx";

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
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
