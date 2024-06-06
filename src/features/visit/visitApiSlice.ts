import { apiSlice } from "@/app/api/apiSlice";

interface VisitInfo {
  patientID: number;
  doctorName: string;
  diagnosis: string;
  visitDate: string;
}

interface PaginationParams {
  page: number;
  size: number;
  sort: string[]; // Assuming sort is an array of strings
}

/*
 * Any endpoint definitions defined using that builder will be merged into the existing * endpoint definitions for this API slice
 */
export const visitApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVisit: builder.query({
      query: (id: number) => {
        return {
          url: `/visit?id=${id}`,
        };
      },
    }),
    getVisits: builder.query({
      query: () => {
        return {
          url: `/visits/no-pagination`,
        };
      },
    }),
    getVisitsByDate: builder.query({
      query: (body: { date: string; page: number; size: number }) => {
        return {
          url: `/visits/day?date=${body.date}&page=${body.page}&size=${body.size}`,
        };
      },
    }),
    createVisit: builder.mutation({
      query: (body: {
        patientUsername: string;
        doctorName: string;
        diagnosis: string;
        visitDate: string;
      }) => {
        return {
          url: "/visit/doctor",
          method: "POST",
          body,
        };
      },
    }),
    patchVisit: builder.mutation({
      query: (id: number) => {
        return {
          url: `/visit?id=${id}`,
          method: "PATCH",
          // body,
        };
      },
    }),
    deleteVisit: builder.mutation({
      query: () => {
        return {
          url: "/visit",
          method: "DELETE",
        };
      },
    }),

    getVisitDone: builder.query({
      query: () => {
        return {
          url: "/visit/done",
        };
      },
    }),
    getVisitCount: builder.query({
      query: () => {
        return {
          url: "/visit/count",
        };
      },
    }),
    getVisitClosest: builder.query({
      query: (id: number) => {
        return {
          url: `/visit/closest?id=${id}`,
        };
      },
    }),
  }),
});

export const {
  useGetVisitQuery,
  useGetVisitsQuery,
  useGetVisitsByDateQuery,
  useCreateVisitMutation,
  usePatchVisitMutation,
  useDeleteVisitMutation,
  // useGetVisitsQuery,
  useGetVisitDoneQuery,
  useGetVisitCountQuery,
  useGetVisitClosestQuery,
} = visitApiSlice;
