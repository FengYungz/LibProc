import React from 'react';
import '../../../assets/styles/global.css';
import AtributosFuncaoGCC from '../atributosFuncao';
import AssemblerInline from '../assemblerInline';
import RuntimeGCC from '../runtimeGcc';
import Header from "../../../components/Header/index";

const AtributosFuncaoAgregado = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <AtributosFuncaoGCC />
                <AssemblerInline />
                <RuntimeGCC />
            </div>
        </>
    );
};

export default AtributosFuncaoAgregado;


