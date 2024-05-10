import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "@/components/app/Sidebar";

export default function Settings() {
  return (
    <div className="flex overflow-hidden h-screen bg-blue-50">
      <Sidebar />
      <div className="flex justify-center w-full overflow-auto text-primary">
        <div className="flex flex-col p-16 w-max h-fit">
          <h1 className="text-4xl 2xl:text-5xl font-extrabold py-4 text-primary">
            Account & Settings
          </h1>
          <div className="flex pl-4 gap-12 mt-6 mb-2 font-semibold">
            <NavLink
              to="profile"
              className={({ isActive }) =>
                isActive
                  ? "cursor-pointer text-primary"
                  : "cursor-pointer text-gray-400"
              }
            >
              Profile
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive
                  ? "cursor-pointer text-primary"
                  : "cursor-pointer text-gray-400"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="password"
              className={({ isActive }) =>
                isActive
                  ? "cursor-pointer text-primary"
                  : "cursor-pointer text-gray-400"
              }
            >
              Change Password
            </NavLink>
          </div>
          <hr />
          <div className="w-[800px] my-16">
            <Outlet />
          </div>
          <button className="self-end bg-blue-600 text-blue-50 px-8 py-2 rounded-md text-lg font-semibold">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
