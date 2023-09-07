import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";

import "../../css/cancha-page.css";
import { CanchaInfo } from "../views/CanchaInfo";
import { useDispatch } from "react-redux";
import { removeReservaData } from "../../store/reserva/reservaSlice";
import { config } from "../../config";

export const CanchaPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  dispatch(removeReservaData());
  const { data } = useFetch(`${config.API_HOST}/api/canchas/${id}`);

  useEffect(() => {}, [data]);

  return (
    <section id="page">
      <NavBar />
      {!data ? (
        <CargandoCancha />
      ) : (
        <>
          <header
            className="header-cancha"
            style={{
              backgroundImage: `url(${data.imagen})`,
              backgroundPositionY: "-600px",
            }}
          >
            <div className="box-shadow">
              <span className="nombre-local">{data.nombre_local}</span>
            </div>
          </header>
          <CanchaInfo cancha_id={id} {...data} />
        </>
      )}
    </section>
  );
};

export const CargandoCancha = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
