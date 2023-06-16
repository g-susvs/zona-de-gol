import { createSlice } from "@reduxjs/toolkit";

export const canchaSlice = createSlice({
  name: "cancha",
  initialState: {
    id: "31312",
    nombre: "sport lurin",
    descripcion: "safs",
    calificacion: 4,
    duenio: "13123",
    imagen: "URL-CLDNRY",
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});

export const { increment } = canchaSlice.actions;
