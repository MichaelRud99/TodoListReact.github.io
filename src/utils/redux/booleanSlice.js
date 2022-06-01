import { createSlice } from "@reduxjs/toolkit";

export const booleanSlice = createSlice({
   name: "boolean",
   initialState: { all: true, active: false },
   reducers: {
      passAll: (state) => {
         state.all = true;
         state.active = false;
      },
      passActive: (state) => {
         state.all = false;
         state.active = true;
      },
      passCompleted: (state) => {
         state.all = false;
         state.active = false;
      },
   },
});

export const { passAll, passActive, passCompleted } = booleanSlice.actions;

export default booleanSlice.reducer;
