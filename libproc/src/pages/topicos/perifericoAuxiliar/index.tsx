import React from 'react';
import '../../../assets/styles/global.css';
import perifericos_auxiliar_1 from './imgs/perifericos-auxiliar_1.png';
import perifericos_auxiliar_2 from './imgs/perifericos-auxiliar_2.png';
import perifericos_auxiliar_3 from './imgs/perifericos-auxiliar_3.png';
import perifericos_auxiliar_4 from './imgs/perifericos-auxiliar_4.png';
import Header from "../../../components/Header/index";

const PerifericosAuxiliar = () => {
    return (
        <>
            <Header />
            <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
                <h3>
                    Periférico “auxiliar” e a Mini-UART
                </h3>

                <p>
                    O chamado “periférico auxiliar” ou “aux” implementa três interfaces de
                    comunicação, uma assíncrona (a “mini UART”) e duas síncronas (os canais SPI). A
                    “mini UART” é uma implementação simplificada do tradicional chip 16550, que
                    vamos utilizar para comunicar com o computador de desenvolvimento.
                </p>

                <img className="center-image" src={perifericos_auxiliar_1} alt="perifericos_auxiliar 1" />

                <p>
                    Os registradores são razoavelmente compatíveis com suas versões de
                    mesmo nome no 16550 (sempre os oito bits menos significativos):
                </p>

                <ul className="alinha-item">
                    <li> O registrador io pode ser lido (dados recebidos) ou escrito (dado a
                        enviar), acessando o buffer de recepção ou de transmissão, conforme o
                        caso. Cada um dos buffers pode armazenar até oito bytes;
                    </li>
                    <li> O registrador ier (interrupt enable register) serve para habilitar ou
                        desabilitar as interrupções de transmissão (bit “1”) e de recepção (bit
                        “0”). A interrupção de recepção acontece enquanto existir pelo menos
                        um byte no buffer de recepção; a interrupção de transmissão ocorre
                        sempre que houver pelo menos uma posição vaga no buffer de
                        transmissão;
                    </li>
                    <li> O registrador iir (interrupt identification register) permite identificar a
                        interrupção pendente através dos bits 1-2: “00” = não há interrupções
                        pendentes; “01” = interrupção de transmissão pendente; “10” =
                        interrupção de recepção pendente. A combinação “11” é inválida;
                    </li>
                    <li> O registrador lcr (line control register) é usado para a configuração do
                        canal serial, em termos de número de bits, paridade e número de stop bits;
                    </li>
                    <li> O registrador stat (que não existe no 16550) permite consultar
                        resumidamente o estado atual da interface serial:
                        <ul className="alinha-item">
                            <li> bit “0” – há dados para serem lidos no buffer de recepção;
                            </li>
                            <li> bit “1” – há espaço no buffer de transmissão;
                            </li>
                            <li> bit “2” – o receptor está ocioso;
                            </li>
                            <li> bit “3” – o transmissor está ocioso, etc.
                            </li>
                        </ul>
                    </li>
                    <li> O registrador baud deve ser escrito com o valor do divisor para a
                        produção do baudrate desejado, que é calculado pela expressão:

                        <img className="center-image" src={perifericos_auxiliar_2} alt="perifericos_auxiliar 2" />

                        <ul className="alinha-item">
                            <li> O valor de systemclock normalmente é 250000000 (250 MHz).
                            </li>
                        </ul>
                    </li>
                </ul>

                <img className="center-image" src={perifericos_auxiliar_3} alt="perifericos_auxiliar 3" />

                <p>
                    As interrupções da Mini UART são compartilhadas com as demais
                    interrupções do periférico “aux” (interrupção “29” do grupo “1” de
                    interrupções). O estado da interrupção pode ser lido no registrador AUX_IRQ: bit
                    “0” ligado = interrupção da mini UART:
                </p>

                <img className="center-image" src={perifericos_auxiliar_4} alt="perifericos_auxiliar 4" />
            </div>
        </>
    );
};

export default PerifericosAuxiliar;
