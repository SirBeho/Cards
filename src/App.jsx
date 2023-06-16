import "./App.css";
import React, { useState } from "react";
import Card from "./components/Card/Card";
import Datos from "./components/Datos";
import Desplegar from "./components/Desplegar";


function App() {
  const [empleados, setEmpleados] = useState(Datos);
   const modificar = (cartas) => {
     setEmpleados(cartas)
    }
  return (
    <>
      <Desplegar desplegar={modificar} />
     
      <section className="cards">
        {empleados.map((Dato, index) => (
          <Card key={index} datos={Dato}  />
        ))}
      </section> 
 
    </>
  );
}
export default App;
