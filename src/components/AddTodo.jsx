import "./css/AddTodo.css"
import { useState, useEffect, useRef } from "react"

const AddTodo = () => {
    const [todo, setTodo] = useState("")
    const [previousTodos, setpreviousTodos] = useState([])

    // Create a ref to the input element
    const reference = useRef()

    // Function to retrieve todos from localStorage
    function getTodo() {
        let all_todos = localStorage.getItem("all_todos");
        if (all_todos) {
            const todosArray = all_todos.split(",")
            setpreviousTodos(JSON.parse(todosArray))
        }
    }

    // useEffect hook to call getTodo() on component mount
    useEffect(() => {
        getTodo()
    }, [])

    // useEffect hook to log previousTodos whenever it changes
    useEffect(() => {
        console.log(previousTodos)
    }, [previousTodos])

    // Handle click event when adding a new todo
    const handleClick = () => {
        if (todo.trim() !== "") {
            // Create a new array with the current todos and the new todo
            const todos = [...previousTodos, todo]
            localStorage.setItem("all_todos", JSON.stringify(todos))
            setpreviousTodos(todos)
            setTodo("")
            reference.current.value = ""
        }
    }

    // Handle input change event
    const handleChange = (event) => {
        setTodo(event.target.value)
    }

    return (
        <>
            <div className="main">
                <input type="text" id="" onChange={handleChange} ref={reference} />
                <button className="btn" onClick={handleClick}>Add Todo</button>
            </div>
        </>
    )
}

export default AddTodo
