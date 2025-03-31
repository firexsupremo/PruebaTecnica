import { useState } from "react";

const Estado = () => {
  const colores = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#FFBE0B",
    "#FB5607",
    "#8338EC",
  ];

  const cambiarColor = () => {
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
  };

  return (
    <div className="componente">
      <h2>a) Cambiar color de fondo</h2>
      <button onClick={cambiarColor}>Cambiar Color de Fondo</button>
      <p>Presiona el botón para cambiar el color de toda la pantalla</p>
    </div>
  );
};

export default Estado;
