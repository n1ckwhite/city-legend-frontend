import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";

import { cartsService } from "@/service/slices/carts.service.ts";
import { ICart } from "@/types/cart.interface.ts";

interface IState {
  carts: ICart[];
  loading: boolean;
  error: SerializedError;
}

const initialState: IState = {
  carts: [],
  loading: false,
  error: "" as SerializedError,
};

export const getCartsThunk = createAsyncThunk(
  "get-carts",
  cartsService.getCarts,
);

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartsThunk.pending, (state) => {
        state.loading = true;
        state.error.message = "";
      })
      .addCase(getCartsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.carts = action.payload;
        state.error.message = "";
      })
      .addCase(getCartsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});
