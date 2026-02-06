import express from "express";
import { createTodos, deleteTodo, getTodos,getTodoById,updateTodo } from "../Controllers/todoControl.js";

const todoRoutes = express.Router()

// Get all todos
todoRoutes.get("/" , getTodos )

// Create a new todo
todoRoutes.post("/create", createTodos)


// delete a todo
todoRoutes.delete("/:id", deleteTodo )


// get by id
todoRoutes.get('/getTodoById',getTodoById)


// todo update

todoRoutes.patch('/updateTodo',updateTodo)


// Exporting the router
export default todoRoutes 