import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import VehicleDetailRequestCard from "./VehicleDetailRequestcard";
import $axios from "../lib/api.instance";

const RequestList = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Fetch vehicle request details
  const {
    isLoading: getVehicleLoading,
    isError,
    data,
  } = useQuery("get-vehicle-details", async () => {
    const response = await $axios.get("/view/request/details");
    return response.data;
  });

  const vehicleRequestDetails = data?.data?.vehicleRequestDetails;
  console.log(vehicleRequestDetails);

  // Define mutation for deleting vehicle request
  const deleteVehicleMutation = useMutation(
    async (id) => {
      await $axios.delete(`/delete/request/${id}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("get-vehicle-details");
      },
      onError: (error) => {
        console.log(error?.response?.data?.message);
      },
    }
  );

  if (getVehicleLoading) {
    return <CircularProgress />;
  }

  return (
    <Box
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        background: "#FFBE98",
        marginTop: "5rem",
      }}
    >
      {vehicleRequestDetails?.length === 0 ? (
        <Typography variant="h5" sx={{ color: "red", textAlign: "center" }}>
          No vehicle requests available
        </Typography>
      ) : (
        vehicleRequestDetails?.map((item) => (
          <Box
            key={item?._id}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "2rem",
              }}
            >
              <VehicleDetailRequestCard {...item} />
              <Stack
                direction="column"
                spacing={0.5}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "-4rem",
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<EditIcon />}
                  sx={{ height: "40px" }}
                  onClick={() => {
                    navigate(`/edit/vehicle/${item?._id}`);
                  }}
                >
                  <Typography variant="subtitle1">Edit</Typography>
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ height: "40px" }}
                  startIcon={<DeleteOutlinedIcon />}
                  onClick={() => {
                    deleteVehicleMutation.mutate(item?._id);
                  }}
                >
                  Delete
                </Button>
              </Stack>
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
};

export default RequestList;
