import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReservaData } from "../../store/reserva/reservaSlice";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { GiDuration } from "react-icons/gi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

import "../../css/reserva-page.css";
import { config } from "../../config";

export const ReservaPage = () => {
  const { id: reserva_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  // Datos de la reserva desde el estor
  const { nombre_local, imagen, duracion, precio, fecha } = useSelector(
    (state) => state.reserva
  );
  // const imgSrc = imagen.includes("https") ? imagen : "/public/img/no-image.jpg";

  let fechaArr;
  if (fecha) {
    fechaArr = fecha.split(" ");
  }
  useEffect(() => {
    const token = localStorage.getItem("zdg_token");
    fetch(`${config.API_HOST}/api/reservas/${reserva_id}`, {
      method: "GET",
      headers: {
        "x-token": token,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        const reserva = data.reserva;
        let precio;
        reserva.cancha_id.precios.forEach((element) => {
          if (element["duracion"] == reserva.duracion) {
            precio = element["precio"];
          }
        });

        dispatch(
          setReservaData({
            id: reserva._id,
            cancha_id: reserva.cancha_id._id,
            nombre_local: reserva.cancha_id.nombre_local,
            imagen: reserva.cancha_id.imagen,
            duracion: reserva.duracion,
            precio: precio,
            fechaMilsec: reserva.fechaMilsec,
            fecha: reserva.fecha,
            exp: reserva.exp,
          })
        );
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reserva_id]);

  return (
    <section id="page-reserva">
      <NavBar />

      {isLoading ? (
        <CargandoReserva />
      ) : (
        <main className="main-reserva">
          <div className="main-title">
            <h1>Reservar</h1>
            <p>
              Para terminar tu reserva en Zona de Gol, complete los siguientes
              campos
            </p>
          </div>
          <section className="reserva-info">
            <div className="reserva-title">
              <div className="r-t">
                <h2>{nombre_local}</h2>
              </div>
              <div className="box-image">
                <img src={imagen} alt={nombre_local} />
              </div>
            </div>
            <div>
              <div className="lista-datos-reserva">
                <span className="lista-item">
                  <span className="item-desc">
                    <AiOutlineCalendar />
                    <p>Fecha : </p>
                  </span>
                  <span className="item-value">{fechaArr[0]}</span>
                </span>
                <span className="lista-item">
                  <span className="item-desc">
                    <MdOutlineWatchLater />
                    <p>Hora : </p>
                  </span>
                  <span className="item-value">{fechaArr[1]}</span>
                </span>
                <span className="lista-item">
                  <span className="item-desc">
                    <GiDuration />
                    <p>Duración : </p>
                  </span>
                  <span className="item-value">{duracion} min</span>
                </span>
                <span className="lista-item">
                  <span className="item-desc">
                    <RiMoneyDollarCircleLine />
                    <p>Precio : </p>
                  </span>
                  <span className="item-value">S/ {precio}.00</span>
                </span>
              </div>
              <button type="button" className="btn btn-primary mt-3">
                Realizar Pago
              </button>
            </div>
          </section>
        </main>
      )}
    </section>
  );
};

export const CargandoReserva = () => {
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
