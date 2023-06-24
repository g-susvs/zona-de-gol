import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { canchaSlice } from "./cancha/canchaSlice";
import { reservaSlice } from "./reserva/reservaSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cancha: canchaSlice.reducer,
    reserva: reservaSlice.reducer,
  },
});
