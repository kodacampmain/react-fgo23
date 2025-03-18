import { Link, useNavigate } from "react-router";
// import { useState } from "react";

function Header({user, setUser}) {
  const navigate = useNavigate();
  // const [user, setUser] = useLocalStorage("fgo23:user", {});

  function logout() {
    setUser({
      email: "",
      password: "",
    });
    // setIsLogin(false);
    navigate("/auth");
  }
  return (
    <header className="py-2.5 px-25 flex justify-between sticky top-0 bg-gray-200">
      <div className="h-18 w-18">
        <img src="/imgs/vite.svg" alt="logo" className="object-cover" height={72} width={72} />
      </div>
      <nav>
        <ul className="list-none flex gap-3 items-center h-full">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">About</li>
        </ul>
      </nav>
      <div className="flex gap-1.25 items-center">
        {user.email && user.password ? (
          <button
            onClick={logout}
            type="button"
            className="border-2 border-blue-400 bg-white text-blue-400 p-2 h-fit active:bg-blue-400 active:text-white"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/auth">
              <button
                type="button"
                className="border-2 border-blue-400 bg-white text-blue-400 p-2 h-fit active:bg-blue-400 active:text-white"
              >
                Signin
              </button>
            </Link>
            <button
              type="button"
              className="border-2 border-blue-400 bg-blue-400 text-white p-2 h-fit active:bg-white active:text-blue-400"
            >
              Signup
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
