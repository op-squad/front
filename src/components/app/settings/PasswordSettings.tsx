export default function PasswordSettings(editState) {
  console.log(editState);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl 2xl:text-2xl font-bold">Change Password</h2>
      <div className="grid grid-cols-2 gap-y-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="rounded-lg h-10 border-solid border-2 px-4 w-max"
            type="password"
            id="password"
          />
        </div>
        <div className="flex flex-col gap-2 col-start-1">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            className="rounded-lg h-10 border-solid border-2 px-4 w-max"
            type="password"
            id="confirm"
          />
        </div>
      </div>
    </div>
  );
}
