import { apiSlice } from "@/app/api/apiSlice";

/*
 * Any endpoint definitions defined using that builder will be merged into the existing * endpoint definitions for this API slice
 */
export const statApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStatVisitsByDate: builder.query({
      query: () => {
        return {
          url: "/statistics/visits-by-date",
        };
      },
    }),
    getStatTotalPatientCount: builder.query({
      query: () => {
        return {
          url: "/statistics/total-patient-count",
        };
      },
    }),

    getStatVisitsByMonth: builder.query({
      query: () => {
        return {
          url: "/statistics/visits-by-month",
        };
      },
    }),

    getStatCountAppointment: builder.query({
      query: () => {
        return {
          url: "/statistics/count-appointment",
        };
      },
    }),
  }),
});

export const {
  useGetStatCountAppointmentQuery,
  useGetStatTotalPatientCountQuery,
  useGetStatVisitsByDateQuery,
} = statApiSlice;
