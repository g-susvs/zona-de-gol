import { createSlice } from "@reduxjs/toolkit";

export const canchaSlice = createSlice({
  name: "cancha",
  initialState: {
    id: "",
    fecha: "",
    hora: "",
    duracion: 60,
    superficie: "",
    imagen: "",
    calificacion: "",
    precio: 0,
  },
  reducers: {
    setCanchaSearch: (state, { payload }) => {
      state.fecha = payload.fecha;
      state.hora = payload.hora;
      state.duracion = payload.duracion;
      state.superficie = payload.superficie;
    },
    setCanchaInfo: (state, { payload }) => {
      state.id = payload.id;
      state.imagen = payload.imagen;
      state.calificacion = payload.calificacion;
      state.precio = payload.precio;
    },
  },
});

export const { setCanchaSearch, setCanchaInfo } = canchaSlice.actions;
