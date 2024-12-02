import { baseApi } from "./baseApi";

const user = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/user/all-profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllUsersQuery } = user;
