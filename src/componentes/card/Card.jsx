
import React from 'react';
import './card.css'


function Card(props) {

  return (
    <div className="card">
      <h2>{props.titulo}</h2>
      <p>{props.conteudo}</p>
      <button>Ver Mais</button>
    </div>
  );
}


export default Card;
