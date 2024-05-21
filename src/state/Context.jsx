import { createContext } from 'react';

const ToggleContext = createContext()

const ToggleButtonContext = () => {
  const first = 'Yes!';
  const second = 'No!';
  const [greeting, setGreeting] = useState(first);
  function setStat() {
    (greeting === first ? setGreeting(second) : setGreeting(first));
  }
}

export { ToggleContext };