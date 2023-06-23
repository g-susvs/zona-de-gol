import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const CanchaItem = ({
  _id,
  imagen,
  nombre_local,
  descripcion,
  calificacion,
}) => {
  const navigate = useNavigate();
  const imgSrc = imagen.includes("https") ? imagen : "/public/img/no-image.jpg";

  const handleCanchaSelected = (event) => {
    event.preventDefault();
    navigate(`/cancha/${_id}`);
  };

  return (
    <section className="cancha-item" onClick={handleCanchaSelected}>
      <div className="cancha-item-img">
        <img src={imgSrc} alt={nombre_local} />
      </div>
      <div className="cancha-item-info">
        <div className="cancha-nombre">
          <h4>{nombre_local}</h4>
          <p>{descripcion}</p>
        </div>
        <div className="cancha-cali">
          <span className="calificacion">{calificacion}</span>
          <span className="star">
            {" "}
            <AiFillStar />
          </span>
        </div>
      </div>
    </section>
  );
};
