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
import TutorDetails from "../pages/TutorDetails";
import Update from "../pages/Update";

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
        element: (
          <PrivateRoute>
            <AddTutorials />,
          </PrivateRoute>
        ),
      },
      {
        path: "/my-booked-tutorials",
        element: (
          <PrivateRoute>
            <MyBookedTutors />,
          </PrivateRoute>
        ),
      },
      {
        path: "/my-tutorials",
        element: (
          <PrivateRoute>
            <MyTutorials />,
          </PrivateRoute>
        ),
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
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />,
          </PrivateRoute>
        ),
      },
      {
        path: "/tutor/:details",
        element: (
          <PrivateRoute>
            <TutorDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-mu-ten-68.vercel.app/tutorial/${params?.details}`),
      },
    ],
  },
]);

export default router;
