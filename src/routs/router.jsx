
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
import MyReviews from '../pages/MyReviews';
import PrivateRoute from './PrivateRoute';

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
                path: "/add-review",

                element: (<PrivateRoute><AddReview></AddReview></PrivateRoute>),


            },
            {
                path: "/all-reviews",
                element: <AllReviews />

            },
            {
                path: "/register",
                element: <Register></Register>

            },
            {
                path: "/login",
                element: <LogIn />
            },
            {
                path: "/my-reviews",
                element: (<PrivateRoute>
                    <MyReviews />
                </PrivateRoute>),

            },

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