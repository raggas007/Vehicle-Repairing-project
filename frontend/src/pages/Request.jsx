import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const Request = () => {
  return (
    <Box
      sx={{
        marginTop: "2rem",
        minHeight: "100vh",
        minWidth: "100vw",
        textAlign: "center",
        backgroundSize: "cover",
        marginLeft: "300px",
      }}
    >
      <Formik
        initialValues={{
          vehicleCategory: "",
          vehicleNumber: "",
          vehicleName: "",
          vehicleBrand: "",
          problemDescription: "",
        }}
        validationSchema={Yup.object({
          vehicleCategory: Yup.string()
            .required("Choose at least one Vehicle Category")
            .trim()
            .oneOf([
              "Two Wheeler Without Gear",
              "Two Wheeler With Gear",
              "Three Wheeler",
              "Four Wheeler",
            ]),
          vehicleNumber: Yup.string()
            .required("Vehicle Number is required")
            .trim()
            .max(15, "maximum character of vehicle number is 15 "),
          vehicleName: Yup.string()
            .required("Vehicle Name is required")
            .trim()
            .max(20, "maximum character of Vehicle name is 20 "),
          vehicleBrand: Yup.string()
            .required("Vehicle Brand is required")
            .trim()
            .max(20, "maximum character of Vehicle Brand is 20 "),
          problemDescription: Yup.string()
            .required("Description of actual problem is required")
            .trim()
            .max(100, "maximum character of Description is 100 "),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, getFieldProps, touched, errors }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "2rem",
              marginLeft: "600px",
              width: "330px",
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            }}
          >
            <Box>
              {" "}
              <Typography variant="h5" sx={{ color: "green" }}>
                Make Request(Vehicle)
              </Typography>
            </Box>
            <FormControl fullWidth>
              <InputLabel>Vehicle Category</InputLabel>
              <Select
                label="Vehicle Category"
                {...getFieldProps("vehicleCategory")}
              >
                <MenuItem value="Two Wheeler Without Gear">
                  Two Wheeler Without Gear
                </MenuItem>
                <MenuItem value="Two Wheeler With Gear">
                  Two Wheeler With Gear
                </MenuItem>
                <MenuItem value="Three Wheeler">Three Wheeler</MenuItem>
                <MenuItem value="Four Wheeler">Four Wheeler</MenuItem>
              </Select>
              {touched.vehicleCategory && errors.vehicleCategory ? (
                <FormHelperText error>{errors.vehicleCategory}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField
                label="Vehicle Number"
                {...getFieldProps("vehicleNumber")}
              />
              {touched.vehicleNumber && errors.vehicleNumber ? (
                <FormHelperText error>{errors.vehicleNumber}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField
                label="Vehicle Name"
                {...getFieldProps("vehicleName")}
              />
              {touched.vehicleName && errors.vehicleName ? (
                <FormHelperText error>{errors.vehicleName}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField
                label="Vehicle Brand"
                {...getFieldProps("vehicleBrand")}
              />
              {touched.vehicleBrand && errors.vehicleBrand ? (
                <FormHelperText error>{errors.vehicleBrand}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField
                label="Problem Description"
                {...getFieldProps("problemDescription")}
                multiline
                rows={7}
              />
              {touched.problemDescription && errors.problemDescription ? (
                <FormHelperText error>
                  {errors.problemDescription}
                </FormHelperText>
              ) : null}
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              sx={{
                marginTop: "0.5rem",
                padding: "0.75rem",
                background: "green",
                boxShadow:
                  "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px 0px, rgba(0, 0, 0, 0.09) 0px 4px 2px 0px, rgba(0, 0, 0, 0.09) 0px 8px 4px 0px, rgba(0, 0, 0, 0.09) 0px 16px 8px 0px, rgba(0, 0, 0, 0.09) 0px 32px 16px 0px",
              }}
            >
              <Typography sx={{ color: "white" }}> Submit Request</Typography>
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Request;
