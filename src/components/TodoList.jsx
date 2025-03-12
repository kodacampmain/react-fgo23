function TodoList({ todos }) {
  return (
    <section className="todolist">
      {todos.length > 0 &&
        todos.map((todo, idx) => {
          return (
            <div key={idx} className="card">
              <div className="title">
                <p>{todo.title}</p>
              </div>
              <div className="body">
                <p>{todo.body}</p>
              </div>
            </div>
          );
        })}
    </section>
  );
}

export default TodoList;
