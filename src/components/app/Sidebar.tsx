import Nav from "./Nav";
export default function Sidebar() {
  return (
    <div className="flex flex-col items-center bg-indigo-600 w-80 h-screen fixed">
      <img
        src="src/assets/profile/doctor.jpg"
        alt="doctor"
        className="mt-16 w-32 h-32 object-cover rounded-full"
      />
      <div className="flex flex-col items-center mt-6">
        <p className="font-extrabold text-neutral-50">Lekhder Belloumi</p>
        <p className="font-medium text-neutral-50 mt-1">Lead Doctor</p>
      </div>
      <Nav />
    </div>
  );
}
