import React from 'react';
import thumb2_1 from './imgs/thumb2_1.png';
import '../../../assets/styles/global.css';
import Header from "../../../components/Header/index";

const ConjuntoInstrucoesThumb2 = () => {
    return (
        <>
            <Header />
            <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
                <h3>Conjunto de instruções Thumb-2</h3>
                <p className="espaco-paragrafo">
                    Conjunto de instruções Thumb-2O conjunto de instruções thumb possui muitas vantagens em termos de
                    otimização de uso de memória e velocidade de execução, porém, comparado ao
                    conjunto de instruções original dos processadores ARM, é bastante limitado em
                    recursos importantes, como o uso da barrel shifter em operações aritméticas, o
                    triplo endereçamento de registradores e a limitação no tamanho das constantes
                    imediatas e offsets.            </p>
                <p className="espaco-paragrafo">
                    Uma revisão do conjunto de instruções thumb foi introduzida na versão 6
                    da arquitetura (ARMv.6), chamada de “thumb-2”. Esse conjunto de instruções
                    possui tanto instruções de 16 bits (compatíveis com o thumb original) quanto de
                    32 bits, construídas a partir de duas instruções de 16 bits sucessivas,
                    reutilizando a ideia empregada na instrução bl.
                </p>
                <p className="espaco-paragrafo">
                    A primeira parte da instrução permite diferenciar entre thumb e thumb-2
                    através dos bits mais significativos:
                </p>
                <img className="center-image" src={thumb2_1} alt="Thumb2 1" />
                <p className="espaco-paragrafo">
                    As instruções codificadas nos 29 bits do thumb-2 permitem complementar
                    o thumb com a maioria dos recursos existentes na arquitetura ARM:
                    <ul className="alinha-item">
                        <li>
                            Campos imediatos maiores;
                        </li>
                        <li>
                            Endereçamento do conjunto completo de registradores (campos de quatro
                            bits);
                        </li>
                        <li>
                            Triplo endereçamento (três campos para registradores);
                        </li>
                        <li>
                            Uso do barrel shifter sobre operandos de instruções aritméticas;
                        </li>
                        <li>
                            Instruções para tratamento do cpsr e de coprocessadores;
                        </li>
                        <li>
                            Outras instruções do ARMv.6 que não eram suportadas pelo thumb original.
                        </li>
                    </ul>

                </p>
                <p className="espaco-paragrafo">
                    Para que o ganho de desempenho seja mantido, é necessário que a
                    maioria das instruções geradas pelo compilador possa ser montada usando o
                    conjunto de instruções thumb (16 bits), incluindo as instruções maiores somente
                    em casos particulares.
                </p>
                <p className="espaco-paragrafo">Uma das características mais marcantes do conjunto de instruções ARM, a
                    existência de campos condicionais em todas as instruções, é perdida no conjunto
                    thumb. Para compensar essa deficiência, o conjunto thumb-2 introduz uma
                    instrução especial (“ifelse”) que permite definir trechos de programa com
                    execução condicional sem a necessidade de saltos.</p>
            </div>
        </>
    );
};

export default ConjuntoInstrucoesThumb2;
