import { useState } from 'react'
import Header from './Header.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState('not yet been Clicked!');
  function setStat() {

    (greeting === 'not yet been Clicked!' ?
      setGreeting('now been clicked!!') :
      setGreeting('not yet been Clicked!'));
    }

  return (
    <>
      <Header heading="Practice React." />
      <button onClick={setStat}>
        The button has {greeting}
      </button>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
