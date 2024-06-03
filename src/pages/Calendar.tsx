import Sidebar from "@/components/app/Sidebar";
import { Dropdown } from "@/components/ui/Dropdown";

export default function Calendar() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col gap-8 w-full h-full p-8 overflow-y-auto bg-blue-100 text-blue-950">
        <h1 className="text-4xl 2xl:text-5xl font-extrabold py-4 text-blue-950">
          Calendar
        </h1>
        <div className="flex flex-col gap-8 h-fit w-full">
          <div className="self-end">
            <button className="bg-indigo-600 px-8 py-4 rounded-xl text-blue-50 font-semibold text-sm">
              New Appointment
            </button>
          </div>
          <div className="grid grid-cols-[auto_repeat(4,_1fr)_auto] gap-x-8 w-full p-8 gap-y-8 bg-blue-50 rounded-xl">
            <div className="text-gray-600 font-semibold">#</div>
            <div className="text-gray-600 font-semibold">Created</div>
            <div className="text-gray-600 font-semibold">Scheduled</div>
            <div className="text-gray-600 font-semibold">Patient</div>
            <div className="text-gray-600 font-semibold">Type</div>
            <div className="text-gray-600 font-semibold">Action</div>

            <div className="font-medium">1</div>
            <div className="font-medium font-Lato">10/04/2024</div>
            <div className="font-medium font-Lato">15/04/2024</div>
            <div className="font-medium">Hmed Bouallam</div>
            <div className="font-medium">Root Canal</div>
            <div className="font-medium">
              <Dropdown />
            </div>

            <div className="font-medium">2</div>
            <div className="font-medium font-Lato">10/04/2024</div>
            <div className="font-medium font-Lato">15/04/2024</div>
            <div className="font-medium">Hmed Bouallam</div>
            <div className="font-medium">Root Canal</div>
            <div className="font-medium">
              <Dropdown />
            </div>

            <div className="font-medium">3</div>
            <div className="font-medium font-Lato">10/04/2024</div>
            <div className="font-medium font-Lato">15/04/2024</div>
            <div className="font-medium">Hmed Bouallam</div>
            <div className="font-medium">Root Canal</div>
            <div className="font-medium">
              <Dropdown />
            </div>

            <div className="font-medium">4</div>
            <div className="font-medium font-Lato">10/04/2024</div>
            <div className="font-medium font-Lato">15/04/2024</div>
            <div className="font-medium">Hmed Bouallam</div>
            <div className="font-medium">Root Canal</div>
            <div className="font-medium">
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
