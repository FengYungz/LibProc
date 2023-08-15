import React from 'react';
import '../../../assets/styles/global.css';
import GNUCompiler from '../gcc';
import AmbienteDesenvolvimento from '../ambienteDesenvolvimento';
import Header from "../../../components/Header/index";

const GNUCompilerAgregado = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <GNUCompiler />
                <AmbienteDesenvolvimento />
            </div>
        </>
    );
};

export default GNUCompilerAgregado;