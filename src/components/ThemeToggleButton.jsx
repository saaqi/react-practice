// ToggleButton.js
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function ThemeToggleButton(props) {
  // Consume the theme context using useContext hook
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Style the button based on the current theme
  const buttonStyle = [
    theme === 'light' ? 'btn-outline-secondary' : 'btn-dark',
  ];

  return (
    <button className={'btn btn-lg ' + buttonStyle} onClick={toggleTheme}>
      { props.text ? props.text : 'Change Color!'}
    </button>
  );
}

export default ThemeToggleButton;
