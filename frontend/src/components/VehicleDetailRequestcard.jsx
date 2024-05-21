import * as React from "react";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import RequestList from "./RequestList";

const VehicleDetailRequestCard = (props) => {
  return (
    <Box
      sx={{
        width: "1200px",
        marginLeft: "5rem",
        padding: "1rem",
        background: "Yellow",
        boxShadow:
          " rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
      }}
    >
      <Typography variant="h4" color="Success">
        List of the Vehicle Request
      </Typography>

      <TableContainer
        sx={{
          boxShadow:
            " rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
        }}
      >
        <Table sx={{ background: "Purple" }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Vehicle Category
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Customer Name
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Vehicle Number
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <Typography variant="h6">{props.vehicleCategory}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">{props.customerName}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">{props.vehicleNumber}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default VehicleDetailRequestCard;
