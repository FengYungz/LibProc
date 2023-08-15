import React from 'react';
import '../../../assets/styles/global.css';
import ExecucaoControleProcesso from '../execucaoProcesso'
import Breakpoints from '../breakpoints';
import VariaveisConteudoMemoria from '../variaveisMemoria';
import ControleInterfaceUsuario from '../interfaceUsuario';
import Header from "../../../components/Header/index";

const ExecucaoProcessoAgregado = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <ExecucaoControleProcesso />
                <Breakpoints />
                <VariaveisConteudoMemoria />
                <ControleInterfaceUsuario />
            </div>
        </>
    );
};

export default ExecucaoProcessoAgregado;