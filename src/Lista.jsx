import { useState } from "react";

const Lista = () => {
  const [mostrarLista, setMostrarLista] = useState(false);

  const personas = [
    {
      id: 1,
      nombre: "Juan Pérez",
      edad: 28,
      correo: "juan@uniagustiniana.edu.co",
    },
    {
      id: 2,
      nombre: "María García",
      edad: 32,
      correo: "maria@uniagustiniana.edu.co",
    },
    {
      id: 3,
      nombre: "Carlos López",
      edad: 25,
      correo: "carlos@uniagustiniana.edu.co",
    },
    {
      id: 4,
      nombre: "Ana Martínez",
      edad: 30,
      correo: "ana@uniagustiniana.edu.co",
    },
    {
      id: 5,
      nombre: "Luisa Rodríguez",
      edad: 27,
      correo: "luisa@uniagustiniana.edu.co",
    },
  ];

  const toggleLista = () => {
    setMostrarLista(!mostrarLista);
  };

  return (
    <div className="componente">
      <h2>e) Llamar y Mostrar datos de una lista</h2>
      <button onClick={toggleLista}>
        {mostrarLista ? "Ocultar Lista" : "Mostrar Lista"}
      </button>

      {mostrarLista && (
        <table className="tabla-personas">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Correo Electrónico</th>
            </tr>
          </thead>
          <tbody>
            {personas.map((persona) => (
              <tr key={persona.id}>
                <td>{persona.nombre}</td>
                <td>{persona.edad}</td>
                <td>{persona.correo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Lista;
