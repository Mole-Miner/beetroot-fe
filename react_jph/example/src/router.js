import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        index: true,
        element: <Navigate to="/users" />
      },
      {
        path: '/users',
        lazy: () => import('@features/Users')
      },
      {
        path: '/posts',
        lazy: () => import('@features/Posts')
      },
      {
        path: '/comments',
        lazy: () => import('@features/Comments')
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);

export default router;
