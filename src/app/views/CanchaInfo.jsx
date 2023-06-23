import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "../../css/cancha-info.css";
import { useEffect, useState } from "react";
import { setCanchaInfo } from "../../store/cancha/canchaSlice";

export const CanchaInfo = ({
  _id,
  descripcion,
  imagen,
  distrito,
  direccion,
  calificacion,
  precios = [],
}) => {
  const dispatch = useDispatch();
  const { fecha, hora, duracion } = useSelector((state) => state.cancha);

  const [precioDuracion, setPrecioDuracion] = useState({
    duracion: duracion,
    precio: 0,
  });

  useEffect(() => {
    if (duracion != "duracion") {
      const d = parseInt(duracion);
      const dato = precios.find((object) => object.duracion === d);
      setPrecioDuracion(dato);
    }
  }, []);

  const onPrecioDuracionSelected = (event) => {
    const { value } = event.target;

    const d = parseInt(value);

    const dato = precios.find((object) => object.duracion === d);
    setPrecioDuracion(dato);
  };

  const onReservar = () => {
    if (precioDuracion.duracion === "duracion" || precioDuracion.precio === 0) {
      Swal.fire({
        title: "Error",
        text: "Debes seleccionar la duración de la reserva",
        icon: "error",
        confirmButtonText: "ok",
      });
      return;
    }
    dispatch(
      setCanchaInfo({
        imagen,
        id: _id,
        calificacion,
        precio: precioDuracion.precio,
      })
    );
  };

  return (
    <main className="cancha-view-info">
      <p className="info-fecha">
        Fecha <span>{fecha} </span>
        hora <span>{hora}</span>
      </p>
      <p>
        Descripción: <span>{descripcion}</span>
      </p>
      <h4>Ubicación</h4>
      <p>
        <strong>Distrito: </strong> <span>{distrito}</span>
      </p>
      <p>
        <strong>Dirección: </strong> <span>{direccion}</span>
      </p>
      <br />
      <h4>Precio x duracion</h4>
      <div className="precio-duracion">
        <select
          className="form-select"
          aria-label=".form-select-sm example"
          name="duracion"
          onChange={onPrecioDuracionSelected}
          value={precioDuracion.duracion}
        >
          <option value="duracion">Duración</option>
          {precios.map((item) => {
            return (
              <option key={item.duracion} value={item.duracion}>
                {item.duracion} min
              </option>
            );
          })}
        </select>
        {precioDuracion.precio !== 0 ? (
          <p>
            <span>
              <strong>Precio:</strong>
            </span>
            <span>S/{precioDuracion.precio}</span>
          </p>
        ) : null}
      </div>
      <br />
      <button className="btn btn-success" onClick={onReservar}>
        Reservar
      </button>
    </main>
  );
};
