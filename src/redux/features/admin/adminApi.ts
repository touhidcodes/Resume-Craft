import { baseApi } from "../../api/baseApi";

const admin = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTemplates: builder.query({
      query: () => ({
        url: "/template/templates",
        method: "GET",
      }),
    }),
    getAllAnalytics: builder.query({
      query: () => ({
        url: "/analytics/admin-dashboard-data",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllTemplatesQuery, useGetAllAnalyticsQuery } = admin;
