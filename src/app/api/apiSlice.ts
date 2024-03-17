import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import {
  SetCredentialsPayload,
  logOut,
  setCredentials,
} from "../../features/auth/authSlice";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object,
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === import.meta.env.ERROR_STATUS) {
    console.log("Sending refresh token");
    // Send refresh token to get a new access token
    const refreshResult = await baseQuery(
      "/refresh_endpoint(Changeable)",
      api,
      extraOptions,
    );
    console.log(refreshResult);

    if (refreshResult?.data) {
      const user = (api.getState() as RootState).auth.user;
      // Store the new token
      if (user) {
        const credentials: SetCredentialsPayload = {
          user: user,
          token: refreshResult.data + "",
        };
        api.dispatch(setCredentials(credentials));
      }
      // Retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
