import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import $axios from "../lib/api.instance";
import VehicleRequestDetails from "../components/VehicleRequestDetails";
import { useDispatch } from "react-redux";
import {
  openErrorSnackbar,
  openSuccessSnackbar,
} from "../store/slices/snackbarSlice";

const ViewRequest = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    isLoading: getVehicleLoading,
    isError,
    error,
    data,
  } = useQuery({
    queryKey: ["get-details"],
    queryFn: async (values) => {
      return await $axios.get(`/view/request/details`, values);
    },
  });
  const vehicleRequestDetails = data?.data?.vehicleRequestDetails;

  const { isLoading: deleteVehicleLoading, mutate: deleteVehicleMutate } =
    useMutation({
      mutationKey: ["delete-vehicle-request"],
      mutationFn: async (_id) => {
        return await $axios.delete(`/delete/request/${_id}`);
      },
      onSuccess: (response) => {
        dispatch(openSuccessSnackbar(response?.data?.message));
        queryClient.invalidateQueries("get-details");
      },
      onError: (error) => {
        dispatch(openErrorSnackbar(error?.response?.data?.message));
      },
    });
  if (getVehicleLoading || deleteVehicleLoading) {
    return <CircularProgress />;
  }
  return (
    <Box
      sx={{ minWidth: "100vw", minHeight: "100vh", background: "lightblue" }}
    >
      <Box sx={{ marginTop: "5rem" }}>
        {vehicleRequestDetails?.length === 0 ? (
          <Stack>
            <Typography variant="h3" sx={{ color: "Yellow" }}>
              No Vehicle Request Available Here
            </Typography>
            <Button
              variant="contained"
              color="error"
              sx={{
                width: "200px",
                height: "50px",
                marginLeft: "45rem",
                marginTop: "4rem",
              }}
              onClick={() => {
                navigate("/home");
              }}
            >
              Go to Home
            </Button>
          </Stack>
        ) : (
          vehicleRequestDetails?.map((item) => {
            return (
              <Box sx={{ display: "flex" }}>
                <Box
                  key={item?._id}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <VehicleRequestDetails {...item} />
                </Box>
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
                    sx={{
                      height: "40px",
                    }}
                    onClick={() => {
                      navigate(`/edit/request/${item?._id}`);
                    }}
                  >
                    <Typography variant="subtitile1">Edit</Typography>
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{
                      height: "40px",
                    }}
                    startIcon={<DeleteOutlinedIcon />}
                    onClick={() => {
                      deleteVehicleMutate(item?._id);
                    }}
                  >
                    Delete
                  </Button>
                </Stack>
              </Box>
            );
          })
        )}
      </Box>
    </Box>
  );
};

export default ViewRequest;
