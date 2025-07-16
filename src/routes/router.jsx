import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../layouts/MainLayoutes";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import FindTutors from "../pages/FindTutors";
import AddTutorials from "../pages/AddTutorials";
import MyBookedTutors from "../pages/MyBookedTutors";
import MyTutorials from "../pages/MyTutorials";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutes />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/find-tutors",
        element: <FindTutors />,
      },
      {
        path: "/find-tutors/:category",
        element: <FindTutors />,
      },
      {
        path: "/add-tutorials",
        element: <AddTutorials />,
      },
      {
        path: "/my-booked-tutorials",
        element: <MyBookedTutors />,
      },
      {
        path: "/my-tutorials",
        element: <MyTutorials />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/tutor/:details",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
