import React from 'react';
import '../../../assets/styles/global.css';
import macros_repeticoes_1 from './imgs/macros-repeticoes_1.png';
import macros_repeticoes_2 from './imgs/macros-repeticoes_2.png';
import macros_repeticoes_3 from './imgs/macros-repeticoes_3.png';
import macros_repeticoes_4 from './imgs/macros-repeticoes_4.png';

const MacrosRepeticoes = () => {
    return (
        <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
            <h3>Macros e repetições</h3>
            <p className="espaco-paragrafo">
                Macros podem ser criadas usando a diretiva .macro. Podem ser
                especificados parâmetros (separados por vírgulas), eventualmente com valores
                default (usando o operador = ). Os valores dos parâmetros somente são visíveis no interior da macro (entre
                .macro e.endm ), sendo referenciados com  uma barra invertida ( \ ).
            </p>
            <img className="center-image" src={macros_repeticoes_1} alt="macrosRepeticoes 1" />
            <p className="espaco-paragrafo">
                Pode-se utilizar a diretiva .exitm para encerrar a macro antes de
                .endm (por exemplo em código condicional). Para criar o equivalente a “loops”
                em macros pode-se usar recursão:
            </p>
            <img className="center-image" src={macros_repeticoes_2} alt="macrosRepeticoes 2" />
            <p className="espaco-paragrafo">
                As instruções ou diretivas colocadas entre as diretivas
                .rept
                e
                .endr são replicadas a quantidade de vezes especificada.
            </p>
            <img className="center-image" src={macros_repeticoes_3} alt="macrosRepeticoes 3" />

            <p className="espaco-paragrafo">
                Finalmente, as diretivas
                .abort ,
                .error
                e
                .warning
                permitem cancelar o processo de montagem, por exemplo, na situação de
                verificação de algum erro ou inconsistência.
            </p>
            <img className="center-image" src={macros_repeticoes_4} alt="macrosRepeticoes 4" />
        </div>
    );
};

export default MacrosRepeticoes;
