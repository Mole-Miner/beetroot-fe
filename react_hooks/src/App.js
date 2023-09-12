import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <>
      <header>
        <Link to="state">State</Link>
        <Link to="reducer">Reducer</Link>
        <Link to="context">Context</Link>
        <Link to="effect">Effect</Link>
        <Link to="ref">Ref</Link>
        <Link to="memo">Memo</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
