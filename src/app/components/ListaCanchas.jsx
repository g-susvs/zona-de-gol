import { CanchaItem } from "./CanchaItem";
import { NothingSearch } from "../views/NothingSearch";

export const ListaCanchas = ({ canchas = [] }) => {
  return (
    <section className="cancha-list">
      {canchas.length === 0 ? (
        <NothingSearch />
      ) : (
        canchas.map((cancha) => <CanchaItem key={cancha._id} {...cancha} />)
      )}
    </section>
  );
};
