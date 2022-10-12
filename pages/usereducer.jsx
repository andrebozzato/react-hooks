import { useReducer } from 'react'
import Link from 'next/link'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1
      }
    case 'decrement':
      return {
        counter: state.counter - 1
      }
    default:
      return state
  }
}

export default function page() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 })

  return (
    <div className="container">
      <div className="content">
        <Link href="/">
          <a>voltar</a>
        </Link>

        <h1>React Hook: useReducer</h1>

        <div>
          <p>{state.counter}</p>
          <button onClick={() => dispatch({ type: 'increment' })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: 'decrement' })}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  )
}
