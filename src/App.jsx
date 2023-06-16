import "./App.css";

import Card from "./components/Card/Card";
import Datos from "./components/Datos";



function App() {
 

  
  return (
    <>
      <h1>Presentacion de Personajes</h1>

      <section className="cards">
        {Datos.map((Dato, index) => (
          <Card key={index} datos={Dato}  />
        ))}
      </section> 
 
    </>
  );
}
export default App;
