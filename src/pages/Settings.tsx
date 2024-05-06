import Sidebar from "../components/app/Sidebar";

export default function Settings() {
  return (
    <div className="flex overflow-hidden h-screen bg-blue-50">
      <Sidebar />
      <div className="flex justify-center w-full overflow-auto text-blue-950">
        <div className="flex flex-col p-16 w-max h-fit">
          <h1 className="text-4xl 2xl:text-5xl font-extrabold py-4 text-blue-950">
            Account & Settings
          </h1>
          <div className="flex pl-4 gap-8 mt-6 mb-2 font-semibold">
            <div className="text-blue-950 cursor-pointer">Profile</div>
            <div className="text-gray-400 cursor-pointer">Contact</div>
            <div className="text-gray-400 cursor-pointer">Password</div>
          </div>
          <hr />
          <div className="flex flex-col gap-16 my-20 pl-4">
            <div className="flex flex-col gap-8">
              <h2 className="text-2xl 2xl:text-2xl font-bold">
                Profile Picture
              </h2>
              <div className="flex gap-24 items-center">
                <img
                  src="src/assets/profile/doctor.jpg"
                  alt="doctor"
                  className="w-48 aspect-square object-cover rounded-full"
                />
                <div className="flex flex-col gap-4">
                  <button className="bg-blue-600 text-blue-50 px-8 py-2 rounded-xl text-sm font-semibold">
                    Change Picture
                  </button>
                  <button className="border-solid border-2 border-red-600 text-red-600 px-8 py-2 rounded-xl text-sm font-semibold">
                    Delete Picture
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl 2xl:text-2xl font-bold">
                Basic Information
              </h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="family-name">Family Name</label>
                  <input
                    className="rounded-lg h-10 border-solid border-2 px-4 w-96"
                    type="text"
                    id="family-name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="first-name">First Name</label>
                  <input
                    className="rounded-lg h-10 border-solid border-2 px-4 w-96"
                    type="text"
                    id="first-name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="role">Role</label>
                  <select
                    id="role"
                    className="rounded-lg h-10 border-solid border-2 px-4 w-96"
                  >
                    <option value="Doctor">Doctor</option>
                    <option value="Assistant">Assistant</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="specialty">Specialty</label>
                  <select
                    id="specialty"
                    className="rounded-lg h-10 border-solid border-2 px-4 w-96"
                  >
                    <option value="Surgery">Surgery</option>
                    <option value="Neurology">Neurology</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="self-end bg-blue-600 text-blue-50 px-8 py-2 rounded-xl text-sm">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
