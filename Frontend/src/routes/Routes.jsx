import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage.jsx";
import ChatPage from "../pages/ChatPage.jsx";

const routes = [
    {
        path: "/",
        element: <LoginPage/>,
    },
    {
        path: "/chat",
        element: <ChatPage />,
    },
];


export const router = createBrowserRouter(routes);
