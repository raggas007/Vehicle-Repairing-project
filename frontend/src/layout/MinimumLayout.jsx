import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import CustomSnackbar from "../components/CustomSnackbar";

const MinimumLayout = () => {
  return (
    <>
      <CustomSnackbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default MinimumLayout;
