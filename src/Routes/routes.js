import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Course from "../Pages/Course/Course";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Profile from "../Pages/Profile/Profile";
import Product from "../Pages/Product/Product";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/course',
                element: <Course />
            },
            {
                path: '/product',
                element: <Product />
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            }

        ]
    }
])