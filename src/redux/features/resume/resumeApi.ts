import { baseApi } from "../../api/baseApi";

const resumeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createResume: builder.mutation({
      query: (templateId) => ({
        url: "/resume/create-resume",
        method: "POST",
        body: { templateId },
      }),
    }),
    getResumeData: builder.query({
      query: (resumeId) => ({
        url: `/resume/resume/${resumeId}`,
        method: "GET",
      }),
      providesTags: ["Resume"],
    }),

    updateExperience: builder.mutation({
      query: ({ experienceId, data }) => ({
        url: `/resume/work-experience/update-experience/${experienceId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Resume"],
    }),
    CreateExperience: builder.mutation({
      query: (data) => ({
        url: `/resume/work-experience/create-experience`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Resume"],
    }),
  }),
});

export const {
  useCreateResumeMutation,
  useGetResumeDataQuery,
  useUpdateExperienceMutation,
  useCreateExperienceMutation,
} = resumeApi;

export default resumeApi;
