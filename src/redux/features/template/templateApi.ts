import { baseApi } from "../../api/baseApi";

const templateApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTemplates: builder.query({
      query: () => ({
        url: "/template/templates",
        method: "GET",
      }),
      providesTags: ["Template"],
    }),
    createTemplates: builder.mutation({
      query: (templateData) => {
        // console.log(templateData);
        return {
          url: "/template/create-template",
          method: "POST",
          body: templateData,
        };
      },
      invalidatesTags: ["Template"],
    }),

    deleteTemplate: builder.mutation({
      query: (id) => ({
        url: `/template/remove-template/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Template"],
    }),
  }),
});

export const {
  useGetAllTemplatesQuery,
  useCreateTemplatesMutation,
  useDeleteTemplateMutation,
} = templateApi;
