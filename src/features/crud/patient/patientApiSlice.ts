import { apiSlice } from "@/app/api/apiSlice";

// interface patientInfo {
//   firstname: string;
//   lastname: string;
//   gender: "MALE" | "FEMALE"; // Assuming gender can be one of these options
//   address: string;
//   phoneNumber: string;
//   birthDate: string; // Assuming birthDate is always in the format "YYYY-MM-DD"
// }

/*
 * Any endpoint definitions defined using that builder will be merged into the existing * endpoint definitions for this API slice
 */
export const patientApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPatientByID: builder.query({
      query: (id: number) => {
        return {
          url: `/patient/${id}`,
        };
      },
    }),
  }),
});

export const { useGetPatientByIDQuery } = patientApiSlice;
