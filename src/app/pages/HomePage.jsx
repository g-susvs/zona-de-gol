import { NavBar } from "../components/NavBar";
import { SearchView } from "../views/SearchView";
import "../../css/home.css";
export const HomePage = () => {
  return (
    <section id="page">
      <NavBar />
      <header className="header-home">
        <h1>Zona de gol</h1>
      </header>
      <main>
        <SearchView />
      </main>
    </section>
  );
};
