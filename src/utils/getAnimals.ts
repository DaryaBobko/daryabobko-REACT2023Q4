import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AnimalSearchResult } from '../models/Form';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://stapi.co/api/v1/rest/' }),
  endpoints: (builder) => ({
    getAnimals: builder.query<
      AnimalSearchResult,
      { pageNumber: number; pageSize: number }
    >({
      query: ({ pageNumber, pageSize }) =>
        `animal/search?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    }),
  }),
});

export const { useGetAnimalsQuery } = api;

export const { endpoints } = api;
