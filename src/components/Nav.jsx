import { Link } from 'react-router-dom'

const NavLink = [
  {
    link: '/react-practice/',
    text: 'Home'
  },
  {
    link: '/react-practice/counter-button',
    text: 'Counter Button'
  },
  {
    link: '/react-practice/theme-toggle-button',
    text: 'Theme Toggle Button'
  },
  {
    link: '/react-practice/calculator',
    text: 'Calculator'
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
    <div className="contianer my-5">
      <nav className="navigation d-flex justify-content-center">
        <ul className='nav list-unstyled d-flex gap-3 w-auto justify-content-center align-items-center mb-3 py-3 px-4 bg-primary rounded shadow'>
          {NavLink.map(printLinks)}
        </ul>
      </nav>
    </div>
  )
}

export default Nav