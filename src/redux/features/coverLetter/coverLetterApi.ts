import { baseApi } from "../../api/baseApi";

const coverLetterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCoverLetter: builder.query({
      query: (id) => ({
        url: `/cover-letter/${id}`,
        method: "GET",
      }),
    }),

    createCoverLetter: builder.mutation({
      query: (data) => ({
        url: "/cover-letter/create-cover-letter",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetCoverLetterQuery, useCreateCoverLetterMutation } =
  coverLetterApi;

export default coverLetterApi;
