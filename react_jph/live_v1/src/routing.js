import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Users from './features/Users';
import Posts from './features/Posts';
import Comments from './features/Comments';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Users />
      },
      {
        path: '/posts',
        element: <Posts />
      },
      {
        path: '/comments',
        element: <Comments />
      }
    ]
  }
]);

export default router;
