import { apiSlice } from "@/app/api/apiSlice";

interface doctorInfo {
  firstname: string;
  lastname: string;
  gender: "MALE" | "FEMALE"; // Assuming gender can be one of these options
  address: string;
  phoneNumber: string;
  specialty: string;
  birthDate: string; // Assuming birthDate is always in the format "YYYY-MM-DD"
}

/*
 * Any endpoint definitions defined using that builder will be merged into the existing * endpoint definitions for this API slice
 */
export const doctorApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDoctorProfile: builder.query({
      query: () => {
        return {
          url: "/doctor/profile",
        };
      },
    }),
    getProfilePicture: builder.query({
      query: () => ({
        url: "/profile/picture",
        responseHandler: (response) => response.blob(),
      }),
      transformResponse: (response) => URL.createObjectURL(response),
    }),
    createDoctorProfile: builder.mutation({
      query: (body: doctorInfo) => {
        return {
          url: "/doctor/profile",
          method: "POST",
          body,
        };
      },
    }),
    deleteDoctorProfile: builder.mutation({
      query: () => {
        return {
          url: "/doctor/profile",
          method: "DELETE",
        };
      },
    }),
    addPatient: builder.mutation({
      query: (username: string) => {
        return {
          url: `/doctor/patient?patientUsername=${username}`,
          method: "POST",
        };
      },
    }),
  }),
});

export const {
  useGetDoctorProfileQuery,
  useGetProfilePictureQuery,
  useCreateDoctorProfileMutation,
  useDeleteDoctorProfileMutation,
  useAddPatientMutation,
} = doctorApiSlice;
