import { createSlice } from "@reduxjs/toolkit";

export const usuarioSlice = createSlice({
  name: "usuario",
  initialState: {
    uid: "1234",
    nombre: "jesus",
    correo: "jesus@email.com",
    logged: false,
    state: "authenticated",
  },
  reducers: {
    autenticado: (state) => {
      state.state = "authenticated";
    },
    checkingAuthentication: (state) => {
      state.state = "checking";
    },
  },
});

export const { autenticado, checkingAuthentication } = usuarioSlice.actions;
