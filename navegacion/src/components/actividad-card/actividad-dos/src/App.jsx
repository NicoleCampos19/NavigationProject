import { useState } from 'react'
import Card from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <h1>Actividad Card</h1>
      <Card nombre={"Emily Jacobo"} apellido={"Jacobo Campos"} infomily={"Soy una programadora apasionada por crear proyectos con ideas innovadoras, y tengo una habilidad especial para combinar diseño y programación, logrando soluciones tanto funcionales como visualmente atractivas."}
      git={"Nicole19"} ig={"emiinxu"}/>
    </>
  )
}

export default App
