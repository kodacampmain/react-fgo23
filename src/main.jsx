import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import "./styles/tailwind.css";

// import "./index.css";
// import App from './App.jsx'
import HomeClass from "./pages/Class.jsx";
import HomeFunc from "./pages/Function.jsx";
import Header from "./components/Header.jsx";
import Todo from "./pages/Todo";
import TodoDetail from "./pages/TodoDetail.jsx";

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
          <Route path=":id" element={<TodoDetail />} />
        </Route>
      </Route>
      <Route path="*" element={<RouteError />} />
    </Routes>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
);

// export function movieRouter() {
//   /**
//    * /                landing page
//    * /auth            login
//    * /auth/new        register
//    * /movie           movie list
//    * /movie/:id       movie detail
//    */
//   return (
//     <Routes>
//       <Route index element={<Layout />}>
//         <Route index element={<LandingPage />} />
//         <Route path="movie">
//           <Route index element={<Movies />} />
//           <Route path=":id" element={<LandingPage />} />
//         </Route>
//       </Route>
//       <Route path="auth" element={<Auth />}>
//         <Route index element={<Login />} />
//         <Route path="new" element={<Register />} />
//       </Route>
//       {/* <Route element={<Auth />}>
//         <Route path="auth">
//           <Route index element={<Login />} />
//           <Route path="new" element={<Register />} />
//         </Route>
//       </Route> */}
//     </Routes>
//   );
// }
