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
    getTodoById: builder.query({
      query: (id) => ({
        url: "/api/todo/getTodoById",
        params: { id },
      }),
      providesTags: ["Todo"],
    }),
    updateTodo: builder.mutation({
      query: (data) => ({
        url: "/api/todo/updateTodo",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const { useAddTodosMutation, useGetTodosQuery, useDeleteTodoMutation, useGetTodoByIdQuery, useUpdateTodoMutation } = todoApiSlice;
