import { createSlice } from "@reduxjs/toolkit";

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: {
    open: false,
    message: "",
    color: "success",
  },
  reducers: {
    openSuccessSnackbar: (state, action) => {
      state.open = true;
      state.message = action.payload;
      state.color = "success";
    },
    openErrorSnackbar: (state, action) => {
      state.open = true;
      state.message = action.payload || "something went wrong.";
      state.color = "error";
    },
    closeSnackbar: (state) => {
      state.open = false;
    },
  },
});

export const { openSuccessSnackbar, openErrorSnackbar, closeSnackbar } =
  snackbarSlice.actions;

export default snackbarSlice.reducer;
