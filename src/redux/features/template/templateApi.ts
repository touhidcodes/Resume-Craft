import { baseApi } from "../../api/baseApi";

const templateApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTemplates: builder.query({
      query: () => ({
        url: "/template/templates",
        method: "GET",
      }),
    }),
    createTemplates: builder.mutation({
      query: (templateData) => {
        console.log(templateData);
        return {
          url: "/template/create-template",
          method: "POST",
          body: templateData,
        };
      },
    }),
  }),
});

export const { useGetAllTemplatesQuery, useCreateTemplatesMutation } =
  templateApi;
