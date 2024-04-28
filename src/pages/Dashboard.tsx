import Sidebar from "../components/app/Sidebar";
export default function Dashboard() {
  return (
    <div className="h-[1300px]">
      <Sidebar />
      <div className="pl-80 bg-blue-100 h-full">
        <div className="flex flex-col gap-8 h-full p-8">
          <div className="text-5xl font-extrabold py-4 text-blue-950">Home</div>
          <div className="flex gap-8 h-full">
            <div className="flex flex-col h-full gap-8 basis-[65%]">
              <div className="flex gap-8">
                <div className="flex items-center bg-indigo-300 text-blue-950 h-40 gap-6 basis-1/3 rounded-xl px-11">
                  <div className="rounded-full w-[74px] h-[74px] bg-white"></div>
                  <div className="flex flex-col gap-2.5">
                    <p className="font-extrabold text-base">Appointments</p>
                    <p className="font-bold text-3xl">514</p>
                  </div>
                </div>
                <div className="flex items-center bg-blue-50 text-blue-950 h-40 gap-6 basis-1/3 rounded-xl px-11">
                  <div className="rounded-full w-[74px] h-[74px] bg-indigo-200"></div>
                  <div className="flex flex-col gap-2.5">
                    <p className="font-extrabold text-base">Appointments</p>
                    <p className="font-bold text-3xl">514</p>
                  </div>
                </div>
                <div className="flex items-center bg-blue-950 h-40 gap-6 basis-1/3 rounded-xl px-11">
                  <div className="rounded-full w-[74px] h-[74px] bg-white"></div>
                  <div className="flex flex-col gap-2.5">
                    <p className="text-white font-extrabold text-base">
                      Appointments
                    </p>
                    <p className="text-white font-bold text-3xl">514</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8 basis-1/2 bg-blue-50 rounded-xl p-8">
                <p className="font-extrabold text-2xl text-blue-950">
                  Patient Visits
                </p>
                <div className="flex px-4 pb-4 h-full">
                  <div className="flex flex-col justify-between items-end text-blue-900 h-full pb-4">
                    <p>1200</p>
                    <p>1000</p>
                    <p>800</p>
                    <p>600</p>
                    <p>400</p>
                    <p>200</p>
                    <p>0</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8 basis-1/2 bg-blue-50 rounded-xl p-8">
                <p className="font-extrabold text-2xl text-blue-950">
                  Patient List
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 basis-[35%] h-max">
              <div className="bg-blue-950 rounded-xl text-white p-8">asdf</div>
              <div className="bg-blue-950 rounded-xl text-white p-8">
                <div>
                  <p>Schedule</p>
                  <div>Menu</div>
                </div>
                <div>Calendar</div>
                <div>Short Appointment List</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
