import React, { createContext, useContext, useState } from 'react';
import '@scss/theme.scss';

const ThemeContext = createContext(null);

function Card() {
  const theme = useContext(ThemeContext);

  return (
    <div className={`card card--${theme}`}>
      <h4>Title</h4>
      <p>Description</p>
      <button>Like</button>
    </div>
  );
}

function Grid() {
  return (
    <section className="grid">
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}

function Context() {
  const [theme, setTheme] = useState('light');

  function changeTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={changeTheme}>Component theme: {theme}</button>
      <Grid />
    </ThemeContext.Provider>
  );
}

export { Context as Component };
export default Context;
