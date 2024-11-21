import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../MainLayout/MainLayout";
import { LogIn } from "../Pages/LogIn/LogIn";
import { Register } from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
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