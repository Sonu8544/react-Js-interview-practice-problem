import React, { useState } from "react";
import './Todo.css'

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodo([...todo, input]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    const updateTodo = todo.filter((_, i) => i != index);
    setTodo(updateTodo);
  };

  return (
    <>
    <div className="container">
      <h1>Todo List</h1>
      <input
      className="todoInput"
        type="text"
        placeholder="Todos"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn" onClick={addTodo}>Add Todo</button>

      <ul className="todosList">
        {todo.map((item, index) => (
          <li className="flex" key={index}>
            <p>{item}</p>
            <button className="btnRemove" onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default TodoList;
