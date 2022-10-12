import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function page() {
  const [items, setItems] = useState([])
  const [resourceType, setResourceType] = useState('posts')

  function changeResourceType(resourceType) {
    setResourceType(resourceType)
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
  }, [resourceType])

  // simula o componente de classe componentDidMount
  useEffect(() => {
    console.log('só executa quando renderiza a pagina(uma única vez)')
  }, [])

  // simula o componente de classe componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('chamado quando um componente está sendo removido do DOM')
    }
  }, [])

  return (
    <div className="container">
      <div className="content">
        <Link href="/">
          <a>voltar</a>
        </Link>

        <h1>React Hook: useEffect</h1>

        <div>
          <div>
            <button onClick={() => changeResourceType('posts')}>Posts</button>
            <button onClick={() => changeResourceType('comments')}>
              Comments
            </button>
            <button onClick={() => changeResourceType('todos')}>Todos</button>
          </div>
          <h2>{resourceType}</h2>
        </div>

        {resourceType === 'comments'
          ? items.map((item) => <p key={item.id}>{item.email}</p>)
          : items.map((item) => <p key={item.id}>{item.title}</p>)}
      </div>
    </div>
  )
}
