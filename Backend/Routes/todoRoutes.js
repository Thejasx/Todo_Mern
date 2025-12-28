import express from "express";
import { createTodos, deleteTodo, getTodos } from "../Controllers/todoControl.js";

const todoRoutes = express.Router()

// Get all todos
todoRoutes.get("/" , getTodos )

// Create a new todo
todoRoutes.post("/create", createTodos)


// delete a todo
todoRoutes.delete("/:id", deleteTodo )


// Exporting the router
export default todoRoutes 