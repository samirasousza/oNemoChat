import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage.jsx";

const routes = [
    {
        path: "/",
        element: <LoginPage/>,
    },
];


export const router = createBrowserRouter(routes);
