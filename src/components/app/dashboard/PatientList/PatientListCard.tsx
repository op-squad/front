import { Link } from "react-router-dom";

const Patient = ({ imgSrc, name, lastVisit, diagnosis }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          className="size-8 2xl:size-10 rounded-full object-cover"
          src={imgSrc}
          alt=""
        />
        <div className="font-semibold text-sm 2xl:text-base cursor-pointer hover:underline">
          <Link to="/patients/patient">{name}</Link>
        </div>
      </div>
      <div className="text-xs 2xl:text-sm">{lastVisit}</div>
      <div className="text-xs 2xl:text-sm">{diagnosis}</div>
    </div>
  );
};
export default function PatientListCard() {
  return (
    <div className="flex flex-col gap-8 bg-blue-50 rounded-xl p-8">
      <div className="flex justify-between items-center w-full text-blue-950">
        <div className="font-extrabold text-xl 2xl:text-2xl cursor-pointer hover:underline">
          <Link to="/patients">Patient List</Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 text-blue-950 px-2 2xl:px-4">
        <Patient
          imgSrc={"src/assets/profile/doctor.jpg"}
          name={"Lekhder Belloumi"}
          lastVisit={"2024/04/27"}
          diagnosis={"Ear Infection"}
        />
        <hr />
        <Patient
          imgSrc={"src/assets/profile/doctor.jpg"}
          name={"Lekhder Belloumi"}
          lastVisit={"2024/04/27"}
          diagnosis={"Ear Infection"}
        />
        <hr />
        <Patient
          imgSrc={"src/assets/profile/doctor.jpg"}
          name={"Lekhder Belloumi"}
          lastVisit={"2024/04/27"}
          diagnosis={"Ear Infection"}
        />
      </div>
    </div>
  );
}
