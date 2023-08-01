import React from 'react';
import gpio_1 from './imgs/gpio_1.png';
import gpio_2 from './imgs/gpio_2.png';
import gpio_3 from './imgs/gpio_3.png';
import gpio_4 from './imgs/gpio_4.png';
import gpio_5 from './imgs/gpio_5.png';
import gpio_6 from './imgs/gpio_6.png';
import gpio_7 from './imgs/gpio_7.png';
import gpio_8 from './imgs/gpio_8.png';
import '../../../assets/styles/global.css';

const GPIO = () => {
    return (
        <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
            <h3>Portas de Entrada e Saída (GPIO)</h3>
            <p className="espaco-paragrafo">

                <p className="espaco-paragrafo">O componente S3C4510B possui 18 pinos (P0 até P17) que podem ser
                    utilizados como portas de entrada ou de saída, sob o controle do processador.
                    Alguns desses pinos podem ter funções especiais: entradas de interrupção (P8 a
                    P11), sinais de controle para o DMA (P12 a P15) e saídas de clock gerados pelos
                    timers internos (P16 e P17).
                </p>

                <img className="center-image" src={gpio_1} alt="gpio 1" />

                <p className="espaco-paragrafo">O funcionamento das entradas ou saídas digitais é controlado por três
                    registradores: IOPMOD (endereço 0x3ff5000), IOPCON (endereço 0x3ff5004) e
                    IOPDATA (endereço 0x3ff5008). O registrador IOPMOD especifica a direção de cada
                    pino, no bit de mesmo índice: o valor “0” configura o pino como entrada digital e
                    o valor “1” configura o pino como saída digital:
                </p>


                <img className="center-image" src={gpio_2} alt="gpio 2" />

                <p className="espaco-paragrafo">Após o reset, todos os GPIOs são configurados como entradas (o
                    registrador IOPMOD vale zero).
                </p>


                <p className="espaco-paragrafo">O registrador IOPDATA (endereço 0x3ff5008) contém o estado atual das 18
                    GPIOs; caso esse registrador seja escrito, o estado atual dos GPIOs configurados
                    como saída serão atualizados. Um sinal alto (“H”) no pino corresponde ao valor
                    lógico “1” e um sinal baixo (“L”) no pino corresponde ao valor lógico “0” no bit
                    cujo índice é o mesmo da entrada ou saída.
                </p>


                <img className="center-image" src={gpio_3} alt="gpio 3" />

                <p className="espaco-paragrafo">As funções especiais dos pinos P8 a P17 são configuradas no registrador
                    IOPCON (endereço 0x3ff5004):
                </p>


                <img className="center-image" src={gpio_4} alt="gpio 4" />

                <p className="espaco-paragrafo">Os pinos P8 a P11 podem ser configurados como entradas para produzir
                    interrupções (interrupções externas 0 a 3). O formato dos seus campos de 5 bits
                    no registrador IOPCON é o mesmo:
                </p>


                <img className="center-image" src={gpio_5} alt="gpio 5" />

                <p className="espaco-paragrafo">Os pinos P12 e P13 podem ser configurados como entradas de controle
                    para o DMA, com um campo de três bits no registrador IOPCON:
                </p>


                <img className="center-image" src={gpio_6} alt="gpio 6" />

                <p className="espaco-paragrafo">Os pinos P14 e P15 podem ser configurados como saídas de controle para
                    o DMA, com um campo de dois bits no registrador IOPCON:
                </p>


                <img className="center-image" src={gpio_7} alt="gpio 7" />

                <p className="espaco-paragrafo">Finalmente, os bits 30 e 31 habilitam (bit igual a “um”) ou desabilitam (bit
                    igual a “zero”) as saídas dos timers 0 e 1, respectivamente. Após um reset, o valor
                    do registrador IOPCON é zero, desabilitando todas as funções especiais dos pinos. Como exemplo, o programa a seguir configura o pino P3 como saída e liga
                    a saída, escrevendo o valor lógico “1”:
                </p>

                <img className="center-image" src={gpio_8} alt="gpio 8" />
            </p>
        </div>
    );
};

export default GPIO;

