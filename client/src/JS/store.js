import { configureStore } from "@reduxjs/toolkit";
import commandeSlice from "./commandeSlice";
import productSlice from "./productSlice";
import userSlice from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    commande: commandeSlice,
  },
});
