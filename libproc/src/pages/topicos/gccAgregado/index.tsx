import React from 'react';
import '../../../assets/styles/global.css';
import GNUCompiler from '../gcc';
import AmbienteDesenvolvimento from '../ambienteDesenvolvimento';
import Header from "../../../components/Header/index";
import Footer from '../footer';

interface Index{
  index: number;
}

const index:Index = {index:23};

const GNUCompilerAgregado = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <GNUCompiler />
                <AmbienteDesenvolvimento />
            </div>
            <Footer {...index} />
        </>
    );
};

export default GNUCompilerAgregado;