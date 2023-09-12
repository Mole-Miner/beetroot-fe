import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import State from '@features/State';
import Reducer from '@features/Reducer';

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
        element: <State />
      },
      {
        path: 'reducer',
        element: <Reducer />
      }
    ]
  }
]);

export default router;
