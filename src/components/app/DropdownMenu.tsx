export default function DropdownMenu() {
  return (
    <div className="border-solid">
      <select
        className="py-1 px-4 rounded-lg border-2 border-gray-300 bg-blue-50 text-gray-500"
        name=""
        id=""
      >
        <option value="">Jan</option>
        <option value="">Feb</option>
        <option value="">Mar</option>
        <option value="">Apr</option>
        <option value="">May</option>
      </select>
    </div>
  );
}
