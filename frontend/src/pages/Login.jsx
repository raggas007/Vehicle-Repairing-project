import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("email is required")
            .trim()
            .lowercase()
            .max(20, "email must not be more than 20 character."),
          password: Yup.string()
            .required("password is required.")
            .trim()
            .min(6, "minimum six character is required.")
            .max(20, "maximum character should be not more than 20."),
        })}
        onSubmit={(values) => {
          console.log(values);
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
            <Typography variant="h5">Sign in</Typography>

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
            <Button
              type="submit"
              variant="contained"
              color="success"
              sx={{
                marginTop: "0.5rem",
                padding: "0.75rem",
                boxShadow:
                  "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px 0px, rgba(0, 0, 0, 0.09) 0px 4px 2px 0px, rgba(0, 0, 0, 0.09) 0px 8px 4px 0px, rgba(0, 0, 0, 0.09) 0px 16px 8px 0px, rgba(0, 0, 0, 0.09) 0px 32px 16px 0px",
              }}
            >
              Log In
            </Button>
            <Link to="/register">
              <Typography
                variant="h6"
                color="secondary"
                sx={{
                  marginTop: "0.6rem",
                  textAlign: "center",
                  display: "block",
                }}
              >
                New here? Register new Account.
              </Typography>
            </Link>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
