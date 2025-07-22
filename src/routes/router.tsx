import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "./HomePage";


export const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '*', element: <App /> }                         // For 404 error.

], {
    basename: import.meta.env.MODE === 'production' ? '/Mr-Russky/' : '/'
});
