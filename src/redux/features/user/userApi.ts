import { baseApi } from "../../api/baseApi";

const user = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllUsersQuery } = user;
