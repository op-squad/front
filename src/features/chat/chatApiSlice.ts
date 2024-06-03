import { apiSlice } from "@/app/api/apiSlice";
/*
 * Any endpoint definitions defined using that builder will be merged into the existing * endpoint definitions for this API slice
 */
export const chatApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMessage: builder.query({
      query: ({ senderId, recipientId }) => {
        return {
          url: `/messages/${senderId}/${recipientId}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetMessageQuery } = chatApiSlice;
