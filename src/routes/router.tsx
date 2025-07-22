import { createBrowserRouter } from "react-router";
import App from "../App";
//import HomePage from "./homePage";


export const router = createBrowserRouter([
    { path: '/home', element: <App /> },
    { path: '*', element: <App /> }                         // For 404 error.

], {
    basename: import.meta.env.MODE === 'production' ? '/Mr-Russky/' : '/'
});
