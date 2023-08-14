import React from 'react';
import '../../../assets/styles/global.css';
import c_runtime_1 from './imgs/c-runtime_1.png';
import Header from "../../../components/Header/index";

const CRuntime = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <h3>C-Runtime</h3>
                <p className="espaco-paragrafo">
                    O código objeto produzido por um compilador C inclui, além de
                    sequências de instruções de máquina da arquitetura alvo, correspondentes aos
                    algoritmos descritos no programa, funções especiais anexadas pelo linker para o
                    suporte a funcionalidades de nível semântico mais alto oferecidas pela
                    linguagem. As funções do Runtime que são adicionadas ao objeto são escolhidas
                    conforme a necessidade do compilador em relação aos recursos nativos
                    oferecidos pela arquitetura alvo. Uma lista (incompleta) de funções oferecidas
                    pelo runtime é apresentada a seguir:
                </p>
                <ul className="alinha-item">
                    <li>
                        Prólogos e epílogos de funções: alocação de espaço para variáveis locais,
                        salvamento de registradores e manutenção da pilha durante chamadas de
                        funções;
                    </li>
                    <li>
                        Funções de inicialização: montagem e configuração da pilha, suporte aos
                        prólogos e epílogos das funções;
                    </li>
                    <li>
                        Funções de finalização: cleanup, finalização de processo no sistema
                        operacional, etc.;
                    </li>
                    <li>
                        Funções de extensão aritmética: operações com tipos diferentes, tipos
                        estendidos (“long long”, etc.), operações internas (em ponto fixo,
                        precisão arbitrária, ponto flutuante decimal, etc.), emulação de instruções
                        de ponto flutuante (para aquelas que a arquitetura não ofereça suporte);
                    </li>
                    <li>
                        Funções de conversão de tipos: transformação entre os tipos inteiros,
                        precisão de ponto flutuante, conversão e conservação de sinal, etc.;
                    </li>
                    <li>
                        Funções de comparação: comparação de valores de tipos diferentes, com
                        ou sem conversão prévia;
                    </li>
                    <li>
                        Funções de manipulação binária: tratamento de campos de bit,
                        deslocamentos, operações lógicas e operações lógicas bit a bit;
                    </li>
                    <li>
                        Funções para tratamento de situações especiais: controle de execução,
                        exceções, sinais enviados pelo sistema operacional, caches, etc.
                    </li>

                </ul>
                <p className="espaco-paragrafo">
                    As funções do runtime são oferecidas pelo compilador ao linker, contidas em arquivos de biblioteca como libgcc.a e libgcc_s.a . Você pode verificar as funções de baixo nível existentes na versão do gcc que está utilizando com o comando:
                </p>

                <img className="center-image" src={c_runtime_1} alt="cRuntime 1" />
            </div>
        </>
    );
};

export default CRuntime;

