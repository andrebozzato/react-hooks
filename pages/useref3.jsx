import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function page() {
  const [name, setName] = useState('')

  const previousName = useRef()

  useEffect(() => {
    previousName.current = name
  }, [name])

  return (
    <div className="container">
      <div className="content">
        <Link href="/">
          <a>voltar</a>
        </Link>

        <h1>React Hook: useRef 3</h1>

        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <p>Hello! My name is: {name}</p>
          <p>And my name was: {previousName.current}</p>
        </div>
      </div>
    </div>
  )
}
