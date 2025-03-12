function AddTodo({ isModalOpen, closeModal, setTodos }) {
  function submitHandler(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    setTodos((todos) => {
      const newTodos = [...todos];
      newTodos.push({
        title,
        body,
      });
      localStorage.setItem("fgo23:todos", JSON.stringify(newTodos));
      return newTodos;
    });
    e.target.title.value = "";
    e.target.body.value = "";
    closeModal();
  }
  return (
    <section className="modal-wrapper" style={{ display: `${isModalOpen ? "block" : "none"}` }}>
      <div className="modal">
        <form onSubmit={submitHandler}>
          <h2>Add New Todo List</h2>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body"></textarea>
          <button type="submit">SUBMIT</button>
        </form>
        <button type="button" className="close" onClick={closeModal}>
          x
        </button>
      </div>
    </section>
  );
}

export default AddTodo;
