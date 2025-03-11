import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from './App.jsx'
import HomeClass from "./pages/Class.jsx";
import HomeFunc from "./pages/Function.jsx";

const person = {
  name: "Iman",
  gender: "Pria",
  umur: 30,
  isMarried: true,
  hobbies: ["Tidur", "Koding", "Nonton"],
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <HomeClass /> */}
    <HomeFunc
      name={person.name}
      gender={person.gender}
      umur={person.umur}
      isMarried={person.isMarried}
      hobbies={person.hobbies}
      komponen={HomeClass}
    />
  </StrictMode>
);
