import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function page() {
  const [name, setName] = useState('')

  const renders = useRef(0)

  //verifica quantas vezes o componente foi renderizado
  useEffect(() => {
    renders.current = renders.current + 1
  })

  return (
    <div className="container">
      <div className="content">
        <Link href="/">
          <a>voltar</a>
        </Link>

        <h1>React Hook: useRef</h1>

        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <p>Hello! My name is {name}</p>
          <p>Renders: {renders.current}</p>
        </div>
      </div>
    </div>
  )
}
