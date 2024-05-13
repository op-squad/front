import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import patientPicture from "../../../assets/profile/doctor.jpg";

export default function Patients() {
  const { patientId } = useParams();
  console.log(patientId);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col gap-8 w-full h-full p-8 overflow-y-auto bg-blue-100">
        <h1 className="text-4xl 2xl:text-5xl font-extrabold py-4 text-blue-950">
          Patient Profile
        </h1>
        <div className="flex flex-col gap-8 w-full text-blue-950">
          <div className="grid grid-cols-[1fr_1fr_2fr] w-full h-96 gap-8">
            <div className="flex flex-col items-center py-8 bg-blue-50 rounded-xl">
              <img
                className="aspect-square w-32 rounded-full object-cover"
                src={patientPicture}
                alt=""
              />
              <div>Name Name</div>
              <div>email@email.com</div>
              <div className="flex flex-col justify-center items-center">
                <div className="font-semibold text-sm text-gray-500">
                  Appintments
                </div>
                <div className="font-Lato text-xl">54</div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-10 p-8">
              <div className="flex flex-col justify-center">
                <div className="font-semibold text-sm text-gray-500">
                  Gender
                </div>
                <div className="font-Lato text-xl">Male</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-semibold text-sm text-gray-500">
                  Birth Date
                </div>
                <div className="font-Lato text-xl">01/01/1970</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-semibold text-sm text-gray-500">
                  Mobile Number
                </div>
                <div className="font-Lato text-xl">+213557987345</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-semibold text-sm text-gray-500">
                  Diagnosis
                </div>
                <div className="font-Lato text-xl">Ear Infection</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-semibold text-sm text-gray-500">
                  Status
                </div>
                <div className="font-Lato text-xl">Active</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-semibold text-sm text-gray-500">
                  Registration Date
                </div>
                <div className="font-Lato text-xl">01/02/2024</div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl">asdf</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
