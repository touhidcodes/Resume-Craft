import { baseApi } from "../../api/baseApi";

const resumeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createResume: builder.mutation({
      query: (templateId) => ({
        url: "/resume/create-resume",
        method: "POST",
        body: { templateId },
      }),
      invalidatesTags: ["Resume"],
    }),

    getResumeData: builder.query({
      query: (resumeId) => ({
        url: `/resume/resume/${resumeId}`,
        method: "GET",
      }),
      providesTags: ["Resume"],
    }),

    addExperience: builder.mutation({
      query: (data) => ({
        url: `/resume/work-experience/create-experience`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Resume"],
    }),

    addSkill: builder.mutation({
      query: (data) => ({
        url: `/skill/create-skill`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Resume"],
    }),

    addEducation: builder.mutation({
      query: (data) => ({
        url: "/resume/education/create-education",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Resume"],
    }),

    updatePersonalInfo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/resume/update-resume/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Resume"],
    }),

    updateProfileSummary: builder.mutation({
      query: ({ id, data }) => ({
        url: `/resume/update-resume/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Resume"],
    }),

    updateSkill: builder.mutation({
      query: ({ id, data }) => ({
        url: `/skill/update-skill/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Resume"],
    }),

    updateExperience: builder.mutation({
      query: ({ experienceId, data }) => ({
        url: `/resume/work-experience/update-experience/${experienceId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Resume"],
    }),

    updateEducation: builder.mutation({
      query: ({ id, data }) => ({
        url: `/resume/education/update-education/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Resume"],
    }),
  }),
});

export const {
  useCreateResumeMutation,
  useGetResumeDataQuery,
  useAddSkillMutation,
  useAddExperienceMutation,
  useAddEducationMutation,
  useUpdateExperienceMutation,
  useUpdateEducationMutation,
  useUpdateProfileSummaryMutation,
  useUpdateSkillMutation,
  useUpdatePersonalInfoMutation,
} = resumeApi;

export default resumeApi;
