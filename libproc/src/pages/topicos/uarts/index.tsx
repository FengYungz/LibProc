import React from 'react';
import '../../../assets/styles/global.css';
import uarts_1 from './imgs/uarts_1.png';
import uarts_2 from './imgs/uarts_2.png';
import uarts_3 from './imgs/uarts_3.png';
import uarts_4 from './imgs/uarts_4.png';
import uarts_5 from './imgs/uarts_5.png';
import uarts_6 from './imgs/uarts_6.png';
import uarts_7 from './imgs/uarts_7.png';
import uarts_8 from './imgs/uarts_8.png';
import uarts_9 from './imgs/uarts_9.png';
import uarts_10 from './imgs/uarts_10.png';
import uarts_11 from './imgs/uarts_11.png';
import Header from "../../../components/Header/index";
import Quiz from "../quiz";
import Footer from '../footer';

interface Index{
  index: number;
}

const index:Index = {index:17};

interface Question{
  quest: string;
  ans: any;
}

const Question1: Question = {quest: "Identifique os registradores envolvidos na comunicação serial da placa Evaluator 7-T e suas respectivas funções.", ans: <div><p>Os registradores envolvidos são: URXBUF0 (ou URXBUF1) e UTXBUF0 (ou UTXBUF1) para ler o caractere que foi recebido e escrever o caractere a ser enviado, respectivamente;</p><p>ULCON0 e ULCON1 para configurar o formato do sinal gerado e reconhecido, definindo quantidade de bits de dados (5 a 8), quantidade de stop bits (1 ou 2), paridade, utilização de clock interno ou externo e habilitação do modo IR;</p><p> UCON0 e UCON1, que são os registradores de controle dos módulos transmissor e receptor;</p><p>USTAT0 e USTAT1, que guardam as informações de estado de cada UART;</p><p>E UBRDIV0 e UBRDIV1, que serve para setar o baudrate da recepção e transmissão.</p><p>Para exemplos de uso dos módulos UART cheque o tópico <a href="https://www.wise-ware.com.br/pcs3732/d/121-uart">UART</a> no fórum da disciplina.</p></div>};

const UARTs = () => {
    return (
        <div>
            <Header />
            <p className="espaco-paragrafo"></p>
            <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
            <div className="content-container">
                <h3>UARTs</h3>
                <p className="espaco-paragrafo">O S3C4510B possui duas unidades de comunicação serial tipo UART
                    (universal asynchronous receiver-transmitter) capazes de enviar e receber
                    caracteres de cinco a oito bits e gerenciar um bit de paridade. Na placa
                    Evaluator-7T as duas UARTs estão conectadas a transceivers RS232 para
                    conexão com portas seriais convencionais de 9 pinos (conectores DB-9).
                </p>
                <p className="espaco-paragrafo">
                    Cada uma das UARTs é composta por três elementos: o transmissor, o
                    receptor e um gerador de baudrate. O transmissor e o receptor são baseados
                    em registradores de deslocamento, cujo sinal de clock é produzido pelo
                    gerador de baudrate. O gerador de baudrate é semelhante a um timer, e pode
                    usar o clock interno (o mesmo do processador) ou um sinal externo para obter
                    taxas mais precisas.
                </p>

                <img className="center-image" src={uarts_1} alt="Uarts 1" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">Os registradores de deslocamento não são acessíveis ao programador.
                    Uma vez concluída a recepção (stop-bit reconhecido), o conteúdo do
                    registrador de deslocamento é copiado para o registrador URXBUF0 (ou
                    URXBUF1, endereços 0x3ffd010 e 0x3ffe010, respectivamente), para que possa
                    ser lido pelo software. Além disso, ao ser recebido um caractere, a UART pode
                    gerar uma interrupção (interrupções 5 ou 7). De forma análoga, para
                    transmitir um caractere, deve-se escrevê-lo no registrador UTXBUF0 (ou
                    UTXBUF1, endereços 0x3ffd00c e 0x3ffe00c, respectivamente); esse
                    registrador vai alimentar o registrador de deslocamento e a transmissão dos
                    bits terá início. Ao final da transmissão completa, uma interrupção pode ser
                    gerada (interrupções 4 ou 6).
                </p>

                <p className="espaco-paragrafo">As UARTs são configuradas usando os registradores descritos a seguir.
                </p>

                <img className="center-image" src={uarts_2} alt="Uarts 2" />

                <img className="center-image" src={uarts_3} alt="Uarts 3" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">Os registradores ULCON0 e ULCON1 (endereços 0x3ffd000 e 0x3ffe000,
                    respectivamente) permitem configurar o formato do sinal gerado e
                    reconhecido pela UART, bem como a origem do sinal a ser utilizado pelo
                    gerador de baudrate. Os registradores UCON0 e UCON1 (endereços 0x3ffd004 e
                    0x3ffe004, respectivamente) permitem habilitar e controlar o transmissor e o
                    receptor:
                </p>


                <img className="center-image" src={uarts_4} alt="Uarts 4" />

                <img className="center-image" src={uarts_5} alt="Uarts 5" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">O estado atual das UARTs pode ser verificado consultando os
                    registradores USTAT0 e USTAT1 (endereços 0x3ffd008 e 0x3ffe008,
                    respectivamente):
                </p>


                <img className="center-image" src={uarts_6} alt="Uarts 6" />

                <img className="center-image" src={uarts_7} alt="Uarts 7" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">Finalmente, os geradores de baudrate são configurado pelos
                    registradores UBRDIV0 e UBRDIV1 (endereços 0x3ffd014 e 0x3ffe014,
                    respectivamente), cujos campos são usados para definir o divisor de
                    frequência.
                </p>


                <img className="center-image" src={uarts_8} alt="Uarts 8" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">A frequência de entrada do gerador de baudrate pode ser a metade da
                    frequência do clock (MCLK / 2) ou um sinal externo (UCLK). No caso de usar o
                    clock interno, o baudrate final é dado pela expressão
                </p>


                <img className="center-image" src={uarts_9} alt="Uarts 9" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">caso o bit “d” de USTAT seja igual a “zero”. Caso seja “1”, o clock de entrada é
                    previamente dividido por dezesseis e o baudrate é dado pela expressão
                </p>


                <img className="center-image" src={uarts_10} alt="Uarts 10" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">No caso da placa Evaluator-7T, usando o clock de 50 MHz, a tabela a
                    seguir mostra os valores para “cnt0” (“d” é zero) para os baudrates mais
                    comuns.
                </p>


                <img className="center-image" src={uarts_11} alt="Uarts 11" />
                <p className="espaco-paragrafo"></p>
                <div>
                <Quiz {...Question1}/>
                </div>
            </div>
            </div>
            <Footer {...index} />
        </div>
    );
};

export default UARTs;

