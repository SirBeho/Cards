import React from 'react'

export default function Estrella({ cantidad }) {
    const estrellas = [];
  
    for (let i = 0; i < cantidad; i++) {
      estrellas.push(<i key={i} className="fa fa-star" aria-hidden="true"></i>);
    }
    return <>{estrellas}</>;
  }