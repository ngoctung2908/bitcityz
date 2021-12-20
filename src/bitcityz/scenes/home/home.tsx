import React, { useState } from 'react'
import '../../assets/index.css'

function Home() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button type="button" className="text-3xl" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default Home
