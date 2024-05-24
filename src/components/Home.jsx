import { WebSiteLocation } from './DefaultData'
import { Helmet } from 'react-helmet-async'
import { useState, useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'


function Home(props) {
  // Setup Counter Button
  const [count, setCount] = useState(0);

  // Setup Theme Toggle Button
  // Consume the theme context using useContext hook
  const { theme } = useContext(ThemeContext);
  // Style the button based on the current theme
  const buttonStyle = theme === 'light' ? 'btn-outline-dark' : 'btn-outline-light'

  return (
    <>
      <Helmet>
        <title>{props.documentTitle ? props.documentTitle : 'Practice Project for React.'}</title>
        <meta
          name='description'
          content={
            props.documentDescription ? props.documentDescription : 'Practice page for react for Saqib Islam.'
          }
        />
        <link rel="canonical" href={props.documentURL ? props.documentURL : WebSiteLocation()} />
      </Helmet>

      <h1>{props.heading ? props.heading : 'Practice Project for React.'}</h1>
      <h2 className="mt-5">Press Counter Buttons</h2>
      <button className={'btn btn-lg ' + buttonStyle} onClick={() => setCount(count + 1)}>
        Pressed {count}
      </button>
    </>
  )
}

export default Home
