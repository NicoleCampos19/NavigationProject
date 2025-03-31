import React from "react";

const Nav = () => {
    return (
        <nav className="bg-red-300 text-white shadow-md font-poppins">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-lg shadow-md font-poppins">My App</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/Componentes" className="hover:text-gray-200">
                        Componentes
                        </a>
                    </li>
                    <li>
                        <a href="/Card" className="hover:text-gray-200">
                            Card
                        </a>
                    </li>
                    <li>
                        <a href="/Calculadora" className="hover:text-gray-200">
                            Calculadora
                        </a>
                    </li>
                    <li>
                        <a href="/TodoList" className="hover:text-gray-200">
                            To-do List
                        </a>
                    </li>
                    <li>
                        <a href="/Form" className="hover:text-gray-200">
                            Registro Academico
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;