import React from 'react';
import '../../../assets/styles/global.css';
import perifericos_1 from './imgs/perifericos_1.png';
import perifericos_2 from './imgs/perifericos_2.png';
import perifericos_3 from './imgs/perifericos_3.png';
import perifericos_4 from './imgs/perifericos_4.png';
import perifericos_5 from './imgs/perifericos_5.png';
import perifericos_6 from './imgs/perifericos_6.png';
import perifericos_7 from './imgs/perifericos_7.png';

const Perifericos = () => {
    return (
        <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
            <h3>
                Periféricos
            </h3>

            <p>
                Os periféricos do SoC são configurados e controlados por “registradores”
                que são mapeados na memória do sistema. O endereço inicial na memória física a
                partir do qual os registradores de configuração dos periféricos são mapeados é
                denominado PERIPH_BASE e seu valor depende do modelo:

            </p>

            <p>
                <ul className="alinha-item">
                    <li> PERIPH_BASE é 0x3f000000 no Raspberry Pi modelos 2 e 3.
                    </li>
                    <li> PERIPH_BASE é 0x20000000 no Raspberry Pi modelos 0 e 1.
                    </li>
                </ul>
            </p>

            <h4>GPIOs</h4>


            <p>
                O SoC utilizado no Raspberry Pi possui um módulo de controle de GPIO
                com as seguintes características:
                <ul className="alinha-item">
                    <li> 54 pinos configuráveis como entrada ou como saída e eventualmente
                        compartilhados com sinais de controle de outros periféricos (UART, SPI,
                        etc.);
                    </li>
                    <li> Qualquer dos pinos pode ser configurado individualmente com relação à
                        presença ou ausência de resistores de pull-up ou pull-down internos;
                    </li>
                    <li> O módulo GPIO permite identificar eventos em qualquer das entradas
                        (bordas de subida ou descida e níveis elétricos) e produzir interrupções
                        no processador.
                    </li>
                </ul>

            </p>

            <p>
                Os registradores de controle dos GPIOs começam no endereço
                PERIPH_BASE + 0x200000 e são descritos a seguir.
            </p>

            <img className="center-image" src={perifericos_1} alt="Perifericos 1" />


            <p>
                A função de cada GPIO é configurada nos registradores gpfsel,
                envolvendo três bits para cada pino:
            </p>

            <img className="center-image" src={perifericos_2} alt="Perifericos 2" />


            <p>
                Por exemplo, o código a seguir configura o GPIO 17 como entrada e o
                GPIO 18 como saída:
            </p>

            <img className="center-image" src={perifericos_3} alt="Perifericos 3" />
            <p>
                A tabela na página seguinte ilustra as funções alternativas (“ALT0” até
                “ALT5”) que podem ser assumidas por cada um dos GPIOs, distribuídos pelos
                periféricos:

                <ul className="alinha-item">
                    <li> UART (sinais TXDn, RXDn, CTSn e RTSn);
                    </li>
                    <li> SPI (sinais CSn, MISOn, MOSIn e SCKn);
                    </li>
                    <li> I2C (sinais SDAn e SCLn);
                    </li>
                    <li> Saídas de clock (sinais GPCLKn);
                    </li>
                    <li> Saídas PWM (sinais PWMn);
                    </li>
                    <li> Interface de áudio PCM (sinais PCMCK, PCMFS, PCMIN e PCMOUT);
                    </li>
                    <li> Interface EMMC (sinais SDCLK, SDCMD e SDDATn);
                    </li>
                    <li> Interface display paralelo (sinais PCLK, DE, VSYNC, HSYNC e Dn);
                    </li>
                    <li> Interface com memória externa (sinais SAn, SOE, SRW, SDn);
                    </li>
                    <li> Interface J-TAG (sinais TRST, RTCK, TDO, TDI, TCK e TMS).
                    </li>
                </ul>

            </p>

            <img className="center-image" src={perifericos_4} alt="Perifericos 4" />

            <p>
                Para controlar o valor dos GPIOs configurados como saída utilizam-se os
                registradores gpset (para ligar uma ou mais saídas) e gpclr (para desligar uma
                ou mais saídas); esses registradores associam cada bit a uma saída digital (em
                gpset[0] os GPIOs de 0 a 31 e em gpset[1] os GPIOs de 32 a 53). Usar dois
                grupos diferentes de registradores para ligar e para desligar é útil para controlar
                um grupo de GPIOs sem interferir com os demais: ao escrever algum bit “1” em
                gpset ou gpclr, somente as saídas correspondentes serão afetadas, nada
                ocorrendo para os GPIOs cujos bits foram escritos com “0”.
            </p>


            <img className="center-image" src={perifericos_5} alt="Perifericos 5" />

            <p>
                Os registradores gplev retornam os valores atuais dos GPIOs (tanto
                entradas quanto saídas) em seus bits correspondentes.
            </p>

            <p>
                Transições e estados específicos de qualquer GPIO podem ser detectados
                pelo SoC e eventualmente produzir uma interrupção. Os registradores gpeds
                marcam eventos que foram detectados anteriormente pelos GPIOs, conforme
                configurados nos registradores gpren (detectar borda de subida), gpfen
                (detectar borda de descida), gphen (detectar nível alto), gplen (detectar nível
                baixo), gparen (borda de subida, assíncrono) e gpafen (borda de descida,
                assíncrono). A sinalização de eventos pode ser reconhecida nos registradores
                gpeds mediante a escrita do valor lógico “1” nos bits correspondentes; isso é
                obrigatório, no caso de eventos configurados para produzir interrupções no
                processador.

            </p>

            <p>
                A configuração dos resistores de pull-up ou pull-down é realizada usando os
                registradores gppud e gppudclk em conjunto. O primeiro registrador deve ser
                escrito com a configuração desejada: “0” (para desabilitar resistores), “1” (para
                habilitar resistores de pull-down) ou “2” (para habilitar resistores de pull-up);
                após isso, é necessário dar um “pulso de clock” nos flip-flops que controlam os
                resistores, ligando e desligando bits nos registradores gppudclk, conforme os
                GPIOs desejados.
            </p>

            <p>
                Em todos os casos, cada bit dos registradores de índice “0” refere-se a um
                dos GPIOs de índice “0” a “31” e cada bit dos registradores de índice “1” refere-se
                a um dos GPIOs de índice “32” a “53”. Os bits 24-31 dos registradores de índice
                “1” não são utilizados.
            </p>

            <p>
                As interrupções de índices “49”, “50”, “51” e “52” (ou “17”, “18”, “19” e
                “20” do grupo “2”) podem ser habilitadas para ocorrerem conforme eventos
                sejam identificados pelo controlador de GPIO. A interrupção “49” ocorre para
                eventos no primeiro banco de GPIOs (de 0 a 31); as ambas as interrupções “50” e
                “51” ocorrem para eventos no segundo banco de GPIOs (de 32 a 53). Pode-se usar
                também a interrupção “52”, que ocorre para eventos de qualquer banco de
                GPIOs.
            </p>

            <p>
                O exemplo a seguir configura o GPIO 12 para gerar uma interrupção na
                borda de subida do sinal:
            </p>

            <img className="center-image" src={perifericos_6} alt="Perifericos 6" />

            <p>
                Os GPIOs de “0” a “27” estão disponíveis para uso através do conector de
                expansão. A figura a seguir mostra os pinos e suas posições no conector.
            </p>

            <img className="center-image" src={perifericos_7} alt="Perifericos 7" />

        </div>
    );
};

export default Perifericos;
