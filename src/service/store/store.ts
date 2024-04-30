import { configureStore } from "@reduxjs/toolkit";

import { cartsSlice } from "@/service/slices/carts.slice.ts";

export const store = configureStore({
  reducer: {
    [cartsSlice.name]: cartsSlice.reducer,
  },
});
