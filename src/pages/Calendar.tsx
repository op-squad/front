import Sidebar from "@/components/app/Sidebar";
import { Dropdown } from "@/components/ui/Dropdown";
import { useEffect, useRef, useState } from "react";

export default function Calendar() {
  const [interfaceOpen, setInterfaceOpen] = useState(false);
  const floatingWindowRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        floatingWindowRef.current &&
        !floatingWindowRef.current.contains(e.target)
      ) {
        setInterfaceOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col gap-8 w-full h-full p-8 overflow-y-auto bg-blue-100 text-blue-950">
        <h1 className="text-4xl 2xl:text-5xl font-extrabold py-4 text-blue-950">
          Calendar
        </h1>
        <div className="flex flex-col gap-8 h-fit w-full">
          <div className="self-end">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setInterfaceOpen(true);
              }}
              className="bg-indigo-600 px-8 py-4 rounded-xl text-blue-50 font-semibold text-sm"
            >
              New Appointment
            </button>
          </div>
          <div className="grid grid-cols-[auto_repeat(5,_1fr)_auto] gap-x-8 w-full p-8 gap-y-8 bg-blue-50 rounded-xl">
            <div className="text-gray-600 font-semibold">#</div>
            <div className="text-gray-600 font-semibold">Created</div>
            <div className="text-gray-600 font-semibold">Scheduled</div>
            <div className="text-gray-600 font-semibold">Patient</div>
            <div className="text-gray-600 font-semibold">Type</div>
            <div className="text-gray-600 font-semibold">Status</div>
            <div className="text-gray-600 font-semibold">Action</div>

            <div className="font-medium">1</div>
            <div className="font-medium font-Lato">10/04/2024</div>
            <div className="font-medium font-Lato">15/04/2024</div>
            <div className="font-medium">Hmed Bouallam</div>
            <div className="font-medium">Root Canal</div>
            <div className="font-medium">Pending</div>
            <div className="font-medium">
              <Dropdown />
            </div>

            <div className="font-medium">2</div>
            <div className="font-medium font-Lato">10/04/2024</div>
            <div className="font-medium font-Lato">15/04/2024</div>
            <div className="font-medium">Hmed Bouallam</div>
            <div className="font-medium">Root Canal</div>
            <div className="font-medium">Done</div>
            <div className="font-medium">
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
      {interfaceOpen && (
        <div className="absolute h-screen w-screen flex flex-col justify-center items-center">
          <div className="bg-gray-600 h-screen w-screen opacity-20"></div>
          <div
            ref={floatingWindowRef}
            className="flex flex-col bg-blue-50 rounded-xl p-8 gap-8 shadow-xl absolute"
          >
            <div className="font-bold text-xl text-blue-950">
              New Appointment
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                className="rounded-xl h-12"
              />
              <input
                type="text"
                className="rounded-xl h-12"
              />
              <input
                type="text"
                className="rounded-xl h-12"
              />
              <input
                type="text"
                className="rounded-xl h-12"
              />
            </div>
            <button
              onClick={() => setInterfaceOpen(false)}
              className="p-4 py-2 bg-indigo-600 rounded-xl text-blue-50 self-end"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
