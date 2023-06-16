import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const { logged } = useSelector((state) => state.usuario);

  return !logged ? children : <Navigate to="/" />;
};
