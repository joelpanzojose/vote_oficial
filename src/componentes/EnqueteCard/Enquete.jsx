import React from "react";
import './EnqueteCard.css'

function Enquete(props) {
    return (
        <div className="corpoEnquete">
           
            <div className="CardEnquete">
            <h1>{props.titulo}</h1>
                <form>
                    <div className="enquetecontent">

                    {props.opcoes && props.opcoes.map((opcao, idx) => (
                        <div className="divOption" key={idx}>
                            <label htmlFor={`opcao-${idx}`}>{idx + 1}</label>
                            <input type="text" id={`opcao-${idx}`} placeholder={opcao} disabled />
                        </div>
                    ))}

                    </div>
                   <div className="divbtnVotar">
                        <button>Votar</button>
                   </div>
                   
                </form>
            </div>

            <div className="CardDescricao">
                <h2>Descrição</h2>
                    <p>{props.primeirotexto}</p>
                    <p>{props.segundotexto}</p>
            </div>
          
        </div>
        
    );
}

export default Enquete;