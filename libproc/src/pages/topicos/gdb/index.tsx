import React from 'react';
import '../../../assets/styles/global.css';
import Header from "../../../components/Header/index";
import Footer from '../footer';

interface Index{
  index: number;
}

const index:Index = {index:9};

const DepuradorGNU = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <h3>O Depurador do Gnu (gdb)</h3>
                <p className="espaco-paragrafo">
                    O depurador do sistema Gnu (Gnu Debugger ou gdb) é um software com
                    muitos recursos para analisar, depurar e alterar um outro programa, na maior
                    parte das vezes enquanto esse programa é executado. Dessa forma, é possível
                    observar a ocorrência de eventos (frequentemente erros) em tempo real e
                    analisar as condições que favoreceram tais eventos. Alguns dos recursos
                    oferecidos pelo gdb são:
                </p>
                <ul className="alinha-item">
                    <li>Sincronização entre o ponto de execução atual e o código-fonte do programa, caso disponível;</li>
                    <li>Interrupção da execução do programa a qualquer momento (break);</li>
                    <li>Interrupção do programa depurado em pontos de parada (breakpoints) definidos pelo usuário em endereços de memória arbitrários;</li>
                    <li>Monitoramento do estado de posições de memória (variáveis, símbolos em geral), podendo provocar interrupção do programa depurado, conforme seu valor seja alterado (watchpoints), de forma semelhante aos breakpoints;</li>
                    <li>Execução passo a passo, seja por linhas do código-fonte (em C ou outra linguagem), seja por instruções de máquina individuais (assembly);</li>
                    <li>Visualização da memória em diversos formatos: mapa de memória, caracteres, strings, números inteiros (hexadecimal, octal, decimal ou binário), números em ponto flutuante, instruções de máquina (disassembly), etc.;</li>
                    <li>Visualização do contexto do processador através dos registradores internos;</li>
                    <li>Visualização do estado do programa a partir da pilha de chamadas de sub-rotinas;</li>
                    <li>Alteração (edição) do ponto de execução do programa: execução de saltos, reinícios (reset), encerramento do programa (exit), etc.;</li>
                    <li>Alteração (edição) de qualquer posição de memória (desde que a escrita nessa posição seja permitida) e dos registradores do processador.</li>
                </ul>
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">
                    O depurador pode ser um programa único, executado pela mesma máquina e sistema operacional que executa o programa depurado ou pode ser dividido em duas partes que se comunicam (por exemplo, através de uma rede de computadores, uma porta USB ou um canal serial). Nesse último caso, o programa depurado pode estar em outra máquina, eventualmente em outra arquitetura e por um sistema operacional diferente (ou mesmo não possuir qualquer sistema operacional envolvido). A parte do gdb que é executada na máquina de teste, juntamente com o programa depurado, é chamado de stub.
                </p>
                <p className="espaco-paragrafo">
                    Essa é uma situação comum quando depuramos um programa embarcado (em uma placa com um microcontrolador ou um aplicativo em um telefone celular, por exemplo) ou quando depuramos o próprio kernel do Linux executando em uma outra máquina. No caso do sistema emulado com o qemu, o stub está incluído no próprio programa do emulador.
                </p>
                <p className="espaco-paragrafo">
                    O gdb ou o seu stub podem ser controlados por qualquer programa
                    diretamente, através de troca de mensagens, mas também existem bibliotecas de
                    sistema (tais como libgdb.so) que oferecem uma interface de programação
                    (API) de nível mais alto, que facilita a integração. Porém o uso mais comum é
                    através de um aplicativo de linha de comando (utilitário “gdb”): esse é um
                    aplicativo tipo “read-eval-print-loop” ou REPL: aguarda um comando do usuário
                    via terminal, executa o comando, mostra de volta o resultado do comando e
                    repete o processo indefinidamente.
                </p>
                <p className="espaco-paragrafo">
                    Alguns dos comandos (tais como “run” e “continue”) transferem o controle
                    ao programa em depuração e somente vão retornar com algum resultado quando
                    esse programa for encerrado ou interrompido por uma exceção ou por um
                    breakpoint. Outros comandos são interativos, respondendo imediatamente. Em
                    qualquer momento, a interrupção do programa em execução pode ser forçada
                    pelo usuário do gdb com a combinação de teclas break (geralmente Control + C):
                    neste caso, o loop de interpretação de comandos retorna.
                </p>
                <p className="espaco-paragrafo">
                    É importante notar que enquanto o depurador aguarda um comando do
                    usuário, o processo em teste não está sendo executado e permanece em seu
                    último estado e contexto. Os comandos mais importantes do gdb em linha de
                    comando serão descritos na próxima página.
                </p>
            </div>
            <Footer {...index} />
        </>
    );
};

export default DepuradorGNU;

