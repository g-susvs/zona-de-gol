import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", // checking - not-authenticated - authenticated
    uid: null,
    correo: null,
    nombre: null,
    img: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.correo = payload.correo;
      state.nombre = payload.nombre;
      state.img = payload.img;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.correo = null;
      state.nombre = null;
      state.img = null;
      state.errorMessage = payload?.errorMessage;
    },
    checkingCredential: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredential } = authSlice.actions;
