import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function page() {
  const [name, setName] = useState('')

  const inputRef = useRef()

  // ao clicar no botão levar o foco para o input
  function focusInput() {
    inputRef.current.focus()
  }

  return (
    <div className="container">
      <div className="content">
        <Link href="/">
          <a>voltar</a>
        </Link>

        <h1>React Hook: useRef 2</h1>

        <div>
          <input
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>Hello! My name is {name}</p>
          <button onClick={focusInput}>Focus Input</button>
        </div>
      </div>
    </div>
  )
}
