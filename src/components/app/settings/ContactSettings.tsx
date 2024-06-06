import Input from "@/components/ui/Input";

export default function ContactSettings({ context, actions }) {
  const { state, dispatch } = context;
  const handleUpdateSettings = (key, value) => {
    dispatch({ type: actions.UPDATE_SETTING, payload: { key, value } });
  };

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl 2xl:text-2xl font-bold">Contact Info</h2>
      <div className="flex flex-col gap-4 justify-between">
        <div className="flex flex-col gap-0">
          <label
            htmlFor="phone-number"
            className="flex justify-between text-lg font-light"
          >
            Phone Number
          </label>
          <Input
            className="rounded-md h-10 border-solid border-2 px-4 w-max"
            type="tel"
            id="phone-number"
            value={
              state.editMode
                ? state.unsavedChanges.phoneNumber
                : state.profileSettings.phoneNumber
            }
            onChange={(e) => {
              handleUpdateSettings("phoneNumber", e.target.value);
            }}
          ></Input>
        </div>
        <div className="flex flex-col gap-0 col-start-1 col-end-3">
          <label
            htmlFor="address"
            className="flex justify-between text-lg font-light"
          >
            Address
          </label>
          <Input
            className="rounded-md h-10 border-solid border-2 px-4 w-96"
            type="text"
            id="address"
            value={
              state.editMode
                ? state.unsavedChanges.address
                : state.profileSettings.address
            }
            onChange={(e) => {
              handleUpdateSettings("address", e.target.value);
            }}
          ></Input>
        </div>
      </div>
    </div>
  );
}
