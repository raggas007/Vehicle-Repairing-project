import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  LinearProgress,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import $axios from "../lib/api.instance";
import { useMutation } from "react-query";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const { isLoading, mutate } = useMutation({
    mutationKey: ["register-user"],
    mutationFn: async (values) => {
      console.log(values);
      return await $axios.post("/register/user", values);
    },
    onSuccess: (response) => {
      navigate("/login");
    },
    onError: (error) => {
      console.log("error happned");
    },
  });

  return (
    <Box>
      {isLoading && <LinearProgress color="secondary" />}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          address: "",
          role: "",
          skills: "",
          phoneNumber: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required("first name is required.")
            .trim()
            .max(55, " first name must not be more than 55 character."),
          lastName: Yup.string()
            .required("last name is required.")
            .trim()
            .max(55, "last name must not be more than 55 character."),
          email: Yup.string()
            .email()
            .required("email is required")
            .trim()
            .lowercase()
            .max(20, "email must not be more than 20 character."),
          password: Yup.string()
            .required("password is required.")
            .trim()
            .min(6, "minimum six character is required.")
            .max(20, "maximum character should be not more than 20."),
          address: Yup.string()
            .required("adress is required.")
            .trim()
            .max(55, "address should not be more than 55 character"),
          role: Yup.string()
            .oneOf(["Customer", "Mechanic"])
            .required("role is required"),
          skills: Yup.string().nullable().trim(),
          phoneNumber: Yup.number().required("phone number is required."),
        })}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {({ handleSubmit, getFieldProps, errors, touched }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "2rem",
              width: "330px",
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            }}
          >
            <Typography variant="h5">Sign Up</Typography>
            <FormControl>
              <TextField label="first Name" {...getFieldProps("firstName")} />
              {touched.firstName && errors.firstName ? (
                <FormHelperText error>{errors.firstName}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField label="Last Name" {...getFieldProps("lastName")} />
              {touched.lastName && errors.lastName ? (
                <FormHelperText error>{errors.lastName}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField label="Email" {...getFieldProps("email")} />
              {touched.email && errors.email ? (
                <FormHelperText error>{errors.email}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                {...getFieldProps("password")}
              />
              {touched.password && errors.password ? (
                <FormHelperText error>{errors.password}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField label="Address" {...getFieldProps("address")} />
              {touched.address && errors.address ? (
                <FormHelperText error>{errors.address}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select label="Role" {...getFieldProps("role")}>
                <MenuItem value="Mechanic">Mechanic</MenuItem>
                <MenuItem value="Customer">Customer</MenuItem>
              </Select>
              {touched.role && errors.role ? (
                <FormHelperText error>{errors.role}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField label="Skills" {...getFieldProps("skills")} />
              {touched.skills && errors.skills ? (
                <FormHelperText error>{errors.skills}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <TextField
                label="Phone Number"
                type="number"
                {...getFieldProps("phoneNumber")}
              />
              {touched.phoneNumber && errors.phoneNumber ? (
                <FormHelperText error>{errors.phoneNumber}</FormHelperText>
              ) : null}
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              sx={{
                marginTop: "0.5rem",
                padding: "0.75rem",
                boxShadow:
                  "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px 0px, rgba(0, 0, 0, 0.09) 0px 4px 2px 0px, rgba(0, 0, 0, 0.09) 0px 8px 4px 0px, rgba(0, 0, 0, 0.09) 0px 16px 8px 0px, rgba(0, 0, 0, 0.09) 0px 32px 16px 0px",
              }}
            >
              Register
            </Button>
            <Link to="/login">
              <Typography
                variant="h6"
                sx={{
                  marginTop: "0.6rem",
                  textAlign: "center",
                  display: "block",
                  color: "green",
                }}
              >
                Already registered? go to login.
              </Typography>
            </Link>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Register;
