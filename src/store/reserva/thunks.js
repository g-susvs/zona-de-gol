import { config } from "../../config";
import { setReservaData, setReservaId } from "./reservaSlice";

export const crearReserva = () => {
  return async (dispatch, getState) => {
    const { id, fecha, hora, duracion } = getState().cancha;

    const body = {
      cancha_id: id,
      fechaMilsec: new Date(`${fecha} ${hora}`).getTime(),
      duracion,
      estado_de_reserva: "pendiente",
    };

    const url = `${config.API_HOST}/api/reservas`;

    const token = localStorage.getItem("zdg_token");
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(body),
    });

    const data = await resp.json();
    const reserva_id = data.reserva._id;

    dispatch(
      setReservaId({
        id: reserva_id,
      })
    );
  };
};

export const getReservaPorId = (id) => {
  return async (dispatch) => {
    const url = `${config.API_HOST}/api/reservas/${id}`;

    const token = localStorage.getItem("zdg_token");
    const resp = await fetch(url, {
      method: "GET",
      headers: {
        "x-token": token,
      },
    });

    const data = await resp.json();
    const reserva = data.reserva;
    // console.log(data);
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
  };
};
