import { baseApi } from "../../api/baseApi";

const user = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/user/all-profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserProfileQuery } = user;
