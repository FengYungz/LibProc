import React from 'react';
import '../../../assets/styles/global.css';
import arquitetura_soc_1 from './imgs/arquitetura-soc_1.png';
import arquitetura_soc_2 from './imgs/arquitetura-soc_2.png';
import Header from "../../../components/Header/index";
import Footer from '../footer';

interface Index{
  index: number;
}

const index:Index = {index:36};

const ArquiteturaSoc = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <h3>
                    Arquitetura do SoC BCM3826
                </h3>

                <p>
                    O componente principal do Raspberry Pi modelo 2 é o circuito integrado
                    BCM3826 da Broadcom, que inclui quatro núcleos ARM Cortex-A7 e uma GPU
                    VideoCore:

                </p>

                <img className="center-image" src={arquitetura_soc_1} alt="arquiteturaSoc 1" />
                <p>
                    Inicialmente o sistema de controle de clock é configurado para produzir
                    um relógio de 250 MHz para a GPU, que é comum às quatro CPUs e à GPU. As
                    CPUs podem reconfigurar o seu clock em até 900 MHz. A memória total do
                    sistema (1 GiB) é dividida entre os núcleos ARM e a GPU, porém todos os
                    processadores podem acessar a memória de forma compartilhada. Além disso,
                    existem “mailboxes” para a comunicação entre os processadores, sem a
                    necessidade de usar a memória RAM.
                </p>

                <p>
                    Quando o sinal de reset é liberado, todos os quatro núcleos ARM passam a
                    executar simultaneamente. Uma vez que cada processador deverá executar o
                    seu próprio thread, é necessário que o software identifique cada um deles e
                    modifique seu contexto apropriadamente; como os núcleos compartilham a
                    memória, também é importante que cada um possua sua(s) própria(s) pilha(s). Na
                    arquitetura v.7 existem instruções especiais para acesso atômico a posições de
                    memória, que devem ser utilizadas para criar semáforos e spin-locks para
                    possibilitar a sincronização entre os núcleos, nos casos de concorrência.
                </p>

                <p>
                    A identificação do núcleo em execução pode ser obtida do coprocessador
                    15, em um registrador chamado MPIDR: seus dois bits menos significativos
                    contém uma identificação (ou “afinidade”) diferente para cada núcleo que ler
                    esse registrador.
                </p>
                <img className="center-image" src={arquitetura_soc_2} alt="arquiteturaSoc 2" />
            </div>
            <Footer {...index} />
        </>
    );
};

export default ArquiteturaSoc;
