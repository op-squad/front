import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import doctorProfile from "@/assets/profile/doctorProfile";
import doctorImg from "@/assets/profile/doctor.jpg";
import { logOut } from "@/features/auth/authSlice";
import { useDispatch } from "react-redux";

export default function Sidebar() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login", { replace: true });
  };
  return (
    <div className="flex flex-col items-center bg-indigo-600 text-neutral-50 w-72 2xl:w-80 h-screen justify-between py-16">
      <div className="flex flex-col items-center">
        <img
          src={doctorProfile.profilePicture}
          alt="doctor"
          className="w-2/5 aspect-square object-cover rounded-full"
        />
        <div className="flex flex-col items-center mt-6">
          <p className="text-sm 2xl:text-base font-extrabold">
            Lekhder Belloumi
          </p>
          <p className="text-sm 2xl:text-base font-medium mt-1">Lead Doctor</p>
        </div>
      </div>
      <Nav />
      <div className="flex flex-col items-center text-neutral-50 w-full">
        <div className="flex flex-col w-full">
          <Link
            className="flex gap-4 items-center justify-left pl-16 2xl:pl-20 py-5 2xl:py-4 text-xs 2xl:text-sm text-center font-bold hover:bg-indigo-700"
            to="/settings"
          >
            <IoSettingsSharp size={20} />
            Setting
          </Link>
        </div>
        <div className="flex flex-col w-full">
          <button
            className="flex gap-4 items-center justify-left pl-16 2xl:pl-20 py-5 2xl:py-4 text-xs 2xl:text-sm text-center font-bold hover:bg-indigo-700"
            onClick={handleLogout}
          >
            <FaPowerOff size={18} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
