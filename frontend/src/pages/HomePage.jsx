import React, { useState, useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";
import BackendInstance from "../axios";
import { toast } from "react-toastify";

function HomePage() {
   const navigate = useNavigate();

  let [title, setTitle] = useState("");
  let [discription, setDiscription] = useState("");

  let [todos, setTodos] = useState([]);

  const getTodo = async () => {
    try {
      let res = await BackendInstance.get();
       setTodos(res.data);
       console.log(res.data)
    } catch (error) {
      console.error(error ?.message || error?.data?.message);
      toast.error(error ?.message || error?.data?.message)
    }
  };

  

  const addTodoHandler = async (e) => {
  e.preventDefault()
    try{
      await BackendInstance.post("/create",{title,discription});
      toast.success("todo added")
      getTodo()
      setTitle("")
      setDiscription("")
    } catch (error) {
      console.error(error ? error.message : "Unknown error");
      toast.error(error ? error.message : "Unknown error")
    }
  };

  useEffect(() => {
    getTodo()
    
  }, []);

  console.log(todos);

  return (
    <>
      <div>
        {
        todos?.map((todo,index) => (
          
          <div key={index}>
            <h1>{todo.title}</h1>
            <p>{todo.discription}</p>
            </div>
          
        )
          
        )}
        


      </div>

      <div>
        <form onSubmit={addTodoHandler}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="description"
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}
          ></textarea>

          <button>submit</button>
        </form>
      </div>
    </>
  );
 }

export default HomePage;
