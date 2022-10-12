import { useState } from 'react'
import Link from 'next/link'

export default function page() {
  const [state, setState] = useState({
    count: 0,
    theme: 'light'
  })

  function incrementCount() {
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
        theme: 'dark'
      }
    })
  }

  return (
    <div className="container">
      <div className="content">
        <Link href="/">
          <a>voltar</a>
        </Link>
        <h1>React Hook: useState</h1>
        <h1>{state.count}</h1>
        <button onClick={incrementCount}>Increment</button>
      </div>
    </div>
  )
}
