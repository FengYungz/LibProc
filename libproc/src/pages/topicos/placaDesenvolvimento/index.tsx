import React from 'react';
import '../../../assets/styles/global.css';
import placa_desenvolvimento_1 from './imgs/placa-desenvolvimento_1.png';
import placa_desenvolvimento_2 from './imgs/placa-desenvolvimento_2.png';
import placa_desenvolvimento_3 from './imgs/placa-desenvolvimento_3.png';
import placa_desenvolvimento_4 from './imgs/placa-desenvolvimento_4.png';
import placa_desenvolvimento_5 from './imgs/placa-desenvolvimento_5.png';
import placa_desenvolvimento_6 from './imgs/placa-desenvolvimento_6.png';
import Header from "../../../components/Header/index";
import MultipleChoiceQuestion from '../multipleChoice';
import Footer from '../footer';

interface Index{
  index: number;
}

const index:Index = {index:13};

interface Question {
    question: string;
    options: string[];
    answer:number;
    correctMessage: any;
    incorrectMessage: any;
  }
  
const Question1: Question = { question: "Qual o tamanho máximo, em instruções, de um programa que é possível carregar na placa Evaluator 7-T, considerando que o monitor não será usado?", options: ["110592 instruções", "122880 instruções", "131072 instruções", "480000 instruções"], answer:1, correctMessage:<div><p>A resposta está correta!</p><p>O programa seria escrito no espaço livre da RAM (com adição do espaço reservado ao monitor), supondo que não haja alocação de memória para dados envolvida no código, estão disponíveis para a escrita de instruções (432 + 48)*1024/4 palavras (32 bits) na memória da placa Evaluator 7-T.</p></div>, incorrectMessage:<div><p>A resposta correta seria 122880 instruções.</p><p>O programa seria escrito no espaço livre da RAM (com adição do espaço reservado ao monitor), supondo que não haja alocação de memória para dados envolvida no código, estão disponíveis para a escrita de instruções (432 + 48)*1024/4 palavras (32 bits) na memória da placa Evaluator 7-T.</p></div>};
  

const PlacaDesenvolvimento = () => {
    return (
        <>
            <Header />
            <p className="espaco-paragrafo"></p>
            <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
            <div className="content-container">
                <h3>Placa de desenvolvimento Evaluator-7T</h3>
                <p className="espaco-paragrafo">
                    A placa de desenvolvimento utilizada no laboratório é baseada no
                    componente S3C4510B da Samsung, que é um processador ARM da arquitetura
                    v.4 (ARM7TDMI). Ele é compatível com os conjuntos de instruções A32 (v.4) e T16
                    (v.1), possuindo funções de depuração (TAP/J-TAG) e cache interno. A placa
                    possui 1 MiB de memória total, dividida entre SRAM e flash, implementadas com
                    componentes externos ao processador.
                </p>


                <img className="center-image" src={placa_desenvolvimento_1} alt="placaDesenvolvimento 1" />
                <p className="espaco-paragrafo"></p>

                <p className="espaco-paragrafo">
                    O processador S3C4510B inclui entradas e saídas digitais para uso geral
                    (GPIOs), algumas delas são utilizadas na placa para acionar leds e um display de
                    sete segmentos, bem como para ler o estado de chaves. Além disso, duas
                    interfaces seriais UART estão disponíveis como portas RS232. Nós vamos utilizar
                    a interface de depuração J-TAG para carregar, executar e depurar programas.
                </p>


                <img className="center-image" src={placa_desenvolvimento_2} alt="placaDesenvolvimento 2" />
                <p className="espaco-paragrafo"></p>

                <p className="espaco-paragrafo">De forma semelhante a um microcontrolador, o componente S3C4510B
                    inclui periféricos internos: os já mencionados GPIO e duas UARTs, dois timers, um
                    controlador de barramento I2C, duas interfaces HDLC e um controlador de enlace
                    ethernet (não utilizados na placa Evaluator-7T). Ao contrário dos microcontroladores, por outro lado, o S3C4510B não possui memórias internas (à
                    exceção da memória cache), dependendo de um barramento externo para a
                    leitura das instruções e dados. O chip possui um controlador de memória SDRAM
                    com possibilidade para mapeamento de endereços e o controle do processo de
                    refresh de memória dinâmica. Além disso, ele possui um controlador de DMA
                    (acesso direto à memória) e um controlador de interrupções, capaz de
                    interromper o processador a partir de 21 fontes de interrupção diferentes.

                </p>

                <p className="espaco-paragrafo">Visto pelo processador ARM, o mapa de memória da placa Evaluator-7T é
                    apresentado na figura a seguir. Essa configuração de memória é realizada pelo
                    programa bootloader armazenado na memória flash, que é executado quando a
                    alimentação da placa é ligada.

                </p>

                <img className="center-image" src={placa_desenvolvimento_3} alt="placaDesenvolvimento 3" />
                <p className="espaco-paragrafo"></p>

                <p className="espaco-paragrafo">Observe que, como em todas as máquinas de arquitetura ARM, os
                    periféricos são mapeados em memória: para configurar e utilizar os dispositivos de
                    entrada e saída, devem ser lidas e escritas posições de memória particulares.
                </p>
                <p className="espaco-paragrafo">
                    A memória RAM, com 512 kiB de tamanho, é mapeada a partir do
                    endereço zero:
                </p>


                <img className="center-image" src={placa_desenvolvimento_4} alt="placaDesenvolvimento 4" />
                <p className="espaco-paragrafo"></p>

                <p className="espaco-paragrafo">Os primeiros bytes da memória contém o vetor de interrupções,
                    inicialmente preenchido pelo bootloader. Toda a memória RAM pode ser utilizada para programas do usuário, mas os últimos 48 kiB são reservados ao programa
                    monitor (“Angel”). Como vamos depurar usando a interface J-TAG, não vamos
                    utilizar o monitor e essa restrição não se aplica.
                </p>


                <img className="center-image" src={placa_desenvolvimento_5} alt="placaDesenvolvimento 5" />
                <p className="espaco-paragrafo"></p>

                <p className="espaco-paragrafo">Para referência, a memória flash é organizada em três seções a partir dos
                    endereços 0x1800000 (bootloader), 0x1810000 (monitor angel) e 0x1820000 (livre).
                    Não vamos utilizar a memória flash no laboratório, portanto ela deve ser
                    considerada como uma memória apenas para leitura.
                    Finalmente, os dispositivos de entrada e saída são mapeados nos
                    endereços a partir de 0x3ff0000, conforme a figura seguinte.
                </p>
                <p className="espaco-paragrafo">
                    Para referência, a memória flash é organizada em três seções a partir dos
                    endereços 0x1800000 (bootloader), 0x1810000 (monitor angel) e 0x1820000 (livre).
                    Não vamos utilizar a memória flash no laboratório, portanto ela deve ser
                    considerada como uma memória apenas para leitura.
                </p>
                <p className="espaco-paragrafo">
                    Finalmente, os dispositivos de entrada e saída são mapeados nos
                    endereços a partir de 0x3ff0000, conforme a figura seguinte.
                </p>
                <img className="center-image" src={placa_desenvolvimento_6} alt="placaDesenvolvimento 6" />
                <p className="espaco-paragrafo"></p>
                <div>
                <MultipleChoiceQuestion {...Question1}/>
                </div>
            </div>
            </div>
            <Footer {...index} />
        </>
    );
};

export default PlacaDesenvolvimento;

