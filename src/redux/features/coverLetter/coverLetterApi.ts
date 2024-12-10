import { baseApi } from "../../api/baseApi";

const coverLetterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCoverLetter: builder.query({
      query: (id) => ({
        url: `/cover-letter/${id}`,
        method: "GET",
      }),
      providesTags: ["CLTemplate"],
    }),

    createCoverLetter: builder.mutation({
      query: (data) => ({
        url: "/cover-letter/create-cover-letter",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["CLTemplate"],
    }),
    UpadateCoverLetter: builder.mutation({
      query: ({ id, data }) => ({
        url: `/cover-letter/update-cover-letter/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["CLTemplate"],
    }),

    getUserCoverLetters: builder.query({
      query: () => ({
        url: `/cover-letter/cover-letters`,
        method: "GET",
      }),
      providesTags: ["CLTemplate"],
    }),

    deleteUserCoverLetters: builder.mutation({
      query: (id) => ({
        url: `/cover-letter/delete-cover-letter/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CLTemplate"],
    }),
  }),
});

export const {
  useGetCoverLetterQuery,
  useCreateCoverLetterMutation,
  useUpadateCoverLetterMutation,
  useGetUserCoverLettersQuery,
  useDeleteUserCoverLettersMutation,
} = coverLetterApi;

export default coverLetterApi;
