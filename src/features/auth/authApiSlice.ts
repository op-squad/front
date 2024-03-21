import { apiSlice } from "../../app/api/apiSlice";

/*
 * Any endpoint definitions defined using that builder will be merged into the existing * endpoint definitions for this API slice
 */
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: { username: string; password: string; email: string }) => {
        return {
          url: "/login",
          method: "POST",
          body,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
