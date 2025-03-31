import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Components from '../src/pages/Componentes.jsx'
import CardPersonal from '../src/pages/Card.jsx'
import Calculadora from '../src/pages/Calculadora.jsx'
import TodoList from '../src/pages/TodoList.jsx'
import Form from '../src/pages/Register.jsx'
import Nav from '../src/components/Nav.jsx'

function App() {
  return (
    <>
  <Router>
    <Nav/>
    <Routes>
    <Route path="/Componentes" element={<Components/>} />
    <Route path="/Card" element={<CardPersonal/>} />
    <Route path="/Calculadora" element={<Calculadora/>} />
    <Route path="/TodoList" element={<TodoList/>} />
    <Route path="/Form" element={<Form />}/>
    </Routes>
  </Router>
    </>
  )
}

export default App