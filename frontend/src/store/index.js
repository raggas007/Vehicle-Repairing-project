import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from "./slices/snackbarSlice";

export default configureStore({
  reducer: {
    snackbar: snackbarReducer,
  },
});
