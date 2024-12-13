import { baseApi } from "../../api/baseApi";

const user = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/user/all-profile",
        method: "GET",
      }),
    }),
    updateUser: builder.mutation({
      query: (userInfo) => {
        // console.log(userInfo);
        return {
          url: "/user/profile",
          method: "PUT",
          body: userInfo,
        };
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserProfileQuery,
  useUpdateUserMutation,
} = user;
