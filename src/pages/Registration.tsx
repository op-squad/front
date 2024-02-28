import brokenPicture from "../assets/broken.svg";

export default function Register() {
  return (
    <div className="flex font-inter">
      <div className="flex justify-center items-center bg-gray-300 h-screen w-7/12">
        <img
          src={brokenPicture}
          className="w-4/12"
          alt="Broken Picture SVG"
        />
      </div>
      <div className="bg-gray-100 flex flex-grow ">
        <div className="w-7/12  m-auto my-16">
          <div className="bg-gray-300 w-fit m-auto  py-2 px-8 mb-16">Logo</div>
          <div className="mb-8">
            <p className="font-bold text-4xl">Sign Up.</p>
          </div>
          <form>
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
                className="mt-1 p-2 bg-gray-300 block w-full"
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 p-2 bg-gray-300 block w-full"
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 bg-gray-300 mb-4 p-2 block w-full"
                // value={null}
                // onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 bg-gray-300 mb-8 p-2 block w-full"
                // value={null}
                // onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-black font-bold mb-16 py-2 px-12  text-white"
            >
              Sign Up
            </button>
          </form>
          <button
            type="submit"
            className="bg-gray-300 py-2 w-full text-black font-bold"
          >
            OR Sign Up Using Google
          </button>
        </div>
      </div>
    </div>
  );
}
