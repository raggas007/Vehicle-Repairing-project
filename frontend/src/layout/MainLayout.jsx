import { Box, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import CustomSnackbar from "../components/CustomSnackbar";

const MainLayout = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100",
        }}
      >
        <Header />
        <Stack sx={{ padding: "10rem" }}>
          <Outlet />
        </Stack>
      </Box>
      <CustomSnackbar />
    </>
  );
};

export default MainLayout;
