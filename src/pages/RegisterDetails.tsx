import LoginDetailForm from "../components/LoginDetailForm";

export default function RegisterDetails() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="absolute top-16 text-gray-600 left-24">
        <p>{"←"}&nbsp;&nbsp; back to sign up page</p>
      </div>

      <LoginDetailForm />
    </div>
  );
}
