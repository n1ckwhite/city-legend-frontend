import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: () => {},
});
