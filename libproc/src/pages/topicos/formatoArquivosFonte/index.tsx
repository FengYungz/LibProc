import React from 'react';
import '../../../assets/styles/global.css';
import Simbolos from '../simbolos';
import Expressoes from '../expressoes';
import DefinicaoSecoes from '../definicaoSecoes';
import AtribuicaoSimbolos from '../atribuicaoSimbolos';
import IntroducaoDados from '../introducaoDados';
import CodigoCondicional from '../codigoCondicional';
import EnderecoAtual from '../enderecoAtual';
import MacrosRepeticoes from '../macrosRepeticoes';
import Header from "../../../components/Header/index";

const FormatoArquivosFonte = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <Simbolos />
                <Expressoes />
                <DefinicaoSecoes />
                <AtribuicaoSimbolos />
                <IntroducaoDados />
                <CodigoCondicional />
                <EnderecoAtual />
                <MacrosRepeticoes />
            </div>
        </>
    );
};

export default FormatoArquivosFonte;

