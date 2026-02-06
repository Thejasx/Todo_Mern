import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetTodoByIdQuery,
  useUpdateTodoMutation,
} from "../slices/todoApiSlice";
import { toast } from "react-toastify";

function EditPage() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const { data: todo, isLoading, refetch } = useGetTodoByIdQuery(id);

  const [updateTodo] = useUpdateTodoMutation();

  const editTodoHandler = async (e) => {
    e.preventDefault();
    try {
      await updateTodo({
        id,
        title,
        discription,
        iscompleted: isCompleted,
      }).unwrap();
      refetch();
      toast.success("todo updated");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error?.data?.message || error.error || "Unknown error");
    }
  };

  useEffect(() => {
    if (todo) {
      setTitle(todo.title || "");
      setDiscription(todo.discription || "");
      setIsCompleted(todo.iscompleted || false);
    }
  }, [todo]);

  if (isLoading) return <div>Loading...</div>;
  if (!todo) return <div>Todo not found</div>;

  return (
    <form className="todo-form" onSubmit={editTodoHandler}>
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
      <select
        value={isCompleted.toString()}
        onChange={(e) => setIsCompleted(e.target.value === "true")}
      >
        <option value="false">pending</option>
        <option value="true">completed</option>
      </select>
      <button type="submit" disabled={isLoading}>
        Update
      </button>
    </form>
  );
}

export default EditPage;
