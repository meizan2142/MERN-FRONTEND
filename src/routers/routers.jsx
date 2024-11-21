import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../MainLayout/MainLayout";
import { LogIn } from "../Pages/LogIn/LogIn";
import { Register } from "../Pages/Register/Register";
import { Home } from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import DashBoard from "../Pages/DashBoard/DashBoard";

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
        children: []
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