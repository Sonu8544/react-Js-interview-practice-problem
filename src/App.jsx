import { useState } from 'react'
import './App.css'

import OneHelloWorld from './components/One/OneHelloWorld'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OneHelloWorld />
    </>
  )
}

export default App
