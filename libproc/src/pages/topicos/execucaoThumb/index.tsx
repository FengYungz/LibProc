import React from 'react';
import execucao_thumb_1 from './imgs/execucao-thumb_1.png';
import '../../../assets/styles/global.css';

const ExecucaoConjuntoInstrucoesThumb = () => {
    return (
        <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
            <h3>Execução do conjunto de instruções Thumb</h3>
            <p className="espaco-paragrafo">
                Os processadores ARM normalmente interpretam as instruções thumb
                (“máquina virtual thumb”), realizando buscas (“fetch”) de 16 bits no primeiro
                estágio do pipeline. Essa interpretação é relativamente direta, considerando
                execução incondicional para as instruções e mapeando os campos thumb nos
                campos equivalentes de uma instrução ARM regular, eventualmente
                complementando com zeros.

            </p>
            <img className="center-image" src={execucao_thumb_1} alt="ExecucaoThumb 1" />
            <p className="espaco-paragrafo">Por outro lado, em arquiteturas especiais, como o Cortex-M
                (microcontroladores), o processador é projetado e otimizado para executar
                diretamente as instruções thumb (sem um processo de “tradução”), que passa a
                ser o único conjunto de instruções disponível.</p>
        </div>
    );
};

export default ExecucaoConjuntoInstrucoesThumb;
