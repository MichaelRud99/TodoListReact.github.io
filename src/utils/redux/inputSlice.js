import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
   name: "input",
   initialState: { value: "" },
   reducers: {
      enter: (state, value) => {
         state.value = value.payload;
      },
      clear: (state) => {
         state.value = "";
      },
   },
});

export const { enter, clear } = inputSlice.actions;

export default inputSlice.reducer;
