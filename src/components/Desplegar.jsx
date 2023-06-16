import Datos from "./Datos";

export default function Desplegar({ desplegar }) {


  function actualizar(e){
       e.preventDefault();
      const form = document.getElementById("form");

      const deporte = Datos[form.deporte.value];
      const new_cards = [];
        for (let index = 0; index < 3; index++) {
        
          new_cards.push(deporte[Math.floor( Math.random() * deporte.length)]);
        }
        desplegar(new_cards)
  }
  
  return (
    <form id="form"  className="principal">
      <label>  Deporte
        <select name="deporte" id="sexo-alumno" required>
          <option value=""></option>
          <option value="0">BasquetBall</option>
          <option value="1">Futball</option>
          <option value="2">League Of Legends</option>
        </select>
      </label>
      <div>
        <button id="add" type="button" onClick={actualizar} >Desplegar Mazo</button>
      </div>
    </form>
  );
}
