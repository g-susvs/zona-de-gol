import { useParams } from "react-router-dom";

export const ReservaPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>
        Reserva <span>{id}</span>
      </h1>
    </div>
  );
};
