import { useState } from 'react'

function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <button className="btn btn-lg btn-outline-primary" onClick={() => setCount(count + 1)}>
      count is {count}
    </button>
  )
}

export default CounterButton
