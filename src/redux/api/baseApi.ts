import { fetchBaseQuery } from "@reduxjs/toolkit/query";

import { createApi } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:5000/api",
  baseUrl: "https://resume-craft-api.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["Resume", "User", "Template", "CLTemplate",],
  endpoints: () => ({}),
});
