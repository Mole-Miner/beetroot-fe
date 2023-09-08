import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App';
import './assets/scss/styles.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./features/Users";
import Posts from "./features/Posts";
import Comments from "./features/Comments";

const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '',
                element: <Users />
            },
            {
                path: 'posts',
                element: <Posts />
            },
            {
                path: 'comments',
                element: <Comments />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
