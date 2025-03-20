import { Link } from "react-router";

function TodoList({ todos }) {
  return (
    <section className="bg-[blanchedalmond] flex-1 grid grid-cols-(--grid-template-column) auto-rows-(--grid-auto-rows) py-2.5 px-25 gap-1.25">
      {todos.length > 0 &&
        todos.map((todo, idx) => {
          return (
            <Link key={idx} to={`${idx}`}>
              {/* /todo/:id */}
              <div className="border-2 border-black p-2.5 flex flex-col transition-all duration-300 cursor-pointer h-full hover:shadow-md hover:shadow-black">
                <div className="text-[1.3rem] border-b-1 border-b-black pb-2.5 h-8.5">
                  <p className="overflow-hidden overflow-ellipsis whitespace-nowrap">{todo.title}</p>
                </div>
                <div className="pt-2.5 flex-1 text-[0.8rem] overflow-hidden">
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
