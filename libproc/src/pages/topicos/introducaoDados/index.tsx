import React from 'react';
import '../../../assets/styles/global.css';
import introducao_dados_1 from './imgs/introducao-dados_1.png';
import introducao_dados_2 from './imgs/introducao-dados_2.png';
import introducao_dados_3 from './imgs/introducao-dados_3.png';

const IntroducaoDados = () => {
    return (
        <>
            <div className="content-container">
                <h3>Introdução de dados</h3>
                <p className="espaco-paragrafo">
                    Um conjunto arbitrário de bytes pode ser inserido no código objeto pelo assembler usando as diretivas com nomes de tipos ( .byte , .word , .hword , .int , .float , etc.). Esses comandos alocam espaço suficiente
                    para o tipo especificado no código objeto na posição especificada pelo endereço
                    atual, na seção atual. Caso tenham parâmetros (uma lista de expressões), os
                    valores são incluídos na memória em sequência, de acordo com o tipo
                    especificado. Observe que o tamanho dos “word” e “hword” depende da
                    arquitetura alvo.
                </p>
                <p className="espaco-paragrafo">
                    As diretivas no formato
                    .dc.b , .dc.l , .dc.w , .dc.s , etc.,
                    são semelhantes (byte, long, word e single precision, respectivamente). Neste
                    formato, “word” sempre se refere a 16 bits.
                </p>
                <img className="center-image" src={introducao_dados_1} alt="introducaoDados 1" />
                <p className="espaco-paragrafo"> 
                    A diretiva .ds permite alocar espaço para vetores, opcionalmente preenchendo com valores iniciais.
                </p>
                <img className="center-image" src={introducao_dados_2} alt="introducaoDados 2" />
                <p className="espaco-paragrafo">
                    A diretiva .ascii permite introduzir strings. Observe que os strings não são terminados com zero automaticamente, você deve introduzir o caractere \0, caso necessário.
                </p>
                <img className="center-image" src={introducao_dados_3} alt="introducaoDados 3" />
            </div>
        </>
    );
};

export default IntroducaoDados;
