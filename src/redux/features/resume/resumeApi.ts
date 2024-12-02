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
    }),

    updateExperience: builder.mutation({
      query: ({ experienceId, data }) => ({
        url: `/resume/work-experience/update-experience/${experienceId}`,
        method: "PATCH",
        body: data,
      }),
    }),

    updateEducation: builder.mutation({
      query: ({ id, data }) => ({
        url: `/resume/education/update-education/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),

    updatePersonalInfo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/resume/update-resume/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateResumeMutation,
  useGetResumeDataQuery,
  useUpdateExperienceMutation,
  useUpdateEducationMutation,
  useUpdatePersonalInfoMutation,
} = resumeApi;

export default resumeApi;
