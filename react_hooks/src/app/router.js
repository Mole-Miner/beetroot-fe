import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <p>Error has occurred</p>,
    children: [
      {
        index: true,
        element: <Navigate to="state" />
      },
      {
        path: 'state',
        lazy: () => import('@features/State')
      },
      {
        path: 'reducer',
        lazy: () => import('@features/Reducer')
      },
      {
        path: 'context',
        lazy: () => import('@features/Context')
      },
      {
        path: 'effect',
        lazy: () => import('@features/Effect')
      },
      {
        path: 'ref',
        lazy: () => import('@features/Ref')
      },
      {
        path: 'memo',
        lazy: () => import('@features/Memo')
      }
    ]
  }
]);

export default router;
