import { useSelector } from "react-redux";
import {
  selectCurrentToken,
  selectCurrentUser,
} from "../features/auth/authSlice";

function Dashboard() {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);

  return (
    <div className="font-inter bg-gray-100 flex justify-center items-center h-screen">
      <div className="flex flex-col py-8 justify-center gap-8 items-center bg-gray-300 h-1/2 w-1/2">
        <h1 className="text-7xl font-bold">Dashboard</h1>
        <div className="text-4xl text-center flex flex-col gap-4">
          <p>
            * Welcome to the hub:{" "}
            <span className="font-semibold">
              {user ? `[${user}]` : "NO USER"}
            </span>
          </p>
          <p>
            * Token:{" "}
            <span className="font-semibold">
              {token ? `[${token?.slice(0, 9)}...]` : "NO TOKEN"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
