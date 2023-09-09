import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import ErrorPage from '@js/pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Navigate to="/users" />
      },
      {
        path: '/posts',
        lazy: () => import('@js/features/Posts')
      },
      {
        path: '/users',
        lazy: () => import('@js/features/Users')
      },
      {
        path: '/comments/:commentId',
        lazy: () => import('@js/features/comments/Comment')
      },
      {
        path: '/comments',
        lazy: () => import('@js/features/comments/Comments')
      }
    ]
  },
  {
    path: '*',
    lazy: () => import('@js/pages/NotFoundPage')
  }
]);

export default router;
