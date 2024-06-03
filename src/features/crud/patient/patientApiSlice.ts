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
          url: `/patient/?id=${id}`,
        };
      },
    }),

    getPatients: builder.query({
      query: (body: { page: number; size: number }) => {
        return {
          url: `/patients?page=${body.page}&size=${body.size}`,
        };
      },
    }),

    deletePatientByID: builder.mutation({
      query: (id: number) => {
        return {
          url: `/patient/?patientId=${id}`,
          method: "DELETE",
        };
      },
    }),

    createPatient: builder.mutation({
      query: (body: {
        firstname: string;
        lastname: string;
        phonenumber: string;
      }) => {
        return {
          url: "/patient",
          method: "POST",
          body,
        };
      },
    }),

    delegatePatient: builder.mutation({
      query: (body: { doctorName: string; patientID: number }) => {
        return {
          url: "/patient/delegate",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const {
  useGetPatientByIDQuery,
  useGetPatientsQuery,
  useCreatePatientMutation,
  useDelegatePatientMutation,
  useDeletePatientByIDMutation,
} = patientApiSlice;
