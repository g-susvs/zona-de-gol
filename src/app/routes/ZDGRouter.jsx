import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { CanchaPage } from "../pages/CanchaPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ReservaPage } from "../pages/ReservaPage";

export const ZDGRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/cancha/:id" element={<CanchaPage />} />
      <Route path="/reserva/:id" element={<ReservaPage />} />
      <Route path="/*" element={<Navigate to={"home"} />} />
    </Routes>
  );
};
