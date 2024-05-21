import { Link } from 'react-router-dom'

const NavLink = [
  {
    link: '/',
    text: 'Home'
  },
  {
    link: '/counter-button',
    text: 'Counter Button'
  },
  {
    link: '/theme-toggle-button',
    text: 'Theme Toggle Button'
  },
].map((item, index) => {
  return {
    ...item,
    id: `navlink-${index}`
  };
});

const printLinks = (item) => {
  const {
    link = '',
    text = '',
    id = ''
  } = item;
  return (
    <li key={id} id={id}>
      <Link to={link} className="nav-item btn btn-info">
        {text}
      </Link>
    </li>
  )
}

function Nav() {
  return (
    <nav className="navigation d-flex justify-content-center">
      <ul className='nav list-unstyled d-flex gap-3 w-auto justify-content-center align-items-center mb-3 py-3 px-4 bg-primary rounded shadow'>
        {NavLink.map(printLinks)}
      </ul>
    </nav>
  )
}

export default Nav