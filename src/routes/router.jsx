import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayoutes from '../layouts/MainLayoutes';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import FindTutors from '../pages/FindTutors';

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

        ]
    }
])

export default router;