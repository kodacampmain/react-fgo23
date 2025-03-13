import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import Router from "./router.jsx";
import "./styles/tailwind.css";

// import "./index.css";
// import App from './App.jsx'

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
