import { baseApi } from "../../api/baseApi";

const templateApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTemplates: builder.query({
      query: () => ({
        url: "/template/templates",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllTemplatesQuery } = templateApi;
