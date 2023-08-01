import React from 'react';
import '../../../assets/styles/global.css';
import variaveis_memoria_1 from './imgs/variaveis-memoria_1.png';
import variaveis_memoria_2 from './imgs/variaveis-memoria_2.png';
import variaveis_memoria_3 from './imgs/variaveis-memoria_3.png';
import variaveis_memoria_4 from './imgs/variaveis-memoria_4.png';
import variaveis_memoria_5 from './imgs/variaveis-memoria_5.png';


const VariaveisConteudoMemoria = () => {
    return (
        <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
            <h3>Variáveis e conteúdo da memória</h3>
            <p className="espaco-paragrafo">
                <h4>Comandos “print” e “display”</h4>
            </p>

            <ul className="alinha-item">
                <li>
                    <strong>"print &lt;expressão&gt;" ou "p &lt;expressão&gt;":</strong> avalia e mostra o valor da expressão, que pode incluir endereços, constantes e o nome de variáveis que sejam visíveis no escopo corrente;
                </li>
                <li>
                    <strong>"display &lt;expressão&gt;" ou "d &lt;expressão&gt;":</strong> o mesmo que "print", porém memoriza a expressão, recalcula e mostra o seu valor atualizado a cada passo da execução na linha de comando do depurador;
                </li>
            </ul>
            <p className="espaco-paragrafo">
                Os comandos "print" e "display" podem especificar o formato no qual a expressão será exibida, utilizando a notação "print/&lt;formato&gt; &lt;expressão&gt;". Os valores permitidos para &lt;formato&gt; são:
            </p>
            <ul className="alinha-item">
                <li>'a' = ponteiro, 'c' = caractere, 'd' = inteiro com sinal, 'u' = inteiro sem sinal;</li>
                <li>'o' = inteiro em octal, 't' = inteiro em binário, 'x' = inteiro em hexadecimal;</li>
                <li>'f' = ponto flutuante;</li>
                <li>'s' = string.</li>
            </ul>
            <img className="center-image" src={variaveis_memoria_1} alt="variaveisMemoria 1" />
            <p className="espaco-paragrafo">
                A lista de expressões incluídas pelo comando "display" pode ser visualizada e alterada a partir do comando "info display" (ou "i display"), de forma semelhante ao apresentado anteriormente para os breakpoints.
            </p>
            <ul className="alinha-item">
                <li>
                    <strong>"disable display &lt;índice&gt;":</strong> interrompe a exibição da expressão identificada por &lt;índice&gt;;
                </li>
                <li>
                    <strong>"enable display &lt;índice&gt;":</strong> ativa novamente a exibição, anteriormente desabilitada por "disable display ...";
                </li>
                <li>
                    <strong>"undisplay &lt;índice&gt;":</strong> remove permanentemente a expressão identificada por &lt;índice&gt; da lista de expressões.
                </li>
            </ul>
            <h4>Comando "set"</h4>
            <ul className="alinha-item">
                <li>  O comando "set" permite alterar o valor de uma variável, registrador ou de posições de memória, no formato "set &lt;destino&gt; = &lt;expressão&gt;".
                </li>
                <li>&lt;destino&gt; pode ser um símbolo ou um endereço (precedido por um asterisco). Neste último caso, é recomendado incluir um cast para definir o tipo da expressão, entre parênteses, como em C (por exemplo, "(int)", "(float)", etc.).
                </li>
            </ul>
            <img className="center-image" src={variaveis_memoria_2} alt="variaveisMemoria 2" />
            <h4>Watchpoints</h4>
            <ul className="alinha-item">
                <li>
                    “watch "dado"” ou “w "dado"” cria um ponto de observação (watchpoint)
                    relacionado a "dado", que pode ser um símbolo do programa ou um
                    endereço de memória. Sempre que o valor de "dado" for modificado pelo
                    programa em depuração, o processo será interrompido, de forma
                    equivalente ao que acontece um com um breakpoint;
                </li>
                <li>
                    Os pontos de observação ativos podem ser visualizados e alterados a partir
                    do comando “info watch” (ou “i watch”). Os watchpoints também aparecem
                    na lista de breakpoints (com “info break”).
                    <li>
                        “disable "índices"” – desabilita o(s) watchpoint(s) cujo(s) índice(s)
                        é(são) especificado(s) no comando. O(s) watchpoint(s) poderá(ão) ser
                        reabilitado(s) no futuro;
                    </li>
                    <li>
                        “enable "índices"” – habilita o(s) watchpoint(s) cujo(s) índice(s) é(são)
                        especificado(s) no comando;
                    </li>
                    <li>
                        “delete "índices"” – remove permanentemente o(s) watchpoint(s).
                        Caso o valor de "índices" seja omitido nos comandos “disable”, “enable” ou
                        “delete”, a operação afetará todos os watchpoints e breakpoints existentes.
                    </li>
                </li>
            </ul>

            <img className="center-image" src={variaveis_memoria_3} alt="variaveisMemoria 3" />

            <h3>Obtendo Informações sobre Símbolos e Variáveis</h3>
            <p className="espaco-paragrafo">
                Use o comando "info scope &lt;local&gt;" ou "i scope &lt;local&gt;" para saber quais são os símbolos visíveis em um determinado escopo: &lt;local&gt; pode ser o nome de uma função ou um endereço de uma instrução.
            </p>
            <p className="espaco-paragrafo">
                O comando "whatis &lt;símbolo&gt;" permite identificar o tipo que foi declarado para um símbolo (inteiro, ponteiro, ponto flutuante, etc.).
            </p>
            <h3>Visualizar e Alterar o Conteúdo da Memória</h3>
            <p className="espaco-paragrafo">
                O comando "x/&lt;formato&gt; &lt;endereço&gt;" permite visualizar o conteúdo de uma ou várias posições de memória, em diversos formatos diferentes.
            </p>
            <ul className="alinha-item">
                <li>
                    Se &lt;formato&gt; incluir um número, ele especifica a quantidade de registros na memória a ser exibida pelo comando;
                </li>
                <li>
                    Um caractere permite definir o tipo dos registros a exibir:
                    <ul className="alinha-item">
                        <li>'u' = ignorar sinal;</li>
                        <li>'d' = decimal, 'x' = hexadecimal, 'o' = octal, 't' = binário;</li>
                        <li>'a' = endereço, 'i' = instrução (disassembly);</li>
                        <li>'c' = caractere, 's' = string, 'f' = ponto flutuante.</li>
                    </ul>
                </li>
                <li>
                    Outro caractere permite definir o tamanho de cada registro individual:
                    <ul className="alinha-item">
                        <li>'b' = byte – um registro por endereço;</li>
                        <li>'h' = half-word – um registro a cada dois endereços (16 bits);</li>
                        <li>'w' = word – um registro a cada quatro endereços (32 bits);</li>
                        <li>'g' = giant – um registro a cada oito endereços (64 bits).</li>
                    </ul>
                </li>
            </ul>

            <img className="center-image" src={variaveis_memoria_4} alt="variaveisMemoria 4" />
            <ul className="alinha-item">
                <li>
                    O comando “x” – sem a especificação do endereço – repete o comando “x”
                    anterior, com o mesmo formato, a partir do último endereço mostrado;
                </li>
                <li>
                    Observe-se que o parâmetro deve ser sempre um endereço. No caso de
                    símbolos declarados em C, os comandos abaixo são equivalentes:
                </li>
            </ul>
            <img className="center-image" src={variaveis_memoria_5} alt="variaveisMemoria 5" />
            <ul className="alinha-item">
                <li>
                    O comando “set” também pode ser usado para alterar posições de
                    memória a partir de um endereço, prefixado com um asterisco. Neste
                    caso, é sempre conveniente incluir um cast para definir o tipo de dados
                    correto.
                </li>
            </ul>

        </div >
    );
};

export default VariaveisConteudoMemoria;

