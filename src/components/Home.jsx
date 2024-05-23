import { WebSiteLocation } from './DefaultData'
import { Helmet } from 'react-helmet-async'
import { useState, useContext, useEffect } from 'react'
import { ThemeContext } from './context/ThemeContext'


function Home(props) {
  // Setup Counter Button
  const [count, setCount] = useState(0);

  // Setup Theme Toggle Button
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
        <title>
          {
            props.documentTitle ?
            props.documentTitle :
            'Practice Project for React Basic Course.'
          }
        </title>
        <meta
          name='description'
          content={
            props.documentDescription ?
            props.documentDescription :
            'page for practicing react for Saqib Islam.'
          }
          />
        <link rel="canonical" href={props.documentURL ? props.documentURL : WebSiteLocation() } />
      </Helmet>

      <h1>{props.heading ? props.heading : 'Practice Project for React Basic Course.'}</h1>

      <h2 className="mt-5">Press Counter Buttons</h2>
      <button className={'btn btn-lg ' + buttonStyle} onClick={() => setCount(count + 1)}>
        count is {count}
      </button>

      <h2 className="mt-5">Toggle Color Theme Button</h2>
      <button className={'btn btn-lg ' + buttonStyle} onClick={toggleTheme}>
        { props.text ? props.text : 'Change Color!'}
      </button>
    </>
  )
}

export default Home
