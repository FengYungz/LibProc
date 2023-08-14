import React from 'react';
import '../../../assets/styles/global.css';
import atribuicao_simbolos_1 from './imgs/atribuicao-simbolos_1.png';
import Header from "../../../components/Header/index";

const AtribuicaoSimbolos = () => {
    return (
        <>
            <Header />
            <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
                <h3>Atribuição de Símbolos</h3>
                <p className="espaco-paragrafo">
                    As diretivas .equ e .set permitem atribuir o resultado de uma expressão a um símbolo:
                </p>
                <img className="center-image" src={atribuicao_simbolos_1} alt="atribuicaoSimbolos 1" />
                <p className="espaco-paragrafo">
                    A diretiva .global exporta um símbolo para que seu valor seja conhecido pelo linker; observe que não é necessário importar símbolos no assembler.
                </p>
            </div>
        </>
    );
};

export default AtribuicaoSimbolos;
