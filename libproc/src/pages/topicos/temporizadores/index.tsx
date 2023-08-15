import React from 'react';
import '../../../assets/styles/global.css';
import temporizadores_1 from './imgs/temporizadores_1.png';
import temporizadores_2 from './imgs/temporizadores_2.png';
import temporizadores_3 from './imgs/temporizadores_3.png';
import temporizadores_4 from './imgs/temporizadores_4.png';
import Header from "../../../components/Header/index";
import MultipleChoiceQuestion from '../multipleChoice';
import Footer from '../footer';

interface Index{
  index: number;
}

const index:Index = {index:16};

interface Question {
  question: string;
  options: string[];
  answer:number;
  correctMessage: any;
  incorrectMessage: any;
}

const Question1: Question = { question: "Qual o maior tempo, em segundos, que pode ser utilizado como intervalo entre interrupções de timer na placa Evaluator 7-T?", options: ["100 segundos", "102,4 segundos", "128 segundos", "85,9 segundos"], answer:3, correctMessage:<div><p>A resposta está correta!</p><p>O maior valor que pode ser carregado nos registradores do tipo TDATA é 2^32-1=4.294.967.295, como a placa Evaluator 7-T possui um clock de 50 MHz, o maior tempo que pode ser atribuído aos temporizadores é de 4.294.967.295/50.000.000=85,89935 segundos.</p><p>Aprenda a usar os temporizadores no tópico <a href="https://www.wise-ware.com.br/pcs3732/d/96-interrupcao-do-timer">Interrupção do timer</a> do fórum da disciplina.</p></div>, incorrectMessage:<div><p>A resposta correta seria 85,9 segundos.</p><p>O maior valor que pode ser carregado nos registradores do tipo TDATA é 2^32-1=4.294.967.295, como a placa Evaluator 7-T possui um clock de 50 MHz, o maior tempo que pode ser atribuído aos temporizadores é de 4.294.967.295/50.000.000=85,89935 segundos.</p><p>Aprenda a usar os temporizadores no tópico <a href="https://www.wise-ware.com.br/pcs3732/d/96-interrupcao-do-timer">Interrupção do timer</a> do fórum da disciplina.</p></div>};


const Temporizadores = () => {
    return (
        <>
            <Header />
            <p className="espaco-paragrafo"></p>
            <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
            <div className="content-container">
                <h3>Temporizadores (timers)</h3>
                <p className="espaco-paragrafo">Um temporizador (timer) é um registrador interno do componente
                    S3C4510B que é decrementado a cada ciclo do sinal master clock (MCLK).
                    Quando esse registrador possui o valor “zero” e é decrementado novamente
                    (“estouro”), seu estado é atualizado com um valor de recarga (reload),
                    armazenado em outro registrador. A situação de estouro pode ser usada para
                    gerar um sinal externo (pulso ou onda quadrada) ou provocar uma
                    interrupção no processador. Assim, o valor armazenado no registrador de
                    recarga é proporcional ao tempo entre cada “estouro” do temporizador: esse
                    é um mecanismo útil para produzir interrupções periódicas.
                </p>


                <img className="center-image" src={temporizadores_1} alt="temporizadores 1" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">No caso da placa Evaluator-7T, o sinal MCLK tem a frequência de 50
                    MHz. O registrador TMOD (endereço 0x3ff6000) é usado para configurar ambos
                    os temporizadores (timer 0 e timer 1). Os registradores TDATA0 (endereço
                    0x3ff6004) e TCNT0 (endereço 0x3ff600c) contém o valor de recarga e o valor
                    atual do contador do timer 0, respectivamente. Os registradores TDATA1
                    (endereço 0x3ff6008) e TCNT1 (endereço 0x3ff6010) cumprem as mesmas
                    funções, para o timer 1.
                </p>


                <img className="center-image" src={temporizadores_2} alt="temporizadores 2" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">Ambos os temporizadores podem ser configurados com campos de três
                    bits do registrador TMOD (endereço 0x3ff6000). O formato desses campos é o
                    mesmo:
                </p>


                <img className="center-image" src={temporizadores_3} alt="temporizadores 3" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">Os bits 1 e 2 (ou 4 e 5 para o timer 1) servem para configurar a saída
                    especial produzida no pino P16 (ou P17 para o timer 1); observe-se que para
                    obter uma saída (pulso ou onda quadrada) nesses pinos, ainda é necessário
                    configurar os pinos como saída especial no registrador IOPCON (endereço
                    0x3ff5004).
                </p>

                <p className="espaco-paragrafo">Para que os timers produzam interrupções, além de habilitá-los, é
                    necessário configurar e habilitar as interrupções correspondentes (índice 10
                    ou 11) através dos registradores INTMOD (endereço 0x3ff4000) e INTMSK
                    (endereço 0x3ff4008).
                    Como exemplo, a sub-rotina a seguir configura o timer 1 para produzir
                    uma interrupção a cada 100 ms:
                </p>


                <img className="center-image" src={temporizadores_4} alt="temporizadores 4" />
                <p className="espaco-paragrafo"></p>
                <div>
                <MultipleChoiceQuestion {...Question1} />
                </div>
            </div>
            </div>
            <Footer {...index} />
        </>
    );
};

export default Temporizadores;

