import React from 'react';
import '../../../assets/styles/global.css';
import core_timer_1 from './imgs/core-timer_1.png';
import core_timer_2 from './imgs/core-timer_2.png';
import Header from "../../../components/Header/index";

const CoreTimer = () => {
    return (
        <>
            <Header />
            <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
                <h3>
                    Core timer
                </h3>

                <p>
                    Cada núcleo do SoC BCM383x possui um timer independente, capaz de
                    gerar uma interrupção periódica, para a contabilização de tempo ou para
                    virtualização de CPU baseada em tempo compartilhado. Esse timer é um contador
                    “free running”, que deve receber uma frequência fixa de 1 MHz; a cada ciclo de
                    relógio (1 µs), o valor do contador é decrementado e uma interrupção é gerada
                    quando esse valor chegar a zero. A cada interrupção, o contador é recarregado
                    com um valor de “reload”, que determina portanto o intervalo de tempo entre
                    duas interrupções consecutivas. Além do core timer, existe outro periférico,
                    externo ao núcleo, chamado system timer, que pode ser utilizado para finalidades
                    semelhantes.
                </p>

                <p>
                    O core timer é configurado em nove registradores, residentes na memória
                    a partir do endereço PERIPH_BASE + 0xb400, conforme a descrição a seguir.
                </p>

                <img className="center-image" src={core_timer_1} alt="core_timer 1" />

                <ul className="alinha-item">
                    <li> O valor atual do timer pode ser lido ou escrito no registrador counter; o
                        valor de recarga pode ser configurado nos registradores load ou reload.
                        Uma alteração no registrador reload somente tem efeito após a próxima
                        interrupção do timer;
                    </li>
                    <li> O registrador pre deve conter uma constante para o divisor de
                        frequências, de modo a manter a frequência de clock para o core timer em 1
                        MHz. Como a frequência padrão do sistema no Raspberry Pi é de 250 MHz
                        e a frequência do barramento APB é 125 MHz, devemos gravar o valor
                        “126” nesse registrador;
                    </li>
                    <li> control é o registrador empregado para ativar o timer e sua interrupção;
                    </li>
                    <li> o registrador ack deve ser escrito pelo serviço de tratamento da
                        interrupção para reconhecer o seu tratamento.
                    </li>
                </ul>

                <p>
                    Exemplo de código para o core timer:
                </p>

                <img className="center-image" src={core_timer_2} alt="core_timer 2" />
            </div>
        </>
    );
};

export default CoreTimer;
