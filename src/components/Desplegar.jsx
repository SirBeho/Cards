import Datos from "./Datos";
import React, { useEffect, useState, version } from "react";

export default function Desplegar({ desplegar }) {

  const [background, setBackground] = useState("");
  function actualizar(e){

       e.preventDefault();
      const form = document.getElementById("form");


      const deporte = Datos[form.deporte.value];
      let badground = "";
      
      switch (parseFloat(form.deporte.value)) {
        case 0:
          badground = 'url("https://img.freepik.com/free-vector/hand-drawn-flat-basketball-logo_52683-84654.jpg")';
            
          break;
        case 1:
          badground = 'url("https://img.freepik.com/vector-premium/logotipo-club-futbol_441059-74.jpg")';
          break;
          
        case 2:
          badground = 'url("https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1415399156/content-items/001/127/065/LOL-original.jpg?1415399156")';
          break;
      
        default:
          badground = "black";
          break;
      
        }
        setBackground(badground);

       
      const new_cards = [];
        for (let index = 0; index < 3; index++) {
        
          new_cards.push(deporte[Math.floor( Math.random() * deporte.length)]);
        }
        desplegar(new_cards,badground)

  }
  
  return (
    <form id="form"  className="principal" 
    style={{backgroundImage :background}}>
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
