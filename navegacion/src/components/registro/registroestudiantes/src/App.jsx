import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registros from'./components/Registros'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Registros/>
    </>
  )
}

export default App
