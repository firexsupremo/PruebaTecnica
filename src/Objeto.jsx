import { useState } from "react";

const Objeto = () => {
  const [mostrarDatos, setMostrarDatos] = useState(false);

  const datosUsuario = {
    nombre: "Javier Estrada",
    edad: 20,
    carrera: "Tecnologia en desarrollo de Software",
    email: "javier.estradag@uniagustiniana.edu.co",
  };

  return (
    <div className="componente">
      <h2>d) Mostrar datos de un objeto</h2>
      <button onClick={() => setMostrarDatos(!mostrarDatos)}>
        {mostrarDatos ? "Ocultar Datos" : "Mostrar Datos"}
      </button>

      {mostrarDatos && (
        <div className="datos-objeto">
          <p>
            <strong>Nombre:</strong> {datosUsuario.nombre}
          </p>
          <p>
            <strong>Edad:</strong> {datosUsuario.edad}
          </p>
          <p>
            <strong>Carrera:</strong> {datosUsuario.carrera}
          </p>
          <p>
            <strong>Email:</strong> {datosUsuario.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default Objeto;
