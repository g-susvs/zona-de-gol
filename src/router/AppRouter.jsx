import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router";
import { CheckingAuth } from "../auth/components/CheckingAuth";
import { LoginPage } from "../auth/pages/LoginPage";
import { LandingPage } from "../landing/LandingPage";
import { ZDGRouter } from "../app/routes/ZDGRouter";
// import { HomePage } from "../app/pages/HomePage";
// import { CanchaPage } from "../app/pages/CanchaPage";
// import { ReservaPage } from "../app/pages/ReservaPage";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);

  if (status === "checking") {
    return <CheckingAuth />;
  }
  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          {/* <Route path="/*" element={<Navigate to="/home" />} /> */}

          <Route path="/*" element={<ZDGRouter />} />
          {/* <Route path="/home" element={<HomePage />} />
          <Route path="/cancha/:id" element={<CanchaPage />} />
          <Route path="/reserva/:id" element={<ReservaPage />} /> */}
        </>
      )}
    </Routes>
  );
};
