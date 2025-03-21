import { Routes, Route, Outlet } from "react-router";
import HomeClass from "./pages/Class.jsx";
import HomeFunc from "./pages/Function.jsx";
import Header from "./components/Header.jsx";
import Todo from "./pages/Todo";
import TodoDetail from "./pages/TodoDetail.jsx";
import Login from "./pages/Login.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

const person = {
  name: "Iman",
  gender: "Pria",
  umur: 30,
  isMarried: true,
  hobbies: ["Tidur", "Koding", "Nonton"],
};

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function RouteError() {
  return <h1>Route Error</h1>;
}

function Router() {
  const { name, gender, umur, isMarried, hobbies } = person;
  return (
    <Routes>
      <Route element={<Layout />}>
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
          <Route
            path=":id"
            element={
              <PrivateRoute redirectTo="/auth">
                <TodoDetail />
              </PrivateRoute>
            }
          />
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
