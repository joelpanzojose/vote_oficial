import React from "react";
import './EnqueteCard.css'

function Enquete(props) {
    return (
        <div className="corpoEnquete">

            
           
            <div className="CardEnquete">
            <h1>{props.titulo}</h1>
                <form className="form_enquete">
                    <div className="enquetecontent">

                    {props.opcoes && props.opcoes.map((opcao, idx) => (
                        <div className="divOption" key={idx}>
                            <label htmlFor={`opcao-${idx}`}>{idx + 1}</label>
                            <input type="text" id={`opcao-${idx}`} placeholder={opcao} disabled />
                        </div>
                    ))}

                    </div>
                   <div className="divbtnVotar">
                    <a href="#">
                         <button className="btn_estatisticas">Estatísticas</button>
                    </a>
                     
                        <button className="btn_votar">Votar</button>
                   </div>
                   
                </form>
            </div>

            <div className="CardDesctalhes">

                <div className="descricao">
                    <h2>Descrição</h2>
                    <p>{props.primeirotexto}</p>
                    <p>{props.segundotexto}</p>
                </div>

                <div className="opiniao">
                    <form action="#">
                        <h2>Justifique a sua escolha</h2>
                        <label htmlFor="idopiniao">
                            Dê-nos a sua opinião (Opcional)
                        </label>

                        <textarea name="opiniao" id="idopiniao" placeholder="A sua opinião é importante para coletarmos o máximo de informações possíveis "></textarea>

                        <button>Enviar Opinião</button>
                    </form>
                </div>
               
            </div>
          
        </div>
        
    );
}

export default Enquete;