// import {
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import { format } from "date-fns";

// const VehicleRequestDetails = (props) => {
//   const formattedDate = format(new Date(props.updatedAt), "PPpp");
//   return (
//     <Box
//       sx={{
//         width: "1200px",
//         marginLeft: "15rem",
//         padding: "1rem",
//         background: "Yellow",
//         boxShadow:
//           " rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
//       }}
//     >
//       <TableContainer
//         sx={{
//           boxShadow:
//             " rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
//         }}
//       >
//         <Table sx={{ background: "Purple" }}>
//           <TableHead>
//             <TableRow>
//               <TableCell align="center">
//                 <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                   Vehicle Owner Name
//                 </Typography>
//               </TableCell>
//               <TableCell align="center">
//                 <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                   Vehicle Number
//                 </Typography>
//               </TableCell>
//               <TableCell align="center">
//                 <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                   Total Amount
//                 </Typography>
//               </TableCell>
//               <TableCell align="center">
//                 <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                   Last Updated Time
//                 </Typography>
//               </TableCell>
//               <TableCell align="center">
//                 <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                   Problem Description
//                 </Typography>
//               </TableCell>
//               <TableCell align="center">
//                 <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                   Current Status
//                 </Typography>
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <TableRow>
//               <TableCell align="center">
//                 <Typography variant="h6">{props.customerName}</Typography>
//               </TableCell>
//               <TableCell align="center">
//                 <Typography variant="h6">{props.vehicleNumber}</Typography>
//               </TableCell>
//               <TableCell align="center">
//                 <Typography variant="h6">Rs.{props.payment}</Typography>
//               </TableCell>
//               <TableCell align="center">
//                 <Typography variant="h6">{formattedDate}</Typography>
//               </TableCell>
//               <TableCell align="center">
//                 <Typography variant="h6">{props.problemDescription}</Typography>
//               </TableCell>
//               <TableCell align="center">
//                 <Typography variant="h6">{props.status}</Typography>
//               </TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default VehicleRequestDetails;

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { format } from "date-fns";

const VehicleRequestDetails = (props) => {
  const formattedDate = format(new Date(props.updatedAt), "PPpp");
  return (
    <Box
      sx={{
        width: "1300px",
        marginLeft: "10rem",
        padding: "1rem",
        background: "green",
        boxShadow:
          " rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
      }}
    >
      <TableContainer
        sx={{
          boxShadow:
            " rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
        }}
      >
        <Table sx={{ background: "Gray" }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Vehicle Owner Name
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Vehicle Number
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Total Amount
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Last Updated Time
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Problem Description
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Current Status
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <Typography variant="h6" sx={{ whiteSpace: "nowrap" }}>
                  {props.customerName}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" sx={{ whiteSpace: "nowrap" }}>
                  {props.vehicleNumber}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" sx={{ whiteSpace: "nowrap" }}>
                  Rs.{props.payment}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" sx={{ whiteSpace: "nowrap" }}>
                  {formattedDate}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" sx={{ whiteSpace: "nowrap" }}>
                  {props.problemDescription}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6" sx={{ whiteSpace: "nowrap" }}>
                  {props.status}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default VehicleRequestDetails;
