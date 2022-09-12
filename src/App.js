import "./styles.css";
import { useState, useRef } from "react";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const innerRef = useRef(null);

  const addTodo = () => {
    let newTodo = innerRef.current.value;
    setTodos([...todos, newTodo]);
    innerRef.current.value = "";
  };

  const deleteTodo = () => {
    setTodos([]);
  };

  const deleteLastTodo = () => {
    todos.pop()
    setTodos([...todos])
  }
  

  return (
    <div className="App">
      <h1>My Todo App</h1>
      <div className="buttons">
        <input type="text" placeholder="add a to-do.." ref={innerRef}></input>
        <button onClick={addTodo}>Add To Do </button>
        <button onClick={deleteTodo}>Delete All</button>
        <button onClick={deleteLastTodo}>Delete</button>
      </div>
      <TodoList todos={todos} />
    </div>
  );
}
