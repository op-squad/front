export default function ContactSettings({ editState }) {
  console.log(editState);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl 2xl:text-2xl font-bold">Contact Info</h2>
      <div className="grid grid-cols-2 gap-y-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="rounded-lg h-10 border-solid border-2 px-4 w-max"
            type="email"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            className="rounded-lg h-10 border-solid border-2 px-4 w-max"
            type="tel"
            id="phone-number"
          />
        </div>
        <div className="flex flex-col gap-2 col-start-1 col-end-3">
          <label htmlFor="address">Address</label>
          <input
            className="rounded-lg h-10 border-solid border-2 px-4 w-96"
            type="text"
            id="address"
          />
        </div>
      </div>
    </div>
  );
}
