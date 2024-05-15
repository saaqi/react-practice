import './App.css'

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
  return <li key={key} id={key}><a href={link}>{text}</a></li>;
}

function Nav() {
  return (
    <nav>
      <ul className='nav'>
        {NavLink.map(printLinks)}
      </ul>
    </nav>
  )
}

export default Nav