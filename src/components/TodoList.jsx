import { Link } from "react-router";

function TodoList({ todos }) {
  return (
    <section className="todolist">
      {todos.length > 0 &&
        todos.map((todo, idx) => {
          return (
            <Link key={idx} to={`../todo/${idx}`}>
              <div className="card">
                <div className="title">
                  <p>{todo.title}</p>
                </div>
                <div className="body">
                  <p>{todo.body}</p>
                </div>
              </div>
            </Link>
          );
        })}
    </section>
  );
}

export default TodoList;
