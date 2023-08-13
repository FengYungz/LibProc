import React from 'react';
import '../../../assets/styles/global.css';
import interrupcoes_1 from './imgs/interrupcoes_1.png';
import interrupcoes_2 from './imgs/interrupcoes_2.png';
import interrupcoes_3 from './imgs/interrupcoes_3.png';
import interrupcoes_4 from './imgs/interrupcoes_4.png';
import interrupcoes_5 from './imgs/interrupcoes_5.png';
import interrupcoes_6 from './imgs/interrupcoes_6.png';

const Interrupcoes = () => {
    return (
        <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
            <h3>
                Interrupções
            </h3>

            <p>
                O processador do Raspberry Pi é um ARM de arquitetura v.7 (ou v.8, no
                caso dos modelos 3 e 4), cujo funcionamento com relação às interrupções é o
                mesmo estudado até agora.

            </p>

            <p>
                O vetor de interrupções sempre é situado a partir do endereço físico
                zero. Em cada posição do vetor deve existir uma única instrução de salto ( b "rótulo" ou ldr pc, ... ). Como os serviços de interrupção podem
                estar em qualquer posição da memória, normalmente ao vetor de interrupção se
                segue uma tabela que contém os endereços absolutos dos serviços, para serem
                lidos pelas instruções do vetor de interrupções com endereçamento indireto (por
                exemplo, ldr pc, [pc, #24] ).
            </p>

            <p>
                O arquivo de imagem é carregado pelo bootloader do Raspberry Pi no
                endereço 0x8000, portanto, as posições de memória correspondentes ao vetor de
                interrupção e à tabela de endereços dos serviços devem ser copiadas para o
                endereço físico zero para que as interrupções funcionem.
            </p>

            <img className="center-image" src={interrupcoes_1} alt="interrupcoes 1" />

            <p>
                Deve-se observar que as exceções ou eventos síncronos são tratados
                localmente, pelo próprio núcleo que produziu a exceção (“undef”, “swi”, e os dois
                tipos de “abort”); já as interrupções (tanto “normais” quanto “rápidas”) são
                geralmente encaminhadas para apenas um dos núcleos no caso dos modelos 2 e 3 do Raspberry Pi.As únicas situações em que isso não ocorre são as
                interrupções específicas de cada núcleo, que são causadas por outro núcleo:
                servindo à comunicação entre os dois (interrupções “doorbell” e “mailbox”). O
                núcleo configurado para tratar as demais interrupções pode ser especificado em
                um registrador apropriado.
            </p>

            <p>
                As interrupções produzidas pelo hardware são tratadas pelo mesmo
                serviço de interrupção (“IRQ”), sendo necessário à função de tratamento
                identificar o(s) periférico(s) causador(es) da interrupção, realizar o seu
                tratamento e finalmente reconhecer a(s) interrupção(ões) junto ao(s)
                respectivo(s) periférico(s). Uma das interrupções pode ser definida como rápida,
                passando a ser tratada de forma exclusiva pelo serviço de interrupção “FIQ”,
                separadamente das demais interrupções.
            </p>

            <p>
                No SoC do Raspberry Pi há um periférico específico para o controle das
                interrupções, que é configurado nos dez registradores a partir do endereço
                PERIPH_BASE + 0xb200:
            </p>

            <img className="center-image" src={interrupcoes_2} alt="interrupcoes 2" />

            <p>
                Os registradores que contém informações sobre as interrupções são
                agrupados de três em três: “basic”, “1” e “2”, em um total de 96 bits. Os
                registradores “basic” tratam das interrupções consideradas “mais comuns” e as
                demais interrupções são distribuídas nos demais registradores. As interrupções
                podem ser habilitadas e desabilitadas individualmente nos registradores com os
                prefixos “enable_” e “disable_”, respectivamente; escrever o valor “1” em um
                bit de um registrador “enable_” (ou “disable_”) habilita (ou desabilita) a
                interrupção correspondente, não interferindo com as interrupções cujos bits
                foram escritos com o valor “0”.
            </p>

            <p>
                Uma das interrupções do sistema pode ser definida como rápida,
                bastando para isso escrever o número correspondente ao seu índice no
                registrador fiq.
            </p>

            <p>
                Os registradores com o prefixo “pending_” marcam em seus respectivos
                bits a ocorrência de cada uma das interrupções possíveis. Dois bits são reservados
                no registrador pending_basic para sinalizar a ocorrência de alguma interrupção do grupo “1” (bit “8”) ou do grupo “2” (bit “9”), dispensando assim a
                verificação dos registradores pending_1 e pending_2, caso esses bits sejam
                iguais a “zero”.
            </p>

            <p>
                As tabelas a seguir descrevem as todas as interrupções existentes no
                Raspberry Pi e os seus respectivos índices:

            </p>

            <ul className="alinha-item">
                <li>
                    Relação das interrupções do grupo “1” (índices “0” até “31”) nos
                    registradores com sufixo “_1”:

                    <img className="center-image" src={interrupcoes_3} alt="interrupcoes 3" />
                </li>

                <li>
                    Relação das interrupções do grupo “2” (índices 32 até 63) nos
                    registradores com sufixo “_2”:

                    <img className="center-image" src={interrupcoes_4} alt="interrupcoes 4" />
                </li>

                <li>
                    Relação das interrupções básicas

                    <img className="center-image" src={interrupcoes_5} alt="interrupcoes 5" />

                    <ul className="alinha-item">
                        <li> Os primeiros oito bits correspondem às interrupções geradas
                            internamente aos núcleos ARM (timer do núcleo e comunicação entre núcleos).
                            Todas as demais interrupções são provenientes de periféricos externos ao
                            núcleo;
                        </li>

                        <li>
                            O estado dos bits 8 e 9 permite verificar se qualquer interrupção dos
                            grupos “1” e “2”, respectivamente, estão pendentes.

                            <img className="center-image" src={interrupcoes_6} alt="interrupcoes 6" />
                        </li>
                    </ul>

                </li>

            </ul>
        </div>
    );
};

export default Interrupcoes;
