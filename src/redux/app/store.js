import { configureStore } from "@reduxjs/toolkit";

import basketReducer from "../features/bascet/bascet";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
