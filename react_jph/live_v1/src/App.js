import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './assets/scss/App.scss';

export default function App() {
  const navLinks = [
    { to: '/users', label: 'Users' },
    { to: '/posts', label: 'Posts' },
    { to: '/comments', label: 'Comments' },
    { to: '/albums', label: 'Albums' }
  ];

  return (
    <div className="app">
      <nav className="navigation">
        <h1>Dashboard</h1>
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `navigation__link ${isActive ? 'navigation__link--active' : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
