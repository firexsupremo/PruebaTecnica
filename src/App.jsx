import { useState } from "react";
import "./App.css";

import Estado from "./Estado";
import String from "./String";
import Booleano from "./Booleano";
import Objeto from "./Objeto";
import Lista from "./Lista";

function App() {
  return (
    <>
      <Estado />
      <String />
      <Booleano />
      <Objeto />
      <Lista />
    </>
  );
}

export default App;
