import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import EditTodo from "../components/EditTodo";
import { deleteTodo } from "../redux/slices/todo";

function TodoDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todo);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = (cb) => {
    setIsModalOpen(false);
    if (cb instanceof Function) cb();
  };
  const printTodo = (key) => {
    if (todos[id] instanceof Object) return Object.prototype.hasOwnProperty.call(todos[id], key) && todos[id][key];
    return null;
  };
  const delTodo = () => {
    dispatch(
      deleteTodo({
        idx: id,
      })
    );
    navigate("/todo");
  };
  return (
    <section className="bg-[blanchedalmond] py-2.5 px-25 flex flex-col flex-1">
      <div className="flex justify-between">
        <h1 className="text-[1.3rem]">{printTodo("title")}</h1>
        <img onClick={delTodo} className="cursor-pointer" src="/imgs/icons8-trash.svg" alt="trash-icon" />
      </div>
      <p className="flex-1 pt-2.5 text-[0.8rem]">{printTodo("body")}</p>
      <button type="button" onClick={() => setIsModalOpen(true)}>
        Edit
      </button>
      <EditTodo
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        selectedTodo={{
          idx: id,
          data: todos[id],
        }}
      />
    </section>
  );
}

export default TodoDetail;
