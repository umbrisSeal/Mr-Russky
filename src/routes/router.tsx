import { createBrowserRouter } from "react-router";
import App from "../App";



export const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '*', element: <App /> }     // For 404 error.
]);