import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home";

function App() {

    const router = createBrowserRouter(createRoutesFromElements([
        <Route path="*" element={<Home />} />
    ]));

    return(
        <RouterProvider router={router} />
    )
}

export default App
