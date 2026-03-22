import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddTodosMutation,
  useGetTodosQuery,
  useDeleteTodoMutation,
} from "../slices/todoApiSlice";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import "./TodoApp.css";

import { toast } from "react-toastify";

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  let [title, setTitle] = useState("");
  let [discription, setDiscription] = useState("");

  const { data: todos } = useGetTodosQuery();
  const [addTodo] = useAddTodosMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  const addTodoHandler = async (e) => {
    e.preventDefault();
    try {
      await addTodo({ title, discription }).unwrap();
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
      await deleteTodo(id).unwrap();
      toast.success("deleted");
    } catch (error) {
      console.error(error);
      toast.error(error?.data?.message || error.error || "Unknown error");
    }
  };

  return (
    <>
      <header className="header">
        <h2>Welcome, {userInfo?.name}</h2>
        <button className="logout-btn" onClick={logoutHandler}>
          Logout
        </button>
      </header>

      <div className="todos-list">
        {todos?.map((todo) => (
          <div key={todo._id} className="todo-item">
            <h3 className="todo-title">{todo.title}</h3>
            <p className="todo-description">{todo.discription}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                className="delete-btn"
                onClick={() => DeleteTodoHandler(todo._id)}
              >
                Delete
              </button>
              <button
                onClick={() => navigate(`/edit/${todo._id}`)}
                className="edit-btn"
              >
                Edit
              </button>
            </div>
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
          <button type="submit" className="submit-btn">
            Add Todo
          </button>
        </form>
      </div>
    </>
  );
}

export default HomePage;
