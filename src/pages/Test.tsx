// import { useCreateAssistantProfileMutation } from "@/features/crud/assistant/assistantApiSlice";
// import { useGetDoctorProfileQuery } from "@/features/crud/doctor/doctorApiSlice";
// import { useCreateDoctorProfileMutation } from "@/features/crud/doctor/doctorApiSlice";
// import { useDeleteDoctorProfileMutation } from "@/features/crud/doctor/doctorApiSlice";
// import {
//   useCreatePatientMutation,
//   useGetPatientsQuery,
// } from "@/features/crud/patient/patientApiSlice";
// import { toast, useToast } from "@/utils/use-toast";
// import { useCreateVisitMutation } from "@/features/visit/visitApiSlice";

// function Test() {
//   const { data } = useGetPatientsQuery({
//     page: 1,
//     size: 1,
//     sort: ["string"],
//   }); // Pass the required arguments here

//   const [createDoctorProfile] = useCreateDoctorProfileMutation();
//   const [createAssistantProfile] = useCreateAssistantProfileMutation();
//   const [createVisit] = useCreateVisitMutation();

//   const handleCreateVisit = async () => {
//     await createVisit({
//       patientID: 1,
//       diagnosis: "diagnosis",
//       doctorName: "masterOog",
//       visitDate: "2024-05-12T09:33:39.947Z",
//     });
//     console.log(data);
//   };

//   const handleCreateDoctorProfile = async () => {
//     await createDoctorProfile({
//       address: "mazagran",
//       birthDate: "2003-02-02",
//       firstname: "mohamed",
//       gender: "MALE",
//       lastname: "ben salah",
//       phoneNumber: "0555555555",
//       specialty: "dentist",
//     });
//     console.log(data);
//   };

//   const handleCreateAssistantProfile = async () => {
//     await createAssistantProfile({
//       address: "mazagran",
//       birthDate: "2003-02-02",
//       firstname: "mohamed",
//       gender: "MALE",
//       lastname: "ben salah",
//       phoneNumber: "0555555555",
//     });
//     console.log(data);
//   };
//   // handleCreateDoctorProfile();

//   // const [deleteDoctorProfile] = useDeleteDoctorProfileMutation();

//   // deleteDoctorProfile({});

//   const [createPatient] = useCreatePatientMutation();
//   const { toast } = useToast();

//   const handleCreatePatient = async () => {
//     await createPatient({
//       firstname: "mohamed",
//       lastname: "bensalah",
//       phonenumber: "0555555555",
//     })
//       .unwrap()
//       .then((res) => {
//         console.log(res);
//         toast({
//           variant: "destructive",
//           title: "Uh oh! Something went wrong.",
//           description: "There was a problem with your request.",
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   // const { data, error } = useGetPatientsQuery({}); // Pass the required arguments here
//   console.log(data);

//   return (
//     <button
//       className="bg-red-500 p-4 flex justify-center"
//       onClick={handleCreateVisit}
//     >
//       Create Visit
//       {data}
//     </button>
//   );
// }

// export default Test;
