import { useState } from "react";

const Boolean = () => {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState("");

  const validarNumero = () => {
    const num = parseFloat(numero);
    if (isNaN(num)) {
      setResultado("Por favor ingrese un número válido");
    } else {
      setResultado(
        num > 10 ? " El número es mayor a 10" : " El número no es mayor a 10"
      );
    }
  };

  return (
    <div className="componente">
      <h2>c) Validar si un número es mayor a 10</h2>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Ingrese un número"
      />
      <button onClick={validarNumero}>Validar</button>
      {resultado && <p className="resultado">{resultado}</p>}
    </div>
  );
};

export default Boolean;
