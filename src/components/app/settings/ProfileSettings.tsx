import Input from "@/components/ui/Input";
import { RefObject, useRef } from "react";

const chooseFile = (ref: RefObject<HTMLInputElement>) => {
  ref.current?.click();
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

  const ref = useRef(null);
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
            className="w-48 aspect-square border-2 border-primary border-opacity-30 object-cover rounded-full"
          />
          <div className="flex flex-col justify-center gap-4">
            <Input
              className="hidden"
              type="file"
              ref={ref}
              onChange={(e) => console.log(uploadImage(e.target.files))}
            ></Input>
            <button
              onClick={() => chooseFile(ref)}
              className="bg-blue-600 text-blue-50 px-8 py-2 rounded-md text-lg font-semibold"
            >
              Change Picture
            </button>
            <button className="border-solid border-2 border-red-600 text-red-600 px-8 py-2 rounded-md text-lg font-semibold">
              Delete Picture
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl 2xl:text-2xl font-bold">Basic Information</h2>
        <div className="grid grid-cols-2 gap-y-4">
          <div className="flex flex-col gap-0">
            <label
              htmlFor="family-name"
              className="flex justify-between text-lg font-light"
            >
              First Name
            </label>
            <Input
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
            ></Input>
          </div>
          <div className="flex flex-col mb-2 gap-0">
            <label
              htmlFor="family-name"
              className="flex justify-between text-lg font-light"
            >
              Last Name
            </label>
            <Input
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
            <label
              htmlFor="role"
              className="flex justify-between text-lg font-light"
            >
              Gender
            </label>
            <select
              id="role"
              className="rounded-md h-10 border-solid border-2 px-4 w-max"
            >
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="specialty"
              className="flex justify-between text-lg font-light"
            >
              Specialty
            </label>
            <select
              id="specialty"
              className="rounded-md h-10 border-solid border-2 px-4 w-max"
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
