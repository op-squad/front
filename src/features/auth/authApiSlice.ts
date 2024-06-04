import { apiSlice } from "@/app/api/apiSlice";

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
        };
      },
    }),
    doctorRegister: builder.mutation({
      query: (body: { username: string; password: string; email: string }) => {
        return {
          url: "/doctor/register",
          method: "POST",
          body,
        };
      },
    }),
    assistantRegister: builder.mutation({
      query: (body: { username: string; password: string; email: string }) => {
        return {
          url: "/assistant/register",
          method: "POST",
          body,
        };
      },
    }),

    verify: builder.mutation({
      query: (body: { code: string }) => {
        return {
          url: `/verify?code=${body.code}`,
          method: "POST",
        };
      },
    }),

    pwdForgot: builder.mutation({
      query: (body: { email: string }) => {
        return {
          url: "/password/forgot",
          method: "POST",
          body,
        };
      },
    }),

    pwdReset: builder.mutation({
      query: (body: { passwordResetToken: string; password: string }) => {
        return {
          url: "/password/reset",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useAssistantRegisterMutation,
  useDoctorRegisterMutation,
  useVerifyMutation,
  usePwdForgotMutation,
  usePwdResetMutation,
} = authApiSlice;
