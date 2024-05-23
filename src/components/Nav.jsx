import { Link } from 'react-router-dom'
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

const printLinks = (item) => {
  const {
    link = '',
    text = '',
    id = ''
  } = item;
  return (
    <li key={id} id={id}>
      <Link to={link} className="nav-item fw-medium btn btn-primary">
        {text}
      </Link>
    </li>
  )
}

function Nav() {
  return (
    <div className="contianer">
      <nav className="navbar navbar-expand-lg bg-warning shadow-sm py-0">
        <div className="container d-flex flex-column flex-sm-row">
          <Link className="navbar-brand text-bg-warning" to="/">
            <img src={logo}  alt="logo" height='60' />
          </Link>
          <ul className="navbar-nav gap-2 align-items-center justify-content-center flex-wrap flex-row mb-4 mb-sm-0">
            {NavLink.map(printLinks)}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
