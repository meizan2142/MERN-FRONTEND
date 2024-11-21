import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../MainLayout/MainLayout";
import { LogIn } from "../Pages/LogIn/LogIn";
import { Register } from "../Pages/Register/Register";
import { Home } from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import DashBoard from "../Pages/DashBoard/DashBoard";
import AllUsers from "../Pages/DashBoard/DashBoardComponents/Admin/AllUsers";
import AddProducts from "../Pages/DashBoard/DashBoardComponents/Seller/AddProducts";
import MyProducts from "../Pages/DashBoard/DashBoardComponents/Seller/MyProducts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/products',
                element: <Products/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashBoard />,
        children: [
            // Admin Routes are given below
            {
                path: '/dashboard/users',
                element: <AllUsers/>
            },
            // Seller routes are given below
            {
                path: '/dashboard/addproducts',
                element: <AddProducts/>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts/>
            },
        ]
    },
    {
        path: '/login',
        element: <LogIn/>
    },
    {
        path: '/register',
        element: <Register/>
    }
]);