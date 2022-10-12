import Link from 'next/link'

export default function ReactHooksUseState() {
  return (
    <div className="container">
      <div className="content">
        <h1>React Hooks</h1>
        <ul>
          <li>
            <Link href="/usestate">
              <a>UseState</a>
            </Link>
          </li>

          <li>
            <Link href="/usestate2">
              <a>UseState 2</a>
            </Link>
          </li>

          <li>
            <Link href="/useeffect">
              <a>UseEffect</a>
            </Link>
          </li>

          <li>
            <Link href="/useref">
              <a>UseRef</a>
            </Link>
          </li>

          <li>
            <Link href="/useref2">
              <a>UseRef 2</a>
            </Link>
          </li>

          <li>
            <Link href="/useref3">
              <a>UseRef 3</a>
            </Link>
          </li>

          <li>
            <Link href="/usereducer">
              <a>UseReducer</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
