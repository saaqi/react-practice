// ToggleButton.js
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { Helmet } from 'react-helmet-async';
import { WebSiteLocation, WebSiteTitle } from './DefaultData'


function ThemeToggleButton(props) {
  // Consume the theme context using useContext hook
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Style the button based on the current theme
  const buttonStyle = theme === 'light' ? 'btn-outline-secondary' : 'btn-dark'

  return (
    <>
      <Helmet>
        <title>{
          props.documentTitle ?
            props.documentTitle :
            'Toggle Color Theme Button - ' + WebSiteTitle()
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

      <button className={'btn btn-lg ' + buttonStyle} onClick={toggleTheme}>
        { props.text ? props.text : 'Change Color!'}
      </button>
    </>
  );
}

export default ThemeToggleButton;
