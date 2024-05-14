import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex justify-between items-center py-4 px-40 bg-gray-300">
      {/* Left section for logo */}
      <div className="flex items-center">
        <div className=" items-center flex justify-center px-8 h-8 bg-gray-400 ">
          MedEase
        </div>
      </div>

      {/* Right section for sign up and login buttons */}
      <div className="flex items-center gap-4">
        <Link
          to="/register"
          className="items-center flex justify-center px-4 h-8 bg-gray-400 "
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="items-center flex justify-center px-4 h-8"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
