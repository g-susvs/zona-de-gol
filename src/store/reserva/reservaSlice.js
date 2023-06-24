import { createSlice } from "@reduxjs/toolkit";

export const reservaSlice = createSlice({
  name: "reserva",
  initialState: {
    status: "sin", // sin con
    id: null,
    cancha_id: null,
    nombre_local: null,
    imagen: null,
    duracion: null,
    precio: null,
    fechaMilsec: null,
    fecha: null,
    exp: null,
    errorMessage: null,
  },
  reducers: {
    setReservaId: (state, { payload }) => {
      state.id = payload.id;
      state.status = "con";
    },
    setReservaData: (state, { payload }) => {
      state.id = payload.id;
      state.cancha_id = payload.cancha_id;
      state.nombre_local = payload.nombre_local;
      state.imagen = payload.imagen;
      state.duracion = payload.duracion;
      state.precio = payload.precio;
      state.fechaMilsec = payload.fechaMilsec;
      state.fecha = payload.fecha;
      state.exp = payload.exp;
    },
    removeReservaData: (state) => {
      state.status = "sin";
    },
  },
});

export const { setReservaId, setReservaData, removeReservaData } =
  reservaSlice.actions;
