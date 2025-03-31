import React, { useState } from 'react';
import "./formulario.css"
import "./style.css"
import Btn from "./Btn";

const Form = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  //Función de suma
  const handleSumar = () => {
      const suma = parseFloat(num1) + parseFloat(num2);
      setResultado(suma);
  };

  //Función de resta
  const handleRestar = () => {
    const resta = parseFloat(num1) - parseFloat(num2)
    setResultado(resta)
}

  //Función de multiplicar
const handleMultiplicar = () => {
    const multiplicar = parseFloat(num1) * parseFloat(num2)
    setResultado(multiplicar)
}

  //Función de dividir
const handelDividir = () => {
    const dividir = parseFloat(num1) / parseFloat(num2)
    setResultado(dividir)
}

   //Función de limpiar
const handleLimpiar = () => {
    setResultado(null)
    setNum1('')
    setNum2('')
}

// Diseño del form
  return (
    <div className="card form">
 <div className="calculadora">
  <div className="text-center mb-3">
  <input
          className="g-col-2 form-control-sm input-gris"
              type="number"
              placeholder="Número 1"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
          />
  </div>
          <div className="text-center mb-3">
          <input
          className="g-col-2 form-control-sm input-gris"
              type="number"
              placeholder="Número 2"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
          />
          </div>
          <br />
          <button className="boton" onClick={handleSumar}>Sumar</button>
          <button className="boton" type="button" class="btn btn-light" onClick={handleRestar}>Restar</button>
           
            <button className="boton" type="button" class="btn btn-light" onClick={handleMultiplicar}>Multiplicar</button>
            
            <button className="boton" type="button" class="btn btn-light" onClick={handelDividir}>Dividir</button>
          
            <button className="boton" type="button" class="btn btn-light" onClick={handleLimpiar}>Limpiar</button>
            
          <br />
          {resultado !== null && <p>Resultado: {resultado}</p>}
      </div>
    </div>
     
  );
  };
  export default Form;