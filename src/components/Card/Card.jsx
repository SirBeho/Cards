import Estrella from "./Estella";
import "./card.css";

export default function Card({ datos }) {
  // console.log(datos.nombre);
  const nombre = { __html: datos.nombre };
  return (
    <div className="card">

      <div className="div-imagen">
        <h1>
          <Estrella cantidad={datos.valoracion} />
        </h1>
        <img src={datos.url} alt={datos.nombre} />
      </div>

      <div className="div-texto">
        <h1 dangerouslySetInnerHTML={nombre}></h1>
      </div>

      <div className="biografia">
        <h2>Equipo: {datos.equipo}</h2>
        <p>{datos.biografia}</p>
        <div className="logo">
          <img src={datos.equipo_url} alt="" />
        </div>
      </div>

    </div>
  );
}
