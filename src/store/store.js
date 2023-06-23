import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { canchaSlice } from "./cancha/canchaSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cancha: canchaSlice.reducer,
  },
});
