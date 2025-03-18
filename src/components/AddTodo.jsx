// import { useState } from "react";
// import { useRef } from "react";

function AddTodo({ isModalOpen, closeModal, setTodos }) {
  // const [form, setForm] = useState({
  //   title: "",
  //   body: "",
  // });
  // function inputChangeHandler(e) {
  //   const newForm = {
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   };
  //   setForm(newForm);
  // }

  function submitHandlerWithUncontrolledInput(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    setTodos((todos) => {
      const newTodos = [...todos];
      newTodos.push({
        title,
        body,
      });
      // localStorage.setItem("fgo23:todos", JSON.stringify(newTodos));
      // localStorage["fgo23:todos"] = JSON.stringify(newTodos);
      return newTodos;
    });
    e.target.title.value = "";
    e.target.body.value = "";
    closeModal();
  }

  // function submitHandlerWithControlledInput(e) {
  //   e.preventDefault();
  //   const { title, body } = form;
  //   setTodos((todos) => {
  //     const newTodos = [...todos];
  //     newTodos.push({
  //       title,
  //       body,
  //     });
  //     localStorage.setItem("fgo23:todos", JSON.stringify(newTodos));
  //     return newTodos;
  //   });
  //   setForm({ title: "", body: "" });
  //   closeModal();
  // }

  // const titleRef = useRef();
  // const bodyRef = useRef();

  // function submitHandlerWithRef(e) {
  //   e.preventDefault();
  //   const title = titleRef.current.value;
  //   const body = bodyRef.current.value;
  //   setTodos((todos) => {
  //     const newTodos = [...todos];
  //     newTodos.push({
  //       title,
  //       body,
  //     });
  //     localStorage.setItem("fgo23:todos", JSON.stringify(newTodos));
  //     return newTodos;
  //   });
  //   titleRef.current.value = "";
  //   bodyRef.current.value = "";
  //   closeModal();
  // }

  return (
    <section className={`z-2 absolute inset-0 bg-black/70 ${isModalOpen ? "block" : "hidden"}`}>
      <div className="modal absolute top-1/2 left-1/2 -translate-1/2 h-3/5 w-3/5 bg-[blanchedalmond] rounded-1/20 p-2.5">
        <form className="flex flex-col h-full gap-2" onSubmit={submitHandlerWithUncontrolledInput}>
          <h2 className="text-center">Add New Todo List</h2>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            // value={form.title} onChange={inputChangeHandler}
            // ref={titleRef}
            className="autofill:inset-shadow-[0_0_0px_1000px] autofill:inset-shadow-white"
          />
          <label htmlFor="body">Body</label>
          <textarea
            className="resize-none flex-1"
            name="body"
            id="body"
            // value={form.body}
            // onChange={inputChangeHandler}
            // ref={bodyRef}
          ></textarea>
          <button className="rounded-5 p-1.25" type="submit">
            SUBMIT
          </button>
        </form>
        <button
          type="button"
          className="absolute top-1.25 right-2.5 bg-none border-none text-[2rem]"
          onClick={closeModal}
        >
          x
        </button>
      </div>
    </section>
  );
}

export default AddTodo;
