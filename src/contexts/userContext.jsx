import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const initialUser = {
  email: "",
  password: "",
};

export const userContext = createContext({
  user: initialUser,
  setUser: () => {},
});

function UserProvider({ children }) {
  const [user, setUser] = useLocalStorage("fgo23:user", initialUser);
//   function logout(){}
  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        // logout
      }}
    >
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;
