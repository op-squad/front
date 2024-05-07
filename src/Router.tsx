import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PasswordReset from "./pages/PasswordReset";
import Register from "./pages/Registration";
import Dashboard from "./pages/Dashboard.tsx";
import Settings from "./pages/Settings.tsx";
import ProfileSettings from "./components/app/settings/ProfileSettings";
import ContactSettings from "./components/app/settings/ContactSettings";
import PasswordSettings from "./components/app/settings/PasswordSettings";

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
    children: [
      {
        index: true,
        element: (
          <Navigate
            to="profile"
            replace
          />
        ),
      },
      {
        path: "profile",
        element: <ProfileSettings />,
      },
      {
        path: "password",
        element: <PasswordSettings />,
      },
      {
        path: "contact",
        element: <ContactSettings />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
