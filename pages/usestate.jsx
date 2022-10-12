import { useState } from 'react'
import Link from 'next/link'

export default function page() {
  const [count, setCount] = useState(0)

  function incrementCount() {
    setCount((prevState) => prevState + 1)
  }

  return (
    <div className="container">
      <div className="content">
        <Link href="/">
          <a>voltar</a>
        </Link>
        <h1>React Hook: useState</h1>
        <h1>{count}</h1>
        <button onClick={incrementCount}>Increment</button>
      </div>
    </div>
  )
}
