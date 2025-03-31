import { useState } from "react";

const String = () => {
  const [textos, setTextos] = useState({
    texto1: "hola mundo",
    texto2: "visual studio",
    texto3: "c++",
  });

  const modificarTextos = () => {
    setTextos({
      texto1: "codesanbox",
      texto2: "Expo",
      texto3: "Github",
    });
  };

  return (
    <div className="componente">
      <h2>b) Modificar tres textos</h2>
      <p>{textos.texto1}</p>
      <p>{textos.texto2}</p>
      <p>{textos.texto3}</p>
      <button onClick={modificarTextos}>Modificar Textos</button>
    </div>
  );
};

export default String;
