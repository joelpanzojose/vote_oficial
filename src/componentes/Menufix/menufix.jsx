import React from "react";
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
                                <div className="icon">
                                    <IconEnquete />
                                </div>
                                <a href="#adicionar_enquete">Enquetes Activas</a>
                            </li>
                             <li>
                                <div className="icon">
                                    <Plus />
                                </div>
                                <a href="#home">Adicionar Enquete</a>
                            </li>
                            <li>
                                <div className="icon">
                                    <IconEstatisticas />
                                </div>
                                <a href="#estatisticas_gerias">Estatísticas Gerais</a>
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

