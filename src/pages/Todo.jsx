import { useState } from "react";

import AddTodo from "../components/AddTodo.jsx";
import TodoList from "../components/TodoList.jsx";
import "../styles/todolist.css";

function Todo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todos, setTodos] = useState(() => {
    const todos = JSON.parse(localStorage.getItem("fgo23:todos") || "[]");
    return todos;
  });
  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      <header>
        <h1>TODO LIST</h1>
        <button
          type="button"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <p>+</p>
          <p>ADD</p>
        </button>
      </header>
      <TodoList todos={todos} />
      <AddTodo isModalOpen={isModalOpen} closeModal={closeModal} setTodos={setTodos} />
    </>
  );
}

export default Todo;
