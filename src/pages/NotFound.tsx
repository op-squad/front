export default function NotFound() {
  return (
    <div className="flex font-inter h-screen bg-gray-100 justify-center items-center">
      <div className="flex flex-col gap-2 text-center">
        <p className="font-bold text-4xl text-center whitespace-nowrap">
          ERROR 404 - PAGE NOT FOUND
        </p>
        <p className="text-md font-extralight mb-8">Get Back To Home Page</p>
      </div>
    </div>
  );
}
