import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <header>
        <Link to="state">State</Link>
        <Link to="reducer">Reducer</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
