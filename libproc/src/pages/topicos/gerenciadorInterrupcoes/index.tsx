import React from 'react';
import gerenciador_interrupcoes_1 from './imgs/gerenciador-interrupcoes_1.png';
import gerenciador_interrupcoes_2 from './imgs/gerenciador-interrupcoes_2.png';
import gerenciador_interrupcoes_3 from './imgs/gerenciador-interrupcoes_3.png';
import gerenciador_interrupcoes_4 from './imgs/gerenciador-interrupcoes_4.png';
import gerenciador_interrupcoes_5 from './imgs/gerenciador-interrupcoes_5.png';
import '../../../assets/styles/global.css';
import Header from "../../../components/Header/index";

const GerenciadorInterrupcoes = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <h3>Gerenciador de Interrupções</h3>

                <p className="espaco-paragrafo">O gerenciador de interrupções do S3C4510B pode reconhecer 21 fontes
                    diferentes de interrupção e sinalizar à CPU com os sinais de interrupção “IRQ”
                    (prioridade normal) ou “FIQ” (interrupção “rápida”), conforme a configuração. O
                    serviço de interrupção deverá consultar o gerenciador de interrupções para
                    determinar a causa da interrupção, realizar o processamento correspondente e
                    finalmente limpar o flag de interrupção pendente, concluindo o processo.
                    As interrupções que podem ser tratadas são correspondentes aos
                    seguintes eventos, numeradas de zero a vinte:
                </p>


                <img className="center-image" src={gerenciador_interrupcoes_1} alt="gerenciadorInterrupcoes 1" />
                <p className="espaco-paragrafo">O gerenciador de interrupções é controlado através de três registradores:
                    INTMOD (endereço 0x3ff4000), INTPEND (endereço 0x3ff4004) e INTMSK
                    (endereço 0x3ff4008). Outros registradores existem para a configuração de
                    prioridades, mas não serão descritos aqui.
                    O registrador INTMOD (endereço 0x3ff4000) permite definir, para cada
                    fonte de interrupção, qual o sinal de interrupção do processador ARM será
                    utilizado: “IRQ” ou “FIQ”.
                </p>


                <img className="center-image" src={gerenciador_interrupcoes_2} alt="gerenciadorInterrupcoes 2" />
                <p className="espaco-paragrafo">Para cada um dos bits de 0 a 20 do registrador INTMOD, o valor “0” define
                    a interrupção de mesmo índice como associada ao sinal “IRQ” e o valor “1” define
                    essa interrupção como sendo “rápida” (sinal “FIQ”).
                    O registrador INTPEND (endereço 0x3ff4004) permite tanto identificar
                    interrupções pendentes (operação de leitura) quanto reconhecer e limpar
                    interrupções pendentes (escrevendo o valor lógico “1” nos bits individuais). Para
                    cada um dos bits de 0 a 20, o valor “1” indica a ocorrência da interrupção de
                    mesmo índice. O serviço de interrupção do ARM (“IRQ” ou “FIQ”, dependendo da
                    configuração do registrador INTMOD) deve primeiro consultar este registrador
                    para identificar a(s) origem(ns) da(s) interrupção(ções) e, após o seu devido processamento, escrever o valor lógico “1” nos bits correspondentes à(s)
                    interrupção(ões) tratada(s), para reconhecê-la(s). Interrupções não reconhecidas
                    vão causar sucessivos acionamentos do serviço de interrupção.
                </p>



                <img className="center-image" src={gerenciador_interrupcoes_3} alt="gerenciadorInterrupcoes 3" />
                <p className="espaco-paragrafo">O registrador INTMSK (endereço 0x3ff4008) é utilizado para habilitar ou
                    desabilitar (“mascarar”) interrupções. Além disso, o bit 21 é utilizado para
                    habilitação (igual a “zero”) ou mascaramento (igual a “um”) de todas as
                    interrupções simultaneamente (“global”).
                </p>


                <img className="center-image" src={gerenciador_interrupcoes_4} alt="gerenciadorInterrupcoes 4" />
                <p className="espaco-paragrafo">Para cada um dos bits de 0 a 20 do registrador INTMSK, o valor “0” define
                    a interrupção de mesmo índice como habilitada e o valor “1” define essa
                    interrupção como desabilitada (mascarada). Seu valor inicial, após o reset, é
                    0x3fffff, ou seja, com todas as interrupções (incluindo o flag “global”)
                    desabilitadas.
                    Como exemplo, o trecho de código a seguir configura e trata a
                    interrupção do timer 0 (índice 10):
                </p>


                <img className="center-image" src={gerenciador_interrupcoes_5} alt="gerenciadorInterrupcoes 5" />
            </div>
        </>
    );
};

export default GerenciadorInterrupcoes;

