import { useState } from "react";
import { useParams } from "react-router";

function TodoDetail() {
  const { id } = useParams();
  console.log(id)
  const [todo, _] = useState(() => {
    const todos = JSON.parse(localStorage.getItem("fgo23:todos") || "[]");
    if (todos.length === 0) return { title: "", body: "" };
    return todos[id];
  });
  const printTodo = (key) => {
    if (todo instanceof Object) return Object.prototype.hasOwnProperty.call(todo, key) && todo[key];
    return null;
  };
  return (
    <section className="bg-[blanchedalmond] py-2.5 px-25 flex flex-col flex-1">
      <h1 className="text-[1.3rem]">{printTodo("title")}</h1>
      <p className="flex-1 pt-2.5 text-[0.8rem]">{printTodo("body")}</p>
    </section>
  );
}

export default TodoDetail;
