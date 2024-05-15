import { useState } from 'react'
import './App.css'

function Toggle() {
  const first = 'Yes!';
  const second = 'No!';
  const [greeting, setGreeting] = useState(first);
  function setStat() {
    (greeting === first ? setGreeting(second) : setGreeting(first));
  }

  return (
    <>
      <div className="card">
        <button onClick={setStat}>
          {greeting}
        </button>
      </div>
    </>
  )
}

export default Toggle
