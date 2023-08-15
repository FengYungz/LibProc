import React from 'react';
import aritmeticas_1 from './imgs/aritmeticas_1.png';
import aritmeticas_2 from './imgs/aritmeticas_2.png';
import '../../../assets/styles/global.css';
import Header from "../../../components/Header/index";
import Footer from '../footer';

interface Index{
  index: number;
}

const index:Index = {index:28};

const OperacoesAritmeticas = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <h3>Operações aritméticas</h3>
                <p className="espaco-paragrafo">
                    A grande maioria das instruções thumb envolvendo a ALU somente têm
                    acesso aos registradores do grupo “lo” (registradores r0 até r7), uma vez que os
                    campos para a especificação dos índices dos registradores de destino ou de
                    operando possuem apenas três bits. Além disso, a maioria das instruções suporta
                    o duplo endereçamento: um registrador é ao mesmo tempo operando e destino do
                    resultado da operação. O conjunto de instruções thumb não suporta operações
                    envolvendo o processamento de um operando pelo barrel shifter: as operações de
                    deslocamento são efetuadas por instruções dedicadas (lsl, lsr e asr).
                </p>
                <p className="espaco-paragrafo">
                    As instruções possíveis para cada combinação de operandos são:
                    <ul className="alinha-item">
                        <li>
                            Triplo endereçamento com três registradores “lo”: add e sub;
                        </li>
                        <li>
                            Triplo endereçamento com dois registradores “lo” e um valor imediato de
                            cinco bits: lsl, lsr e asr;
                        </li>
                        <li>
                            Triplo endereçamento com dois registradores “lo” e um valor imediato de
                            três bits: add e sub;
                        </li>
                        <li>
                            Duplo endereçamento com um registrador “lo” e um valor imediato de
                            oito bits: mov, cmp, add e sub;
                        </li>
                        <li>
                            Acesso ao contador de programa (r15) e stack pointer (r14): add;
                        </li>
                        <li>

                            Acesso aos registradores “hi”, com duplo endereçamento: mov, cmp e add;
                        </li>
                        <li>

                            Acesso aos registradores “hi”, com duplo endereçamento: mov, cmp e add;
                        </li>
                    </ul>
                </p>


                <p className="espaco-paragrafo">A tabela a seguir mostra os formatos das instruções lógicas e aritméticas
                    do conjunto de instruções thumb:
                </p>
                <img className="center-image" src={aritmeticas_1} alt="Aritmeticas 1" />
                <p className="espaco-paragrafo">
                    Os valores imediatos podem ter três bits (add e sub), cinco bits (lsl, lsr
                    e asr) ou oito bits (mov, cmp, add e sub), sendo sempre sem sinal. A instrução
                    “add sp” possui um bit extra para definir o sinal (não é complemento de dois!).
                    As instruções add, cmp e mov com dois registradores são as únicas que podem
                    acessar os registradores “hi”: para isso, elas dispõem de dois bits extra para
                    complementar o índice dos registradores.
                </p>
                <p className="espaco-paragrafo">
                    A maioria das instruções permite operar sobre dois registradores (duplo
                    endereçamento), salvando o resultado em um deles (Rd):
                </p>
                <img className="center-image" src={aritmeticas_2} alt="Aritmeticas 2" />
            </div>
            <Footer {...index} />
        </>
    );
};
export default OperacoesAritmeticas;
