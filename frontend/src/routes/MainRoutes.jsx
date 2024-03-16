import React from "react";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";

const MainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "home", element: <Home /> }],
  },
];

export default MainRoutes;
