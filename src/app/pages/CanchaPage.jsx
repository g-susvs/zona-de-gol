import { useParams } from "react-router-dom";

export const CanchaPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>
        Cancha seleccionada <span>{id}</span>
      </h1>
    </div>
  );
};
