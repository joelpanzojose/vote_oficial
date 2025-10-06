
import React from 'react';
import './card.css'
import { Plus, IconEnquete, IconEstatisticas, Logout, TotalEnquete } from './svgs/mysvg';
import { Participacaomedia } from './svgs/mysvg';


function Card(props) {

  return (
    <div className="containerCard">
     
      <div className="card">
          <div className="cardConteudo">
            <div className={`icon_Cards ${props.bgClass}`}>{props.IconCard_estatisticas}</div>

            <div className="info_card">
              <div className="titulo"><p>{props.titulo}</p></div>
              <div className="dados"> <h3>{props.totalvotos}</h3></div>  
            </div>
          </div>
      </div>
    </div>

  );
}


export default Card;
