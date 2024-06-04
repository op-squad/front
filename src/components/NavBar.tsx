function NavBar() {
  return (
    <nav className="flex justify-between items-center py-4 px-40 bg-gray-300">
      {/* Left section for logo */}
      <div className="flex items-center">
        <div className=" items-center flex justify-center px-8 h-8 bg-gray-400 ">
          Logo
        </div>
      </div>

      {/* Right section for sign up and login buttons */}
      <div className="flex items-center gap-4">
        <button className="items-center flex justify-center px-4 h-8 bg-gray-400 ">
          Sign Up
        </button>
        <button className="items-center flex justify-center px-4 h-8 ">
          Login
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
