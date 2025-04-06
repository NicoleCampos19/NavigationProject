import { useState } from 'react'
import './App.css'
import Alert from './components/Alert'
import Accordion from './components/Accordion'
import Boton from './components/Boton'
import Botongroup from './components/Botongroup'
import Card from './components/Card'
import Badge from './components/Badge'
import Close from './components/Close'
import Drop from './components/Drop'
import Active from './components/Active'
import List from './components/List'
import Numbered from './components/Numbered'
import Variants from './components/Variants'
import Check from './components/Checkboxes'
import Modal from './components/Modal'
import Nav from './components/Navbar'
import Logo from './components/Logo'
import Txt from './components/Text'
import Over from './components/Over'
import Disa from './components/Disa'
import Place from './components/Place'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Componentes de BootStrap</h1>
     <Alert titulo={"Esta es una alerta"}/>
     <Accordion titulo={"Este es un Accordion"}/>
     <Boton titulo={"Este es un botón"}/>
     <Botongroup/>
     <Card/>
     <Badge/>
     <Close/>
     <Drop/>
     <Active/>
     <List/>
     <Numbered/>
     <Variants/>
     <Check/>
     <Modal/>
     <Nav/>
     <Logo/>
     <Txt/>
     <Over/>
     <Disa/>
     <Place/>
    </>
  )
}

export default App
