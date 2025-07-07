import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayoutes from '../layouts/MainLayoutes';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import FindTutors from '../pages/FindTutors';
import AddTutorials from '../pages/AddTutorials';
import MyBookedTutors from '../pages/MyBookedTutors';
import MyTutorials from '../pages/MyTutorials';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayoutes />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/find-tutors",
                element: <FindTutors />
            },
            {
                path: "/add-tutorials",
                element: <AddTutorials />
            },
            {
                path: "/my-booked-tutorials",
                element: <MyBookedTutors />
            },
            {
                path: "/my-tutorials",
                element: <MyTutorials />
            },

        ]
    }
])

export default router;