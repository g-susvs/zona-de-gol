import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { ZDGRouter } from "../app/routes/ZDGRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { useSelector } from "react-redux";
import { CheckingAuth } from "../auth/components/CheckingAuth";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  if (status === "checking") return <CheckingAuth />;
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <ZDGRouter />
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
    </Routes>
  );
};
