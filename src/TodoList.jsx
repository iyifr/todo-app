import React from "react";
import "./styles.css";

export default function Todolist({ todos }) {
  return todos.map((todo) => {
    return (
      <div>
        <label>
          <h1 key={todo}>{todo}</h1>
          <input type="checkbox"></input>
        </label>
      </div>
    );
  });
}
