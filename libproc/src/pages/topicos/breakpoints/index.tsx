import React from 'react';
import '../../../assets/styles/global.css';
import breakpoints_1 from './imgs/breakpoints_1.png';
import breakpoints_2 from './imgs/breakpoints_2.png';
import breakpoints_3 from './imgs/breakpoints_3.png';

const Breakpoints = () => {
    return (
        <>
            <div className="content-container">
                <h3>Breakpoints</h3>
                <p className="espaco-paragrafo">
                    <h4>Comando "break"</h4>
                    <ul className="alinha-item">
                        <li>
                            O comando “break "local" ou “b "local" introduz um novo ponto de
                            parada (breakpoint) no local especificado.
                            O parâmetro "local" pode ser um endereço em memória (com um asterisco
                            à frente), o nome de uma função, um rótulo, um número de linha referente
                            ao arquivo-fonte atual ou de outro arquivo, no formato “nome do
                            arquivo:número de linha”. Se "local" for omitido, assume-se a posição
                            atual.
                        </li>
                    </ul>
                </p>
                <img className="center-image" src={breakpoints_1} alt="breakpoints 1" />
                <p className="espaco-paragrafo">
                    É importante frisar que, para que o depurador possa encontrar os
                    símbolos definidos no código-fonte (por exemplo, “main”) é necessário que a
                    tabela de símbolos de depuração esteja presente no arquivo executável: algo que
                    normalmente é evitado, para economizar espaço. O programa depurado deve ter
                    sido compilado ou montado com as opções -g ou -ggdb, que obrigam o
                    compilador ou montador a copiar dados para o depurador no arquivo de saída.
                    Além disso, é conveniente reduzir – ou mesmo desabilitar – a realização de
                    otimizações pelo compilador, que podem eventualmente alterar a disposição das
                    instruções no código-objeto, dificultando o entendimento da saída do depurador.
                    Para isso, pode-se utilizar a opção -O do compilador.
                </p>
                <h4>Comando "break" condicional</h4>
                <ul className="alinha-item">
                    <li>
                        O comando “break "local" if "condição"” permite definir uma condição
                        para que a parada no breakpoint aconteça (breakpoint condicional).
                        O parâmetro "local" pode ser um endereço em memória, o nome de uma
                        função, um rótulo, um número de linha referente ao arquivo-fonte atual ou
                        de outro arquivo, no formato “nome do arquivo:número de linha”. Se
                        "local" for omitido, assume-se a posição atual. O parâmetro "condição" pode ser qualquer expressão da linguagem C,
                        envolvendo quaisquer símbolos definidos (no escopo global ou local, em
                        relação à posição do breakpoint), ponteiros (endereços), registradores
                        (precedidos com um cifrão “$”) e constantes. Caso a expressão seja
                        avaliada com um valor diferente de zero, o programa será interrompido no
                        ponto de parada definido; do contrário, o ponto de parada é ignorado.
                    </li>
                </ul>
                <img className="center-image" src={breakpoints_2} alt="breakpoints 2" />
                <h4>Edição de breakpoints</h4>
                <ul className="alinha-item">
                    <li>“info breakpoints” ou “i b” mostra todos os breakpoints definidos, ativos ou
                        não. A informação mais importante da lista de breakpoints é o índice de cada
                        breakpoint. É a partir desse número que os comandos a seguir podem identificar
                        um breakpoint específico para alterá-lo, desabilitá-lo ou removê-lo
                        completamente:
                        <li>
                            “condition "índice" "condição"” – muda ou acrescenta uma condição ao
                            breakpoint cujo índice é especificado no comando;
                        </li>
                        <li>
                            “ignore "índice" "número"” – ignora o “"número"” de ocorrências do
                            breakpoint antes de interromper o programa e retornar ao loop de
                            comandos. Isso permite que um breakpoint somente seja acionado após
                            uma quantidade de ocorrências;
                        </li>
                        <li>
                            “disable "índices"” – desabilita o(s) breakpoint(s) cujo(s) índice(s) é(são)
                            especificado(s) no comando. O(s) breakpoint(s) poderá(ão) ser
                            reabilitado(s) no futuro;
                        </li>
                        <li>
                            “enable "índices"” – habilita o(s) breakpoint(s) cujo(s) índice(s) é(são)
                            especificado(s) no comando;
                        </li>
                        <li>
                            “delete "índices"” – remove permanentemente o(s) breakpoint(s).
                        </li>
                    </li>
                </ul>
                <img className="center-image" src={breakpoints_3} alt="breakpoints 3" />
            </div>
        </>
    );
};

export default Breakpoints;

