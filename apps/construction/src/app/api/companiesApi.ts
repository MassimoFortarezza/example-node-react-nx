import {
  CompanyListFilteredRequestDto,
  GetCompanyListFilteredResponse,
} from '@mf-cos/api-interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const companiesApi = createApi({
  reducerPath: 'companiesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4008/api/v1/',
    prepareHeaders: (headers, { getState }) => {
      headers.set(
        'app-key',
        '8c0a7008a27a26eccb2dbc95276e21a98a791a80b78ff6a129d834be95346b6a', // TODO move to env
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCompanyListFiltered: builder.query<
      GetCompanyListFilteredResponse,
      CompanyListFilteredRequestDto
    >({
      query: (params) => ({
        url: `companies?`,
        params,
      }),
      transformResponse: (response: any) => response?.results,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCompanyListFilteredQuery } = companiesApi;
