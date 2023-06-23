import { useEffect, useState } from "react";
import { IoMdOptions } from "react-icons/io";
import Swal from "sweetalert2";
import { useForm, useDate } from "../../hooks/";
import "../../css/busqueda.css";
import { ListaCanchas } from "../components/ListaCanchas";
import { useDispatch } from "react-redux";
import { setCanchaSearch } from "../../store/cancha/canchaSlice";

export const SearchView = () => {
  const dispatch = useDispatch();
  const { currentDateValue, currentHour } = useDate();

  const { formState, onInputChange } = useForm({
    hora: `${currentHour}:00`,
    duracion: "duracion",
    distrito: "distrito",
    superficie: "superficie",
    fecha: currentDateValue,
  });

  const [showFilters, setShowFilters] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const { hora, fecha, duracion, distrito, superficie } = formState;

  const handleOnClick = (event) => {
    event.preventDefault();

    const cDay = new Date().getTime();
    const selectDay = new Date(
      `${formState.fecha} ${formState.hora}`
    ).getTime();

    if (!(selectDay >= cDay)) {
      // alerta
      Swal.fire({
        title: "Error",
        text: "El fecha que ha seleccionaado no es valida",
        icon: "error",
        confirmButtonText: "ok",
      });
      return;
    }

    setIsLoading(true);

    fetch(
      `${import.meta.env.VITE_API_HOST}/api/canchas?superficie=${
        superficie !== "superficie" ? superficie : ""
      }&duracion=${duracion !== "duracion" ? duracion : ""}&distrito=${
        distrito !== "distrito" ? encodeURIComponent(distrito) : ""
      }`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setData(data.canchas);
        setIsLoading(false);

        // Guardar datos de la busqueda en el store
        dispatch(setCanchaSearch({ fecha, hora, duracion, superficie }));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // useEffect(() => {
  //   if (isLoading) {
  //     console.log("cargando");
  //   }
  // }, [isLoading]);

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
                <option defaultValue value="superficie">
                  Superficie
                </option>
                <option value="natural">Césped natural</option>
                <option value="sintetico">Césped sintético</option>
                <option value="hibrido">Césped híbrido</option>
              </select>
            </div>
            <div className="filtro-div">
              <select
                className="form-select superficie"
                aria-label=".form-select-sm example"
                name="distrito"
                onChange={onInputChange}
              >
                <option defaultValue value="distrito">
                  Distrito
                </option>
                <option value="Chorrillos">Chorrillos</option>
                <option value="La Victoria">La Victoria</option>
                <option value="Los olivos">Los olivos</option>
                <option value="Miraflores">Miraflores</option>
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
