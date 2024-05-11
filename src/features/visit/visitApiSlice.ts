import { apiSlice } from "@/app/api/apiSlice";

interface VisitInfo {
  assistantName: string;
  doctorName: string;
  isVisited: boolean; // Assuming gender can be one of these options
  diagnosis: string;
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
    createVisit: builder.mutation({
      query: (body: VisitInfo) => {
        return {
          url: "/visit",
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

    getVisits: builder.query({
      query: (body: PaginationParams) => {
        return {
          url: "/visits",
          body,
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
      query: () => {
        return {
          url: "/visit/closest",
        };
      },
    }),
  }),
});

export const {
  useGetVisitQuery,
  useCreateVisitMutation,
  usePatchVisitMutation,
  useDeleteVisitMutation,
  useGetVisitsQuery,
  useGetVisitDoneQuery,
  useGetVisitCountQuery,
  useGetVisitClosestQuery,
} = visitApiSlice;
