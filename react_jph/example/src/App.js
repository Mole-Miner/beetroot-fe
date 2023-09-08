import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '@scss/App.scss';

export default function App() {
  const navLinks = [
    { path: '/users', label: 'Users'},
    { path: '/posts', label: 'Posts' },
    { path: '/comments', label: 'Comments' },
  ];

  return (
      <main className="app">
          <aside className="navigation">
              <h1>Dashboard</h1>
              {navLinks.map(({ path, label }) => (
                  <NavLink
                      key={path}
                      to={path}
                      className={({ isActive }) =>
                          `navigation__link ${isActive ? 'navigation__link--active' : ''}`
                      }
                  >
                      {label}
                  </NavLink>
              ))}
          </aside>
          <section className="outlet">
             <Outlet />
          </section>
      </main>
  );
}
