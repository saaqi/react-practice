import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ThemeContext } from './context/ThemeContext'



import logo from '../images/logo.png'

const NavLink = [
  {
    link: '/',
    text: 'Home'
  },
  {
    link: '/calculator',
    text: 'Calculator'
  },
].map((item, index) => {
  return {
    ...item,
    id: `navlink-${index}`
  }
})


function Nav() {

// Setup Theme Toggle Button
  // Consume the theme context using useContext hook
  const { theme, toggleTheme } = useContext(ThemeContext);
  // Style the button based on the current theme
  const modeButton = theme === 'light' ? 'btn-outline-dark' : 'btn-outline-light'
  const navItems = theme === 'light' ? 'btn-primary' : 'btn-warning'
  // Navbar Styles
  const navStyle = theme === 'light' ? 'bg-warning' : 'bg-dark'

  useEffect(() => {
    // Define the classes to add based on the theme
    const body = document.body
    const navBar = document.querySelector('.navbar')
    if (theme === 'dark') {
      body.classList.add('bg-dark', 'text-bg-dark')
    }
    else {
      body.classList.remove('bg-dark', 'text-bg-dark')
    }
    // Cleanup function to remove the classes when theme changes
    // return () => {
    //   body.classList.remove('bg-dark', 'text-bg-dark')
    //   navBar.classList.remove('bg-dark', 'text-bg-dark')
    // };
  }, [theme]);


  const printLinks = (item) => {
    const {
      link = '',
      text = '',
      id = ''
    } = item;
    return (
      <li key={id} id={id}>
        <Link to={link} className={"nav-item fw-medium btn " + navItems}>
          {text}
        </Link>
      </li>
    )
  }

  return (
    <div className="contianer">
      <nav className={navStyle + " navbar shadow-sm py-0"}>
        <div className="container d-flex flex-column flex-sm-row">
          <Link className="navbar-brandg" to="/">
            <img src={logo}  alt="logo" height='60' />
          </Link>
          <ul className="navbar-nav gap-2 align-items-center justify-content-center flex-wrap flex-row mb-4 mb-sm-0 mt-2 mt-sm-0">
            {NavLink.map(printLinks)}
            <li key="dark-mode-button">
              <button className={'btn ' + modeButton} onClick={toggleTheme}>
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
