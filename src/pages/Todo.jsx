import { useEffect, useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage.js";

import AddTodo from "../components/AddTodo.jsx";
import TodoList from "../components/TodoList.jsx";
import "../styles/todolist.css";

function Todo() {
  useEffect(() => {
    document.title = "Todo List";
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [todos, setTodos] = useState(() => {
  //   // const todos = JSON.parse(localStorage.getItem("fgo23:todos") || "[]");
  //   const todos = JSON.parse(localStorage["fgo23:todos"]);
  //   return todos;
  // });
  const [todos, setTodos] = useLocalStorage("fgo23:todos", []);
  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      <header className="flex justify-between py-[10px] px-[100px] bg-[lightblue]">
        <h1 className="text-2xl">TODO LIST</h1>
        <button
          className="flex p-0 border-solid border-black border-2 md:border-white"
          type="button"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <p className="h-full p-2.5 border-r border-r-black border-solid">+</p>
          <p className="h-full p-2.5">ADD</p>
        </button>
      </header>
      <TodoList todos={todos} />
      <AddTodo isModalOpen={isModalOpen} closeModal={closeModal} setTodos={setTodos} />
    </>
  );
}

export default Todo;
