import { useNavigate } from "react-router";
import { useEffect, useContext } from "react";

import InputWithLabel from "../components/InputWithLabel";
import { userContext } from "../contexts/userContext";
// import useLocalStorage from "../hooks/useLocalStorage";

function Login() {
  const { user, setUser } = useContext(userContext);
  // console.log(userCtx);
  const navigate = useNavigate();
  //   const [user, setUser] = useLocalStorage("fgo23:user", {
  //     email: "",
  //     password: "",
  //   });

  useEffect(() => {
    // IIFE => Immediately Invoked Function Expression
    (function () {
      if (user.email && user.password) navigate("/todo");
    })();
  }, [user]);

  function submitHandler(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("email", e.target.email.value);
    form.append("password", e.target.pwd.value);
    const submittedUser = {};
    form.forEach((value, key) => {
      Object.assign(submittedUser, { [key]: value });
    });
    setUser(submittedUser);
  }
  return (
    <section>
      <h1>FORM LOGIN</h1>
      <form onSubmit={submitHandler}>
        <InputWithLabel
          id="email"
          type="email"
          name="email"
          title="Email"
          placeholder="Type your Email"
          inputClassName="p-2 border-black border-2"
        />
        <InputWithLabel
          id="pwd"
          type="password"
          name="pwd"
          title="Password"
          placeholder="Type your Password"
          inputClassName="p-2 border-black border-2"
        />
        <button type="submit">LOGIN</button>
      </form>
    </section>
  );
}

export default Login;
