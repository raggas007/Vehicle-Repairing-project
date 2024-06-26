// import * as React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";
// import CustomAvatar from "./CustomAvatar";
// import LogoutConfirmationDialog from "./logoutConfirmationDialog";
// import { Stack } from "@mui/material";

// const drawerWidth = 240;
// const navItems = [
//   {
//     id: 1,
//     name: "Home",
//     path: "/home",
//   },
// ];

// const Header = (props) => {
//   const navigate = useNavigate();
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const userRole = localStorage.getItem("userRole");

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         VEHICLE REPAIRING SYSTEM
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.id} disablePadding>
//             <ListItemButton
//               sx={{ textAlign: "center" }}
//               onClick={() => {
//                 navigate(item.path);
//               }}
//             >
//               <ListItemText primary={item.name} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar component="nav" sx={{ background: "green" }}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{
//               flexGrow: 1,
//               display: { xs: "none", sm: "block" },
//             }}
//           >
//             VEHICLE REPAIRING SYSTEM
//           </Typography>
//           <Box sx={{ display: { xs: "none", sm: "block" } }}>
//             {navItems.map((item) => (
//               <Button
//                 key={item.id}
//                 sx={{ color: "#fff" }}
//                 onClick={() => {
//                   navigate(item.path);
//                 }}
//               >
//                 <Typography>{item.name}</Typography>
//               </Button>
//             ))}
//             {userRole === "Customer" && (
//               <Box sx={{}}>
//                 <Button
//                   onClick={() => {
//                     navigate("/make-request");
//                   }}
//                 >
//                   <Typography variant="subtitle1" sx={{ color: "white" }}>
//                     Make REQUEST
//                   </Typography>
//                 </Button>
//                 <Button
//                   onClick={() => {
//                     navigate("/about-us");
//                   }}
//                 >
//                   <Typography variant="subtitle1" sx={{ color: "white" }}>
//                     AboutUs
//                   </Typography>
//                 </Button>
//               </Box>
//             )}
//             {userRole === "Mechanic" && (
//               <Button
//                 onClick={() => {
//                   navigate("/view-request");
//                 }}
//               >
//                 <Typography variant="subtitle1" sx={{ color: "white" }}>
//                   VIEW REQUEST
//                 </Typography>
//               </Button>
//             )}
//           </Box>
//           <CustomAvatar />
//           <LogoutConfirmationDialog />
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// };

// export default Header;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import CustomAvatar from "./CustomAvatar";
import LogoutConfirmationDialog from "./logoutConfirmationDialog";
import { Stack } from "@mui/material";

const drawerWidth = 240;

const Header = (props) => {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const userRole = localStorage.getItem("userRole");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Define navigation items based on user role
  const navItems =
    userRole === "Customer"
      ? [
          { id: 1, name: "Home", path: "/home" },
          { id: 2, name: "Make-Request", path: "/make-request" },
          { id: 3, name: "About-Us", path: "/about-us" },
        ]
      : [
          { id: 1, name: "Home", path: "/home" },
          { id: 2, name: "View-Request", path: "/view-request" },
        ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        VEHICLE REPAIRING SYSTEM
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                navigate(item.path);
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "Blue" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            VEHICLE REPAIRING SYSTEM
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Stack direction="row" spacing={2}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  sx={{ color: "#fff" }}
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <Typography>{item.name}</Typography>
                </Button>
              ))}
            </Stack>
            <CustomAvatar />
            <LogoutConfirmationDialog />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
