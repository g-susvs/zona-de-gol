import "../css/Landing-page.css";

export const LandingPage = () => {
  return (
    <div className="landing-container">
      <nav className="landing-navbar">
        <div className="navbar-title">
          <div className="box-image">
            <img src="img/logo-app.png" alt="logo - zona de gol" />
          </div>
          <h1>Zona de gol</h1>
        </div>
        <div className="buttons">
          <a href="/login" className="login-btn">
            Iniciar sesión
          </a>
        </div>
      </nav>
      <main className="landing-main">
        <section className="main-text">
          <p className="text">
            Alquila un espacio en tu localidad, en los horarios que se encuentre
            disponibles.
            <br />
            <span className="call-to-action">
              Reservar una cancha nunca había sido tan fácil.
            </span>
          </p>
        </section>
        <section className="main-img">
          <img src="img/image-ref.png" alt="image-ref" />
        </section>
      </main>
    </div>
  );
};
