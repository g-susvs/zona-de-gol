import "../../css/auth.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startGoogleSignIn } from "../../store/auth/thunks";
import { config } from "../../config";

export const LoginPage = () => {
  const dispatch = useDispatch();

  const clientId = config.GOOGLE_CLIENT_ID;

  function handleCallbackResponse(response) {
    dispatch(startGoogleSignIn(response.credential));
  }
  useEffect(() => {
    /* goblal google*/
    // eslint-disable-next-line no-undef
    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallbackResponse,
    });

    // eslint-disable-next-line no-undef
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 main">
            <form className="form-auth">
              <img src="img/logo-user.png" alt="" className="img-fluid logo" />
              <h1 className="titulo">Zona de Gol </h1>
              <h2 className="titulo-2">
                Inicia Sesión para acceder a la plataforma
              </h2>
              <label>
                Ingrese su Correo:
                <input
                  type="email"
                  className="form-control input-auth"
                  placeholder="me@example"
                />
              </label>
              <label>
                Contraseña:
                <input
                  type="password"
                  className="form-control input-auth"
                  placeholder="Ingrese su contraseña"
                />
              </label>
              <a href="#" className="link">
                ¿Olvidaste tu contraseña?{" "}
              </a>{" "}
              <br />
              <br />
              <a href="#" type="button" className="link-3">
                {" "}
                Ingresar{" "}
              </a>
              {/* ==== GOOGLE BUTTON ==== */}
              <div id="signInDiv"></div>
              <br />
              ¿No tienes cuenta?{" "}
              <a href="registro.html" className="link-2">
                {" "}
                Registrate!
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
