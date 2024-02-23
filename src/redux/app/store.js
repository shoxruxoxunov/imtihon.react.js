import { configureStore } from "@reduxjs/toolkit";
import productsReduser from "../features/bascet/bascet";

export const store = configureStore({
  reducer: {
    products: productsReduser,
  },
});
