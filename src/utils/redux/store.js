import { configureStore } from "@reduxjs/toolkit";
import booleanSlice from "./booleanSlice";
import inputSlice from "./inputSlice";

export default configureStore({
   reducer: {
      boolean: booleanSlice,
      input: inputSlice,
   },
});
