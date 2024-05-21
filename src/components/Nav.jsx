import { Link } from 'react-router-dom'

const NavLink = [
  {
    link: '/',
    text: 'Home',
    key: '1'
  },
  {
    link: '/counter-button',
    text: 'Counter Button',
    key: '2'
  },
  {
    link: '/toggle-button',
    text: 'Toggle Button',
    key: '3'
  },
].map((item, index) => {
  return {
    ...item,
    key: `navlink-${index}`,
  };
});

const printLinks = (item) => {
  const {
    link = '',
    text = '',
    key = ''
  } = item;
  return <li key={key} id={key}><Link to={link} className="nav-item btn btn-info">{text}</Link></li>;
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