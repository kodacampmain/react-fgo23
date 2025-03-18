import { useContext } from "react";
import { Navigate, useLocation } from "react-router";

import { userContext } from "../contexts/userContext";

function PrivateRoute({ children, redirectTo }) {
  const { user } = useContext(userContext);
  const location = useLocation();

  // case 1: belum login
  if (!user.email || !user.password) {
    return <Navigate to={redirectTo} replace state={{ from: location.pathname }} />;
  }

  // case 2: role tidak cocok
  // case 3: sudah login (buat komponen baru)

  return children;
}

export default PrivateRoute;
