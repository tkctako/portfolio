import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const portfolioApi = createApi({
  reducerPath: 'portfolioApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://tkcworks-ace12-default-rtdb.firebaseio.com/' }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => 'projects.json',
    }),
  }),
});

export const { useGetProjectsQuery } = portfolioApi;