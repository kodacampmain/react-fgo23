import { Routes, Route, Outlet } from "react-router";
import HomeClass from "./pages/Class.jsx";
import HomeFunc from "./pages/Function.jsx";
import Header from "./components/Header.jsx";
import Todo from "./pages/Todo";
import TodoDetail from "./pages/TodoDetail.jsx";
import Login from "./pages/Login.jsx";
import useLocalStorage from "./hooks/useLocalStorage";

const person = {
  name: "Iman",
  gender: "Pria",
  umur: 30,
  isMarried: true,
  hobbies: ["Tidur", "Koding", "Nonton"],
};

function Layout({ user, setUser }) {
  return (
    <>
      <Header user={user} setUser={setUser} />
      <Outlet
        context={{
          user,
          setUser,
        }}
      />
    </>
  );
}

function RouteError() {
  return <h1>Route Error</h1>;
}

function Router() {
  const { name, gender, umur, isMarried, hobbies } = person;
  const [user, setUser] = useLocalStorage("fgo23:user", {
    email: "",
    password: "",
  });
  return (
    <Routes>
      <Route element={<Layout user={user} setUser={setUser} />}>
        <Route
          index
          element={
            <HomeFunc
              name={name}
              gender={gender}
              umur={umur}
              isMarried={isMarried}
              hobbies={hobbies}
              komponen={HomeClass}
            />
          }
        />
        <Route path="todo">
          <Route index element={<Todo />} />
          <Route path=":id" element={<TodoDetail />} />
        </Route>
        <Route path="auth">
          <Route index element={<Login />}></Route>
        </Route>
      </Route>
      <Route path="*" element={<RouteError />} />
    </Routes>
  );
}

export default Router;
