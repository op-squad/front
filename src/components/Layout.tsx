import { Toaster } from "@/utils/toaster";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}

export default Layout;
