import React from 'react';
import '../../../assets/styles/global.css';
import endereco_atual_1 from './imgs/endereco-atual_1.png';
import Header from "../../../components/Header/index";

const PosicionarEnderecoAtual = () => {
    return (
        <>
            <Header />
            <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
                <h3>Posicionar o endereço atual</h3>
                <p className="espaco-paragrafo">
                    As diretivas
                    .space
                    e
                    .skip
                    são equivalentes e permitem pular
                    uma quantidade de endereços da seção atual, preenchendo ou não com um valor.
                    A diretiva
                    .org é semelhante, porém tenta posicionar o endereço no valor
                    especificado (lembre-se, sempre relativamente ao endereço inicial da seção).
                </p>
                <p className="espaco-paragrafo">
                    A diretiva
                    .align soma ao endereço atual um valor suficiente para
                    que esse endereço seja múltiplo da potência de dois do parâmetro (“1” endereços
                    pares, “2” endereços múltiplos de quatro, “3” endereços múltiplos de oito, etc.).
                </p>
                <img className="center-image" src={endereco_atual_1} alt="enderecoAtual 1" />
            </div>
        </>
    );
};

export default PosicionarEnderecoAtual;
