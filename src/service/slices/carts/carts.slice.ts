import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";

import { cartsService } from "@/service/slices/carts/carts.service.ts";
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

export const deleteCartThunk = createAsyncThunk(
  "delete-cart",
  cartsService.deleteCart,
);

export const addCartThunk = createAsyncThunk("add-cart", cartsService.addCart);
export const changePresentsThunk = createAsyncThunk(
  "change-presents-cart",
  cartsService.changePresents,
);

export const changeCartThunk = createAsyncThunk(
  "change-cart",
  cartsService.changeCart,
);

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartsThunk.pending, (state) => {
        state.loading = true;
        state.error = {};
      })
      .addCase(getCartsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.carts = action.payload;
        state.error = {};
      })
      .addCase(getCartsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(deleteCartThunk.fulfilled, (state, { payload }) => {
        const findCartIndex = state.carts.findIndex(
          (cart) => cart.id === payload.id,
        );
        state.carts.splice(findCartIndex, 1);
        state.loading = false;
        state.error = {};
      })
      .addCase(deleteCartThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(addCartThunk.fulfilled, (state, { payload }) => {
        state.carts.push(payload);
        state.loading = false;
        state.error = {};
      })
      .addCase(addCartThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(changePresentsThunk.fulfilled, (state, { payload }) => {
        const findCartIndex = state.carts.findIndex(
          (cart) => cart.id === payload.id,
        );
        state.carts[findCartIndex] = payload;
        state.loading = false;
        state.error = {};
      })
      .addCase(changePresentsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(changeCartThunk.fulfilled, (state, { payload }) => {
        const findCartIndex = state.carts.findIndex(
          (cart) => cart.id === payload.id,
        );
        state.carts[findCartIndex] = payload;
        state.loading = false;
        state.error = {};
      })
      .addCase(changeCartThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
  selectors: {
    sliceState: (sliceState) => sliceState,
  },
});

export const { sliceState } = cartsSlice.selectors;
