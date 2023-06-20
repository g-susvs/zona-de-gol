import { checkingCredential, login } from "./authSlice";

export const startGoogleSignIn = (tokenId) => {
  return async (dispatch) => {
    dispatch(checkingCredential());
    const url = `${import.meta.env.VITE_API_HOST}/api/usuarios/google`;
    const body = { id_token: tokenId };

    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await resp.json();
    const { token, usuario } = data;

    const state = {
      uid: usuario.uid,
      correo: usuario.correo,
      nombre: usuario.nombre,
      img: usuario.img,
    };

    dispatch(login(state));
    localStorage.setItem("zdg_token", token);
    console.log(data);
    console.log("Authenticado");

    // dispatch(login(result));
  };
};