import { apiSlice } from "../../app/api/apiSlice";

interface credentialsProps {
  // For now only those, might change
  email: string;
  password: string;
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: credentialsProps) => ({
        url: "/login(Changeable)",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
