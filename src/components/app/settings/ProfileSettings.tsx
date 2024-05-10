import { useRef } from "react";
// import doctorProfile from "../../../assets/profile/doctorProfile";

const chooseFile = (ref) => {
  ref.current.click();
};

export default function ProfileSettings({ context, actions }) {
  const { state, dispatch } = context;
  const handleUpdateSettings = (key, value) => {
    dispatch({ type: actions.UPDATE_SETTING, payload: { key, value } });
  };

  const uploadImage = (files: FileList | null) => {
    if (files) {
      if (files[0].size <= 2097152) {
        handleUpdateSettings("profilePicture", URL.createObjectURL(files[0]));
      } else {
        alert("this is too big");
      }
    }
  };

  const ref = useRef();
  return (
    <div className="flex flex-col gap-16 pl-4">
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl 2xl:text-2xl font-bold">Profile Picture</h2>
        <div className="flex gap-24 items-center">
          <img
            src={
              state.editMode
                ? state.unsavedChanges.profilePicture ||
                  state.profileSettings.profilePicture
                : state.profileSettings.profilePicture
            }
            alt="doctor"
            className="w-48 aspect-square object-cover rounded-full"
          />
          <div className="flex flex-col gap-4">
            <input
              className="hidden"
              type="file"
              ref={ref}
              onChange={(e) => console.log(uploadImage(e.target.files))}
            />
            <button
              onClick={() => chooseFile(ref)}
              className="bg-blue-600 text-blue-50 px-8 py-2 rounded-xl text-sm font-semibold"
            >
              Change Picture
            </button>
            <button className="border-solid border-2 border-red-600 text-red-600 px-8 py-2 rounded-xl text-sm font-semibold">
              Delete Picture
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl 2xl:text-2xl font-bold">Basic Information</h2>
        <div className="grid grid-cols-2 gap-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="family-name">Family Name</label>
            <input
              className="rounded-lg h-10 border-solid border-2 px-4 w-max"
              type="text"
              id="family-name"
              value={
                state.editMode
                  ? state.unsavedChanges.familyName ||
                    state.profileSettings.familyName
                  : state.profileSettings.familyName
              }
              onChange={(e) => {
                handleUpdateSettings("familyName", e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="first-name">First Name</label>
            <input
              className="rounded-lg h-10 border-solid border-2 px-4 w-max"
              type="text"
              id="first-name"
              value={
                state.editMode
                  ? state.unsavedChanges.firstName ||
                    state.profileSettings.firstName
                  : state.profileSettings.firstName
              }
              onChange={(e) => {
                handleUpdateSettings("firstName", e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              className="rounded-lg h-10 border-solid border-2 px-4 w-max"
            >
              <option value="Doctor">Doctor</option>
              <option value="Assistant">Assistant</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="specialty">Specialty</label>
            <select
              id="specialty"
              className="rounded-lg h-10 border-solid border-2 px-4 w-max"
            >
              <option value="Surgery">Surgery</option>
              <option value="Neurology">Neurology</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
