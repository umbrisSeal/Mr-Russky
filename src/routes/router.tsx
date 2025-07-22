import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "./HomePage";
import WordDatabasePage from "./WordDatabasePage";
import MainLayout from "../components/layout/MainLayout";


export const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/vocabulary', element: <WordDatabasePage /> }
        ]
    },
    { path: '*', element: <App /> }                         // For 404 error.

], {
    basename: import.meta.env.MODE === 'production' ? '/Mr-Russky/' : '/'
});
