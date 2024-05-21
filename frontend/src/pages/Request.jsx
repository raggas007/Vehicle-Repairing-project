// import {
//   Box,
//   Button,
//   FormControl,
//   FormHelperText,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { Formik } from "formik";
// import React from "react";
// import { useMutation } from "react-query";
// import * as Yup from "yup";
// import $axios from "../lib/api.instance";
// import { useNavigate } from "react-router-dom";

// const Request = () => {
//   const navigate = useNavigate();
//   const { isLoading, mutate } = useMutation({
//     mutationKey: ["register-vehicle-request"],
//     mutationFn: async (values) => {
//       try {
//         const token = localStorage.getItem("token");
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };
//         console.log(values);
//         return await $axios.post("/register/vehicle", values, config);
//       } catch (error) {
//         throw new Error(error.response?.data?.message || "An error occurred");
//       }
//     },
//     onSuccess: (response) => {
//       navigate("/Home");
//     },
//     onError: (error) => {
//       console.log(error.message);
//     },
//   });
//   return (
//     <Box
//       sx={{
//         marginTop: "2rem",
//         minHeight: "100vh",
//         minWidth: "100vw",
//         textAlign: "center",
//         backgroundSize: "cover",
//         marginLeft: "300px",
//       }}
//     >
//       <Formik
//         initialValues={{
//           vehicleCategory: "",
//           vehicleNumber: "",
//           vehicleName: "",
//           vehicleBrand: "",
//           problemDescription: "",
//         }}
//         validationSchema={Yup.object({
//           vehicleCategory: Yup.string()
//             .required("Choose at least one Vehicle Category")
//             .trim()
//             .oneOf([
//               "Two Wheeler Without Gear",
//               "Two Wheeler With Gear",
//               "Three Wheeler",
//               "Four Wheeler",
//             ]),
//           vehicleNumber: Yup.string()
//             .required("Vehicle Number is required")
//             .trim()
//             .max(15, "maximum character of vehicle number is 15 "),
//           vehicleName: Yup.string()
//             .required("Vehicle Name is required")
//             .trim()
//             .max(20, "maximum character of Vehicle name is 20 "),
//           vehicleBrand: Yup.string()
//             .required("Vehicle Brand is required")
//             .trim()
//             .max(20, "maximum character of Vehicle Brand is 20 "),
//           problemDescription: Yup.string()
//             .required("Description of actual problem is required")
//             .trim()
//             .max(100, "maximum character of Description is 100 "),
//         })}
//         onSubmit={(values) => {
//           mutate(values);
//         }}
//       >
//         {({ handleSubmit, getFieldProps, touched, errors }) => (
//           <form
//             onSubmit={handleSubmit}
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "1rem",
//               padding: "2rem",
//               marginLeft: "600px",
//               width: "330px",
//               boxShadow:
//                 "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
//             }}
//           >
//             <Box>
//               {" "}
//               <Typography variant="h5" sx={{ color: "green" }}>
//                 Make Request(Vehicle)
//               </Typography>
//             </Box>
//             <FormControl fullWidth>
//               <InputLabel>Vehicle Category</InputLabel>
//               <Select
//                 label="Vehicle Category"
//                 {...getFieldProps("vehicleCategory")}
//               >
//                 <MenuItem value="Two Wheeler Without Gear">
//                   Two Wheeler Without Gear
//                 </MenuItem>
//                 <MenuItem value="Two Wheeler With Gear">
//                   Two Wheeler With Gear
//                 </MenuItem>
//                 <MenuItem value="Three Wheeler">Three Wheeler</MenuItem>
//                 <MenuItem value="Four Wheeler">Four Wheeler</MenuItem>
//               </Select>
//               {touched.vehicleCategory && errors.vehicleCategory ? (
//                 <FormHelperText error>{errors.vehicleCategory}</FormHelperText>
//               ) : null}
//             </FormControl>
//             <FormControl>
//               <TextField
//                 label="Vehicle Number"
//                 {...getFieldProps("vehicleNumber")}
//               />
//               {touched.vehicleNumber && errors.vehicleNumber ? (
//                 <FormHelperText error>{errors.vehicleNumber}</FormHelperText>
//               ) : null}
//             </FormControl>
//             <FormControl>
//               <TextField
//                 label="Vehicle Name"
//                 {...getFieldProps("vehicleName")}
//               />
//               {touched.vehicleName && errors.vehicleName ? (
//                 <FormHelperText error>{errors.vehicleName}</FormHelperText>
//               ) : null}
//             </FormControl>
//             <FormControl>
//               <TextField
//                 label="Vehicle Brand"
//                 {...getFieldProps("vehicleBrand")}
//               />
//               {touched.vehicleBrand && errors.vehicleBrand ? (
//                 <FormHelperText error>{errors.vehicleBrand}</FormHelperText>
//               ) : null}
//             </FormControl>
//             <FormControl>
//               <TextField
//                 label="Problem Description"
//                 {...getFieldProps("problemDescription")}
//                 multiline
//                 rows={7}
//               />
//               {touched.problemDescription && errors.problemDescription ? (
//                 <FormHelperText error>
//                   {errors.problemDescription}
//                 </FormHelperText>
//               ) : null}
//             </FormControl>
//             <Button
//               type="submit"
//               variant="contained"
//               sx={{
//                 marginTop: "0.5rem",
//                 padding: "0.75rem",
//                 background: "green",
//                 boxShadow:
//                   "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px 0px, rgba(0, 0, 0, 0.09) 0px 4px 2px 0px, rgba(0, 0, 0, 0.09) 0px 8px 4px 0px, rgba(0, 0, 0, 0.09) 0px 16px 8px 0px, rgba(0, 0, 0, 0.09) 0px 32px 16px 0px",
//               }}
//             >
//               <Typography sx={{ color: "white" }}> Submit Request</Typography>
//             </Button>
//           </form>
//         )}
//       </Formik>
//     </Box>
//   );
// };

