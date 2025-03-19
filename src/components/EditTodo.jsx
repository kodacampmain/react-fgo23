import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { userContext } from "../contexts/userContext";
import { editTodo } from "../redux/slices/todo";

function EditTodo({ isModalOpen, closeModal, selectedTodo }) {
  const { user } = useContext(userContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ ...selectedTodo.data });

  function inputChangeHandler(e) {
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    dispatch(
      editTodo({
        idx: parseInt(selectedTodo.idx),
        data: form,
      })
    );

    closeModal(() => navigate("/todo"));
  }

  return (
    <section className={`z-2 absolute inset-0 bg-black/70 ${isModalOpen ? "block" : "hidden"}`}>
      <div className="modal absolute top-1/2 left-1/2 -translate-1/2 h-3/5 w-3/5 bg-[blanchedalmond] rounded-1/20 p-2.5">
        {user.email && user.password ? (
          <TodoForm
            onSubmit={submitHandler}
            onCLoseModal={closeModal}
            selectedTodo={form}
            inputChangeHandler={inputChangeHandler}
          />
        ) : (
          <LoginFirst onCLoseModal={closeModal} />
        )}
      </div>
    </section>
  );
}

function TodoForm({ onSubmit, onCLoseModal, selectedTodo, inputChangeHandler }) {
  return (
    <>
      <form className="flex flex-col h-full gap-2" onSubmit={onSubmit}>
        <h2 className="text-center">Add New Todo List</h2>
        <label htmlFor="title">Title</label>
        <input
          className="autofill:inset-shadow-[0_0_0px_1000px] autofill:inset-shadow-white"
          type="text"
          name="title"
          id="title"
          value={selectedTodo.title}
          onChange={inputChangeHandler}
        />
        <label htmlFor="body">Body</label>
        <textarea
          className="resize-none flex-1"
          name="body"
          id="body"
          value={selectedTodo.body}
          onChange={inputChangeHandler}
        ></textarea>
        <button className="rounded-5 p-1.25" type="submit">
          SUBMIT
        </button>
      </form>
      <button
        type="button"
        className="absolute top-1.25 right-2.5 bg-none border-none text-[2rem]"
        onClick={onCLoseModal}
      >
        x
      </button>
    </>
  );
}

function LoginFirst({ onCLoseModal }) {
  return (
    <>
      <h2>Warning</h2>
      <p>Anda belum login, Silahkan login terlebih dahulu</p>
      <button
        type="button"
        className="absolute top-1.25 right-2.5 bg-none border-none text-[2rem]"
        onClick={onCLoseModal}
      >
        x
      </button>
    </>
  );
}

export default EditTodo;
