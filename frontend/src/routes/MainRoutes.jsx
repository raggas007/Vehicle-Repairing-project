import React from "react";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Request from "../pages/Request";
import ViewRequest from "../pages/ViewRequest";

const MainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "home", element: <Home /> },
      {
        path: "make-request",
        element: <Request />,
      },
      {
        path: "view-request",
        element: <ViewRequest />,
      },
    ],
  },
];

export default MainRoutes;
