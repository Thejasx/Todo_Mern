import { apiSlice } from "./apiSlice";

const todoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: "/api/todo",
      }),
      providesTags: ["Todo"],
    }),

    addTodos: builder.mutation({
      query: (data) => ({
        url: "/api/todo/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Todo"],
    }),

    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/api/todo/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],  
    }),
  }),
});

export const { useAddTodosMutation, useGetTodosQuery ,useDeleteTodoMutation} = todoApiSlice;
