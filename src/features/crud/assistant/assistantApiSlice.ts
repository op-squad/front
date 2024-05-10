import { apiSlice } from "@/app/api/apiSlice";

interface assistantInfo {
  firstname: string;
  lastname: string;
  gender: "MALE" | "FEMALE"; // Assuming gender can be one of these options
  address: string;
  phoneNumber: string;
  birthDate: string; // Assuming birthDate is always in the format "YYYY-MM-DD"
}

/*
 * Any endpoint definitions defined using that builder will be merged into the existing * endpoint definitions for this API slice
 */
export const assistantApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssistantProfile: builder.query({
      query: () => {
        return {
          url: "/assistant/profile",
        };
      },
    }),
    createAssistantProfile: builder.mutation({
      query: (body: assistantInfo) => {
        return {
          url: "/assistant/profile",
          method: "POST",
          body,
        };
      },
    }),
    deleteAssistantProfile: builder.mutation({
      query: () => {
        return {
          url: "/assistant/profile",
          method: "DELETE",
        };
      },
    }),

    getAssistantDoctor: builder.query({
      query: () => {
        return {
          url: "/assistant/doctor",
        };
      },
    }),

    createAssistantDoctor: builder.mutation({
      query: (body: { doctorUsername: string }) => {
        return {
          url: "/assistant/doctor",
          method: "POST",
          body,
        };
      },
    }),

    deleteAssistantDoctor: builder.mutation({
      query: (body: { doctorUsername: string }) => {
        return {
          url: "/assistant/doctor",
          method: "DELETE",
          body,
        };
      },
    }),
  }),
});

export const {
  useCreateAssistantDoctorMutation,
  useCreateAssistantProfileMutation,
  useDeleteAssistantDoctorMutation,
  useDeleteAssistantProfileMutation,
  useGetAssistantDoctorQuery,
  useGetAssistantProfileQuery,
} = assistantApiSlice;
