// ToggleButton.js
import { useContext, useEffect } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { Helmet } from 'react-helmet-async';
import { WebSiteLocation, webSiteTitle } from './DefaultData'


function ThemeToggleButton(props) {
  // Consume the theme context using useContext hook
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Style the button based on the current theme
  const buttonStyle = theme === 'light' ? 'btn-dark' : 'btn-light'

    useEffect(() => {
    // Define the classes to add based on the theme
    const classesToAdd = theme === 'light' ? ['bg-light', 'text-bg-light'] : ['bg-dark', 'text-bg-dark'];

    // Add each class to the body
    classesToAdd.forEach(cls => document.body.classList.add(cls));

    // Cleanup function to remove the classes when theme changes
    return () => {
      classesToAdd.forEach(cls => document.body.classList.remove(cls));
    };
  }, [theme]);

  return (
    <>
      <Helmet>
        <title>{
          props.documentTitle ?
            props.documentTitle :
            'Toggle Color Theme Button - ' + webSiteTitle
        }</title>
        <meta
          name='description'
          content={
            props.documentDescription ?
              props.documentDescription :
              'This page is written by Saqqi for Toggle Color Theme Button.'
          }
        />
        <link rel="canonical" href={props.documentURL ? props.documentURL : WebSiteLocation() } />
      </Helmet>

      <h1 className="h2">
        {
          props.documentTitle ?
          props.documentTitle :
          'Toggle Color Theme Button'
        }
      </h1>

      <button className={'btn btn-lg ' + buttonStyle} onClick={toggleTheme}>
        { props.text ? props.text : 'Change Color!'}
      </button>
    </>
  );
}

export default ThemeToggleButton;
