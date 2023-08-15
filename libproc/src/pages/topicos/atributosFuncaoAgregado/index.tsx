import React from 'react';
import '../../../assets/styles/global.css';
import AtributosFuncaoGCC from '../atributosFuncao';
import AssemblerInline from '../assemblerInline';
import RuntimeGCC from '../runtimeGcc';
import Header from "../../../components/Header/index";
import Footer from '../footer';

interface Index{
  index: number;
}

const index:Index = {index:24};

const AtributosFuncaoAgregado = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <AtributosFuncaoGCC />
                <AssemblerInline />
                <RuntimeGCC />
            </div>
            <Footer {...index} />
        </>
    );
};

export default AtributosFuncaoAgregado;


