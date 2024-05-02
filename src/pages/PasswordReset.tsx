// import ChangePasswordForm from "../components/ChangePasswordForm";
import LoginDetailForm from "../components/LoginDetailForm";
// import ChangePasswordStatus from "../components/ChangePasswordStatus";
// import PasswordResetMessage from "../components/PasswordResetMessage";

export default function PasswordReset() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="absolute top-16 text-gray-600 left-24">
        <p>{"←"}&nbsp;&nbsp; back to login page</p>
      </div>
      {/* <PasswordResetMessage sent={true} /> */}
      {/* <ChangePasswordForm /> */}
      {/* <ChangePasswordStatus /> */}
      <LoginDetailForm />
    </div>
  );
}
