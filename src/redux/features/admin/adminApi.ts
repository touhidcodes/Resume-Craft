import { baseApi } from "../../api/baseApi";

const admin = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTemplates: builder.query({
      query: () => ({
        url: "/template/templates",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllTemplatesQuery } = admin;
