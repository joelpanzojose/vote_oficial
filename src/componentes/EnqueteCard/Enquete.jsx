import React from "react";
import './EnqueteCard.css'

function Enquete(props) {
    return (
        <div className="corpoEnquete">
            <h1>{props.titulo}</h1>
            <div className="CardEnquete">
                <form>
                    {props.opcoes && props.opcoes.map((opcao, idx) => (
                        <div className="divOption" key={idx}>
                            <label htmlFor={`opcao-${idx}`}>{idx + 1}</label>
                            <input type="text" id={`opcao-${idx}`} placeholder={opcao} disabled />
                        </div>
                    ))}
                    <button>Votar</button>
                </form>
            </div>
            <div className="CardDescricao"></div>
        </div>
    );
}

export default Enquete;