import React, { useState } from "react";
import './style.css'

const Listado = () => {
    const [estudiantes, setEstudiantes] = useState([]);
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [carnet, setCarnet] = useState('');

    const agregarEstudiantes = () => {
        if (nombre.trim() === '' || edad.trim() === '' || carnet.trim() === '') return;

        setEstudiantes([...estudiantes, { id: Date.now(), nombre, edad, carnet }]);
        setNombre('');
        setEdad('');
        setCarnet('');
    };

    return (
        <>
        <br /><br /><br />
            <div style={{
                backgroundColor: '#FFFFFF',
            }}>
                <h1>Registro de Estudiantes</h1>
                <br />
                <div className="form-floating mb-3">
                <label htmlFor="floatingInput">Nombre  </label>
                    <input
                        type="text"
                        className="g-col-2 form-control-sm input-gris"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="form-floating mb-3">
                <label htmlFor="floatingPassword">Edad  </label>
                    <input
                        type="number"
                        className="g-col-2 form-control-sm input-gris"
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}
                    />
                </div>
                <div className="form-floating">
                <label htmlFor="floatingPassword">Carnet  </label>
                    <input
                        type="number"
                        className="input-gris"
                        value={carnet}
                        onChange={(e) => setCarnet(e.target.value)}
                    />
                </div>
                <br />
                <button type="button" className="btn"  onClick={agregarEstudiantes}>Agregar</button>

                <br /><br />
                <h2>Listado:</h2>
                <ul>
                    {estudiantes.map((estudiante) => (
                        <li key={estudiante.id}>
                            {estudiante.nombre} | {estudiante.edad} años | Carnet: {estudiante.carnet}
                            <br /><br />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Listado;
