import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AnimalSearchResult } from '../models/AnimalSearchResult';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://stapi.co/api/v1/rest/' }),
  endpoints: (builder) => ({
    getAnimals: builder.query<
      AnimalSearchResult,
      { pageNumber: number; pageSize: number; searchValue: string }
    >({
      query: ({ pageNumber, pageSize, searchValue }) =>
        `animal/search?pageNumber=${pageNumber}&pageSize=${pageSize}&searchValue=${searchValue}`,
    }),
  }),
});

export const { useGetAnimalsQuery } = api;
