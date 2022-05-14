import { createSlice } from "@reduxjs/toolkit";

export const booleanSlice = createSlice({
   name: "boolean",
   initialState: { all: true, active: false },
   reducers: {
      btnAll: (state) => {
         state.all = true;
         state.active = false;
      },
      btnActive: (state) => {
         state.all = false;
         state.active = true;
      },
      btnCompleted: (state) => {
         state.all = false;
         state.active = false;
      },
   },
});

export const { btnAll, btnActive, btnCompleted } = booleanSlice.actions;

export default booleanSlice.reducer;
