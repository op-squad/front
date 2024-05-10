export default function NotFound() {
  return (
    <div className="flex font-inter h-screen bg-gray-100 justify-center items-center">
      <div className="flex flex-col gap-4 text-center">
        <p className="font-bold text-8xl text-center whitespace-nowrap">
          ERROR 404{" "}
        </p>
        <p className="font-light text-2xl text-center whitespace-nowrap">
          Page Not Found{" "}
        </p>
      </div>
    </div>
  );
}
