import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import patientPicture from "../../../assets/profile/doctor.jpg";
import { useGetPatientByIDQuery } from "@/features/crud/patient/patientApiSlice";
import moment from "moment";

export default function Patients() {
  const { patientId } = useParams();
  const patient = useGetPatientByIDQuery(parseInt(patientId));
  console.log(patient);
  const { data, isError, error, isLoading } = useGetPatientByIDQuery(
    parseInt(patientId),
  );
  console.log(data);
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Loading...
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Error {error.status}
      </div>
    );
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col gap-8 w-full h-full p-8 overflow-y-auto bg-blue-100">
        <h1 className="text-4xl 2xl:text-5xl font-extrabold py-4 text-blue-950">
          Patient Profile
        </h1>
        <div className="flex flex-col gap-8 w-full text-blue-950">
          <div className="grid grid-cols-[1fr_1fr_2fr] w-full h-max gap-8 place-itmes-stretch">
            <div className="flex flex-col gap-4 items-center py-8 bg-blue-50 rounded-xl">
              <img
                className="aspect-square w-32 rounded-full object-cover"
                src={patientPicture}
                alt=""
              />
              <div className="flex flex-col items-center justify-center">
                <div className="font-semibold text-xl">
                  {`${data.firstname} ${data.lastname}`}
                </div>
                <div className="text-sm text-gray-500">{data.email}</div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="font-semibold text-sm text-gray-500">
                  Appintments
                </div>
                <div className="font-Lato text-xl">54</div>
              </div>
              <div>
                <button className="px-16 py-4 bg-indigo-600 rounded-xl text-blue-50 font-bold">
                  New Appointment
                </button>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl grid grid-cols-2 grid-rows-3 place-content-stretch p-8">
              <div className="flex flex-col justify-center">
                <div className="font-semibold text-sm text-gray-500">
                  Gender
                </div>
                <div className="font-Lato text-lg">{data.gender}</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-semibold text-sm text-gray-500">
                  Birth Date
                </div>
                <div className="font-Lato text-lg">
                  {moment(data.birthDate).format("DD/MM/YYYY")}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-semibold text-sm text-gray-500">
                  Mobile Number
                </div>
                <div className="font-Lato text-lg">
                  +213{data.phoneNumber.substring(1, data.phoneNumber.length)}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-semibold text-sm text-gray-500">
                  Diagnosis
                </div>
                <div className="font-Lato text-lg">Ear Infection</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-semibold text-sm text-gray-500">
                  Status
                </div>
                <div className="font-Lato text-lg">Active</div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-semibold text-sm text-gray-500">
                  Registration Date
                </div>
                <div className="font-Lato text-lg">
                  {moment(data.createdAt).format("DD/MM/YYYY")}
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-blue-50 rounded-xl gap-y-8 p-8">
              <div className="font-extrabold text-2xl">Reports</div>
              <div className="grid grid-cols-[repeat(2,_1fr)_auto] font-normal text-base gap-y-4 h-64 overflow-y-auto pr-4">
                <div className="font-medium">Checkup Result</div>
                <div className="font-medium">12/06/2024</div>
                <div className="font-medium">buttons</div>
                <div className="font-medium">Checkup Result</div>
                <div className="font-medium">12/06/2024</div>
                <div className="font-medium">buttons</div>
                <div className="font-medium">Checkup Result</div>
                <div className="font-medium">12/06/2024</div>
                <div className="font-medium">buttons</div>
                <div className="font-medium">Checkup Result</div>
                <div className="font-medium">12/06/2024</div>
                <div className="font-medium">buttons</div>
                <div className="font-medium">Checkup Result</div>
                <div className="font-medium">12/06/2024</div>
                <div className="font-medium">buttons</div>
                <div className="font-medium">Checkup Result</div>
                <div className="font-medium">12/06/2024</div>
                <div className="font-medium">buttons</div>
                <div className="font-medium">Checkup Result</div>
                <div className="font-medium">12/06/2024</div>
                <div className="font-medium">buttons</div>
                <div className="font-medium">Checkup Result</div>
                <div className="font-medium">12/06/2024</div>
                <div className="font-medium">buttons</div>
                <div className="font-medium">Checkup Result</div>
                <div className="font-medium">12/06/2024</div>
                <div className="font-medium">buttons</div>
                <div className="font-medium">Checkup Result</div>
                <div className="font-medium">12/06/2024</div>
                <div className="font-medium">buttons</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 p-8 bg-blue-50 rounded-xl">
            <div className="font-extrabold text-2xl">Appointments</div>
            <div className="grid grid-cols-[repeat(4,_1fr)_auto] gap-y-4 pr-8 overflow-y-auto h-64">
              <div className="text-gray-500 font-bold">Date</div>
              <div className="text-gray-500 font-bold">Treatment Type</div>
              <div className="text-gray-500 font-bold">Booking Time</div>
              <div className="text-gray-500 font-bold">Comments</div>
              <div className="text-gray-500 font-bold">Action</div>
              <div className="font-medium">12/06/2024</div>
              <div className="font-medium">Root Canal</div>
              <div className="font-medium">4:00pm</div>
              <div className="font-medium">No Comments</div>
              <div className="font-medium">button</div>
              <div className="font-medium">12/06/2024</div>
              <div className="font-medium">Root Canal</div>
              <div className="font-medium">4:00pm</div>
              <div className="font-medium">No Comments</div>
              <div className="font-medium">button</div>
              <div className="font-medium">12/06/2024</div>
              <div className="font-medium">Root Canal</div>
              <div className="font-medium">4:00pm</div>
              <div className="font-medium">No Comments</div>
              <div className="font-medium">button</div>
              <div className="font-medium">12/06/2024</div>
              <div className="font-medium">Root Canal</div>
              <div className="font-medium">4:00pm</div>
              <div className="font-medium">No Comments</div>
              <div className="font-medium">button</div>
              <div className="font-medium">12/06/2024</div>
              <div className="font-medium">Root Canal</div>
              <div className="font-medium">4:00pm</div>
              <div className="font-medium">No Comments</div>
              <div className="font-medium">button</div>
              <div className="font-medium">12/06/2024</div>
              <div className="font-medium">Root Canal</div>
              <div className="font-medium">4:00pm</div>
              <div className="font-medium">No Comments</div>
              <div className="font-medium">button</div>
              <div className="font-medium">12/06/2024</div>
              <div className="font-medium">Root Canal</div>
              <div className="font-medium">4:00pm</div>
              <div className="font-medium">No Comments</div>
              <div className="font-medium">button</div>
              <div className="font-medium">12/06/2024</div>
              <div className="font-medium">Root Canal</div>
              <div className="font-medium">4:00pm</div>
              <div className="font-medium">No Comments</div>
              <div className="font-medium">button</div>
              <div className="font-medium">12/06/2024</div>
              <div className="font-medium">Root Canal</div>
              <div className="font-medium">4:00pm</div>
              <div className="font-medium">No Comments</div>
              <div className="font-medium">button</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
