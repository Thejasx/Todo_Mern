import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddTodosMutation, useGetTodosQuery, useDeleteTodoMutation } from "../slices/todoApiSlice";
import './TodoApp.css'

import { toast } from "react-toastify";

function HomePage() {
  const navigate = useNavigate();

  let [title, setTitle] = useState("");
  let [discription, setDiscription] = useState("");

  const { data: todos } = useGetTodosQuery();
  const [addTodo] = useAddTodosMutation();
  const [deleteTodo] = useDeleteTodoMutation();


  const addTodoHandler = async (e) => {
    e.preventDefault();
    try {
      let res = await addTodo({ title, discription }).unwrap();
      toast.success("todo added");
      setTitle("");
      setDiscription("");
    } catch (error) {
      console.error(error);
      toast.error(error?.data?.message || error.error || "Unknown error");
    }
  };


  const DeleteTodoHandler = async (id) => {
    try {
      let res = await deleteTodo(id).unwrap()
      toast.success("deleted")

    } catch (error) {
      console.error(error);
      toast.error(error?.data?.message || error.error || "Unknown error");

    }
  }

  console.log(todos);

  return (
    <>
    <div className="todos-list">
  {todos?.map((todo) => (
    <div key={todo._id} className="todo-item">  {/* Use _id as key */}
      <h3 className="todo-title">{todo.title}</h3>
      <p className="todo-description">{todo.discription}</p>  {/* Fixed typo */}
      <button 
        className="delete-btn"
        onClick={() => DeleteTodoHandler(todo._id)}
      >
        Delete
      </button>
    </div>
  ))}
</div>

<div className="form-container">
  <form onSubmit={addTodoHandler} className="todo-form">
    <input 
      className="form-input title-input"
      type="text"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <textarea 
      className="form-textarea"
      placeholder="Description"
      value={discription} 
      onChange={(e) => setDiscription(e.target.value)}  
    />
    <button type="submit" className="submit-btn">Add Todo</button>
  </form>
</div>


    </>
  );
}

export default HomePage;


