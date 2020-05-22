import React from 'react';
import {ThemeProvider} from 'styled-components';
import {createContext, useState} from 'react';
import App from './App';
import themes from './configs/themes';

const DEFAULT_THEME = 'light';

export const ThemeProviderContext = createContext({
  setTheme: () => {},
  theme: DEFAULT_THEME,
});

const Providers = () => {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  return (
    <ThemeProviderContext.Provider value={{setTheme, theme}}>
      <ThemeProvider theme={themes[theme]}>
        <App />
      </ThemeProvider>
    </ThemeProviderContext.Provider>
  );
};

export default Providers;
