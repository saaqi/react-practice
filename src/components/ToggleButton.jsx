import { useState } from 'react'

function ToggleButton() {
  const first = 'Yes!';
  const second = 'No!';
  const [greeting, setGreeting] = useState(first);
  function setStat() {
    (greeting === first ? setGreeting(second) : setGreeting(first));
  }

  return (
    <button className="btn btn-lg btn-outline-dark" onClick={setStat}>
      {greeting}
    </button>
  )
}

export default ToggleButton
