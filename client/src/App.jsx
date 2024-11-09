import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@nextui-org/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>test</h1>
      <Button>Test</Button>
    </>
  )
}

export default App
