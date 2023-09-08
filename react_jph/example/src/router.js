import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Users from '@features/Users';
import Posts from '@features/Posts';
import Comments from '@features/Comments';
import NotFoundPage from "./pages/NotFoundPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Navigate to='/users' />
      },
      {
        path: '/users',
        element: <Users />
      },
      {
        path: '/posts',
        element: <Posts />
      },
      {
        path: '/comments',
        element: <Comments />
      },
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);

export default router;
