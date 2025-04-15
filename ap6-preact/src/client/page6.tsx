
import { useState } from 'preact/hooks'
import { render } from 'preact'
import Contet from '../components/page6/content';

export function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <Contet />
  </>
  )
}

render(<App />, document.getElementById('app')!);
