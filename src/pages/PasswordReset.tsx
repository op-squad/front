import PasswordResetMessage from "../components/PasswordResetMessage";

export default function PasswordReset() {
  return (
    <div className="flex font-inter bg-gray-100">
      <div className="flex-1 justify-center items-center h-screen">
        <p className="mt-24 flex justify-center">{"<-"} Back to login page</p>
      </div>
      <div className="flex-1">
        <div className="bg-gray-300 w-fit m-auto mt-24 py-2 px-8 mb-40">
          Logo
        </div>
        <div>
          <PasswordResetMessage sent={true} />
        </div>
      </div>
      <div className="flex-1 justify-center items-center h-screen"></div>
    </div>
  );
}
