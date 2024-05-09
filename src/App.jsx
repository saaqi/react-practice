import { useState } from 'react'
import Header from './Header.jsx'
import './App.css'

function App() {
  const first = 'Yes!';
  const second = 'No!';
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState(first);
  function setStat() {
    (greeting === first ? setGreeting(second) : setGreeting(first));
  }

  return (
    <>
      <Header heading="Practice React." />
      <button onClick={setStat}>
        {greeting}
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
