
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import AddReview from '../pages/AddReview';
import AllReviews from '../pages/AllReviews';
import HomeLayout from '../layouts/HomeLayout';
import AuthLayout from '../layouts/AuthLayout';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "addReview",
                element: <AddReview />,

            },
            {
                path: "allReviews",
                element: <AllReviews />

            }

        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/auth/login",
                element: <LogIn />
            },
            {
                path: "/auth/register",
                element: <Register />
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage />
    },

]);
export default router;