import React from 'react';
import '../../../assets/styles/global.css';
import execucao_processo_1 from './imgs/execucao-processo_1.png';
import Header from "../../../components/Header/index";

const ExecucaoControleProcesso = () => {
    return (
        <>
            <Header />
            <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
                <h3>Execução e controle do processo</h3>
                <ul className="alinha-item">
                    <li>
                        <strong>"run" ou "r":</strong> executa o programa a partir do início, somente retornando quando terminar, ocorrer uma exceção, encontrar um breakpoint ou receber um comando de interrupção (Control + C);
                    </li>
                    <li>
                        <strong>"continue" ou "c":</strong> executa o programa a partir da posição atual, somente retornando quando terminar, ocorrer uma exceção, encontrar um breakpoint ou receber um comando de interrupção (Control + C);
                    </li>
                    <li>
                        <strong>"step" ou "s":</strong> executa a próxima linha do código-fonte, retornando em seguida;
                    </li>
                    <li>
                        <strong>"stepi" ou "si":</strong> executa a próxima instrução de máquina, retornando em seguida;
                    </li>
                    <li>
                        <strong>"next" ou "n":</strong> executa a próxima linha do código-fonte, retornando em seguida. Caso seja uma chamada de sub-rotina (função, procedimento, método, etc.), executa a sub-rotina inteira antes de retornar;
                    </li>
                    <li>
                        <strong>"nexti" ou "ni":</strong> executa a próxima instrução de máquina, retornando em seguida. Caso seja uma chamada de sub-rotina (função, procedimento, método, etc.), executa a sub-rotina inteira antes de retornar;
                    </li>
                </ul>
                <p className="espaco-paragrafo">
                    Os comandos “continue”, “step” ou “next” podem incluir um número de repetições. Nesse caso, o comando será repetido esse número de vezes antes de retornar ao loop de comandos. Exemplos:
                </p>
                <img className="center-image" src={execucao_processo_1} alt="execucaoProcesso 1" />
                <ul className="alinha-item">
                    <li>
                        “finish” ou “fin” – executa a sub-rotina atual até o final e retorna;
                    </li>
                    <li>
                        “kill” – encerra o programa;
                    </li>
                    <li>
                        “backtrace”, “ba” ou “where” – mostra o ponto de execução atual,
                        incluindo todas as chamadas de sub-rotinas na pilha do sistema.
                    </li>
                    <li>
                        Se for enviado um comando vazio (ou seja, pressionar a tecla 'enter' sem
                        digitar nenhum comando), o gdb vai repetir o comando anterior, o que é
                        muito útil para executar sucessivas linhas com “step”, “continue” ou
                        “next”, ou ainda para continuar a visualização da memória com os
                        comandos “list” ou “x”.
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ExecucaoControleProcesso;

