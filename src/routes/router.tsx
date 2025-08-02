import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "./HomePage";
import WordDatabasePage from "./WordDatabasePage";
import MainLayout from "../components/layout/MainLayout";
import LessonPage from "./LessonPage";
import ResultsPage from "./ResultsPage";
import { lessonLoader } from "./loaders/lessonLoader";


export const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/vocabulary', element: <WordDatabasePage /> },
            { path: '/lesson', element: <LessonPage />, loader: lessonLoader },
            { path: '/results', element: <ResultsPage /> }
        ]
    },
    { path: '*', element: <App /> }                         // For 404 error.

], {
    basename: import.meta.env.MODE === 'production' ? '/Mr-Russky/' : '/'
});
