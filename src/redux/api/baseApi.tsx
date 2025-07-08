import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  tagTypes: ["task"],
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (build) => ({
    getTask: build.query({
      query: () => "/tasks",
      providesTags: ["task"],
    }),
    createTask: build.mutation({
      query: (taskData) => ({
        url: "/tasks",
        method: "POST",
        body: taskData,
      }),
      invalidatesTags: ["task"],
    }),
  }),
});

export const { useGetTaskQuery, useCreateTaskMutation } = baseApi;
