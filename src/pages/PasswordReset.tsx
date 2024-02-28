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
        <div className="flex flex-col justify-center">
          <div className="mb-8 flex flex-col items-center gap-2">
            <p className="font-bold text-4xl">Forgot Password?</p>
            <p className="text-base font-extralight">{`Don't worry, we'll help you with that.`}</p>
          </div>
          <form className="mx-8">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium"
              >
                Email
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 p-4 bg-gray-300 block w-full"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-black w-full font-bold mb-24 p-4 text-white"
            >
              Send Verification Code
            </button>
          </form>
        </div>
      </div>
      <div className="flex-1 justify-center items-center h-screen"></div>
    </div>
  );
}
