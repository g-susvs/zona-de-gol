import { useEffect, useState } from "react";

import { IoMdOptions } from "react-icons/io";

import { useForm, useDate } from "../../hooks/";
import "../../css/busqueda.css";
import { ListaCanchas } from "../components/ListaCanchas";

export const SearchView = () => {
  const { currentDateValue, currentHour } = useDate();

  const { formState, onInputChange } = useForm({
    hora: `${currentHour}:00`,
    duracion: "60",
    superficie: "sintetico",
    fecha: currentDateValue,
  });

  const [showFilters, setShowFilters] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const { hora, fecha } = formState;

  const handleOnClick = (event) => {
    event.preventDefault();

    if (
      formState.duracion === "duracion" ||
      formState.superficie === "superficie"
    ) {
      console.log("selecciona correctamente");
      return;
    }
    const cDay = new Date().getTime();
    const selectDay = new Date(
      `${formState.fecha} ${formState.hora}`
    ).getTime();

    if (!(selectDay >= cDay)) {
      console.log("seleccione correctamente el día");
      return;
    }

    setIsLoading(true);
    fetch(`${import.meta.env.VITE_API_HOST}/api/canchas/`)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data.canchas);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (isLoading) {
      console.log("cargando");
    }
  }, [isLoading]);

  return (
    <div className="busqueda">
      <form>
        <section className="busqueda-input">
          <input
            type="text"
            className="form-control"
            placeholder=" Busca tu zona de gol"
          />
          <button className="btn btn-success" onClick={handleOnClick}>
            Buscar
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setShowFilters(!showFilters)}
          >
            <IoMdOptions />
          </button>
        </section>
        {showFilters && (
          <section className="filtros-busqueda">
            <div>
              <span className="filtro-title">Día de la semana</span>
              <input
                type="date"
                className="fecha form-control"
                name="fecha"
                value={fecha}
                onChange={onInputChange}
              />
            </div>
            <div>
              <span className="filtro-title">Hora</span>
              <input
                type="time"
                value={hora}
                className="hora form-control"
                name="hora"
                onChange={onInputChange}
              />
            </div>
            <div className="filtro-div">
              <select
                className="form-select duracion"
                aria-label=".form-select-sm example"
                onChange={onInputChange}
                name="duracion"
              >
                <option defaultValue value="duracion">
                  Duración
                </option>
                <option value="60">60 min</option>
                <option value="90">90 min</option>
                <option value="120">120 min</option>
              </select>
            </div>

            <div className="filtro-div">
              <select
                className="form-select superficie"
                aria-label=".form-select-sm example"
                name="superficie"
                onChange={onInputChange}
              >
                <option defaultValue>Superficie</option>
                <option value="natural">Césped natural</option>
                <option value="sintetico">Césped sintético</option>
                <option value="híbrido">Césped híbrido</option>
              </select>
            </div>
          </section>
        )}
      </form>
      {isLoading ? <CargandoCanchas /> : <ListaCanchas canchas={data} />}
    </div>
  );
};

export const CargandoCanchas = () => {
  return (
    <div
      style={{
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
