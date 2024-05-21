// ThemeContext.js
import { createContext, useState } from 'react';

// Create a new context
export const ThemeContext = createContext();

// Create a provider for the context
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Initial theme is 'light'

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Value object that holds the state and any functions to update the state
  const value = {
    theme,
    toggleTheme,
  };

  // Provide the value to the children components
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
