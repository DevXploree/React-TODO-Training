import { useEffect, useState } from "react";
import "./css/TodoDisplay.css"

const TodoDisplay = () => {
  // State to store the todos
  const [todos, setTodos] = useState([])

  // Function to retrieve todos from localStorage
  function getTodo() {
    let all_todos = localStorage.getItem("all_todos");
    if(all_todos){
        const todosArray = all_todos.split(",")
        setTodos(JSON.parse(todosArray))
    }
  }

  // useEffect hook to call getTodo() on component mount or whenever the "todos" state changes
  useEffect(()=>{
    getTodo()
  },[todos])

  return (
    <div>
      <div className="box">
        <ol>
          {
            // Map through the "todos" array and render each todo as a list item
            todos.map((singleTodo, index)=>(
              <li key={index}>{singleTodo}</li>
            ))
          }
        </ol>
      </div>
    </div>
  )
}

export default TodoDisplay
