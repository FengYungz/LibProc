import React from 'react';
import '../../../assets/styles/global.css';
import codigo_condicional_1 from './imgs/codigo-condicional_1.png';

const CodigoCondicional = () => {
    return (
        <>
            <div className="content-container">
                <h3>Código condicional</h3>
                <p className="espaco-paragrafo">
                    As diretivas
                    .if ,
                    .else
                    e
                    .endif
                    permitem condicionar a
                    inclusão de código no arquivo de saída, de acordo com o valor de uma expressão:
                </p>
                <img className="center-image" src={codigo_condicional_1} alt="codigoCondicional 1" />
            </div>
        </>
    );
};

export default CodigoCondicional;