// export default Request;

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
import { useMutation } from "react-query";
import * as Yup from "yup";
import $axios from "../lib/api.instance";
import { useNavigate } from "react-router-dom";

const Request = () => {
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation({
    mutationKey: ["register-vehicle-request"],
    mutationFn: async (values) => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        console.log(values);
        return await $axios.post("/register/vehicle", values, config);
      } catch (error) {
        throw new Error(error.response?.data?.message || "An error occurred");
      }
    },
    onSuccess: (response) => {
      navigate("/Home");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
  return (
    <Box
      sx={{
        p: 3,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Formik
        initialValues={{
          vehicleCategory: "",
          customerName: "",
          vehicleNumber: "",
          vehicleBrand: "",
          payment: 0,
          ststus: "pending",
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
          customerName: Yup.string()
            .required("Customer Name is required")
            .trim()
            .max(15, "maximum character of customer name is 15 "),
          vehicleNumber: Yup.string()
            .required("Vehicle Number is required")
            .trim()
            .max(20, "maximum character of Vehicle Number is 20 "),
          vehicleBrand: Yup.string()
            .required("Vehicle Brand is required")
            .trim()
            .max(20, "maximum character of Vehicle Brand is 20 "),
          payment: Yup.number()
            .required("payment is required")
            .min(0, "Payment must be a positive number"),
          status: Yup.string().oneOf(
            ["Pending", "Completed"],
            "Status must be either Pending or Completed"
          ),
          problemDescription: Yup.string()
            .required("Description of actual problem is required")
            .trim()
            .max(100, "maximum character of Description is 100 "),
        })}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {({ handleSubmit, getFieldProps, touched, errors }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              // maxWidth: "400px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "8px",
              boxShadow:
                "0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "green", textAlign: "center" }}
            >
              Request Form To Mechanic
            </Typography>
            <FormControl fullWidth>
              <InputLabel>Vehicle Category</InputLabel>
              <Select
                label="Vehicle Category"
                required
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
                label="customer Name"
                required
                {...getFieldProps("customerName")}
              />
              {touched.customerName && errors.customerName ? (
                <FormHelperText error>{errors.customerName}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField
                label="Vehicle Number"
                required
                {...getFieldProps("vehicleNumber")}
              />
              {touched.vehicleNumber && errors.vehicleNumber ? (
                <FormHelperText error>{errors.vehicleNumber}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField
                label="Vehicle Brand"
                required
                {...getFieldProps("vehicleBrand")}
              />
              {touched.vehicleBrand && errors.vehicleBrand ? (
                <FormHelperText error>{errors.vehicleBrand}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField
                label="Payment"
                type="number"
                {...getFieldProps("payment")}
              />
              {touched.payment && errors.payment ? (
                <FormHelperText error>{errors.payment}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Form Status</InputLabel>
              <Select label="Status" disabled {...getFieldProps("status")}>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <TextField
                label="Problem Description"
                required
                {...getFieldProps("problemDescription")}
                multiline
                rows={4}
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
                boxShadow: " rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;",
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
