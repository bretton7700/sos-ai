import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cloneApi = createApi({
  reducerPath: 'cloneApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://172.21.200.39:7070',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createClone: builder.mutation({
      query: (prompt) => ({
        url: '/clone',
        method: 'POST',
        body: {
          prompt,
          llm: 'chatgpt',
          voice: 'george',
          clear_thread: false,
        },
      }),
    }),
  }),
});

export const { useCreateCloneMutation } = cloneApi;
