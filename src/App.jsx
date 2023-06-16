import "./App.css";
import React, { useEffect, useState, version } from "react";
import Card from "./components/Card/Card";
import Datos from "./components/Datos";
import Desplegar from "./components/Desplegar";

function App() {
  const [empleados, setEmpleados] = useState(Datos);
  const [background, setBackground] = useState("red");
  
   const modificar = (cartas,backgroundImage) => {
      setBackground(backgroundImage);
      setEmpleados(cartas);
    }
    useEffect(() => {
      document.body.style.backgroundImage = background;
    }, [background]);
    
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
