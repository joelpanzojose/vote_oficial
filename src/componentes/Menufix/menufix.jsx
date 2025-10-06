import React from "react";
import { Link } from "react-router-dom";
import './menu.css'
import VotoImg from '../../assets/img/IconVoto.png';
import { Plus, IconEnquete, IconEstatisticas, Logout } from '../card/svgs/mysvg';
import Iconactive from "../card/svgs/mysvg";

function Menufix() {
    return (
        <div className="Sidebar">
            <div className="conteudoMenu">

                <div className="cabecalho">
                    <img className="voto" src={VotoImg} alt="Voto" />
                    <h2>VotaçãoLab</h2>
                </div>

                <div className="corpomenu">
                    <nav>
                        <ul>  
                                <li>
                                    <div className="icon"><IconEnquete /></div>
                                    <Link to="/">Enquetes Activas</Link>
                                </li>
                                <li>
                                    <div className="icon"><Plus /></div>     
                                    <Link to="/criar-enquete">Criar Enquete</Link>
                                </li>
                                <li>
                                    <div className="icon"> <IconEstatisticas /> </div>
                                    <Link to="/estatisticas">Estatísticas Gerais</Link>
                                </li>
                        </ul>
                    </nav>
                </div>
            </div>


            <div className="log">
                <span> <Logout /> </span>
                <span>Sair</span>
            </div>
        </div>
    );
}

export default Menufix;

