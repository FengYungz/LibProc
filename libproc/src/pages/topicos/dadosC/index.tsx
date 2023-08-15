import React from 'react';
import '../../../assets/styles/global.css';
import bibCquest from './imgs/bibCquest.png';
import Header from "../../../components/Header/index";
import Quiz from "../quiz";
import styled from 'styled-components';
import Footer from '../footer';

interface Index{
  index: number;
}

const index:Index = {index:21};

const QuestImg = styled.img`
  max-width: 40%;
  height: auto;
  display: block;
  margin: 0 auto;
  `;

interface Question{
  quest: any;
  ans: any;
}

const Question1: Question = {quest: <div><p>Onde vão estar os símbolos a, b, c e i na memória do programa em C abaixo?</p><QuestImg src={bibCquest} alt="BibC" /> </div>, ans: <div><p>a, por ser uma variável global sem inicialização, estará no segmento .bss (valor inicial 0)</p><p>b, por ser uma variável local estática com inicialização, estará no segmento .data</p><p>E c e i, por serem variáveis locais normais, estarão no segmento de pilha.</p><p>Para entender melhor o problema consulte a resposta à <a href="https://www.wise-ware.com.br/pcs3732/d/156-questoes-em-sala/23">Questão 19</a> no fórum da disciplina.</p></div>};


const DadosC = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <h3>Dados em C</h3>
                <p className="espaco-paragrafo">
                    Variáveis declaradas em C são alocadas pelo compilador em diferentes
                    segmentos de memória, de acordo com o seu escopo e modo de inicialização:
                </p>

                <ul className="alinha-item">
                    <li>
                        Variáveis globais com algum valor inicial são incluídos no segmento
                        .data e o valor inicial é escrito na posição de memória correspondente;
                    </li>
                    <li>
                        Variáveis globais sem inicialização são incluídas no segmento .bss10 (ou
                        simplesmente como símbolos “comuns”). A memória onde reside o
                        segmento .bss é inicializada com zeros pelo startup da biblioteca C
                        (crt0.o), antes da chamada à função main();
                    </li>
                    <li>
                        Variáveis locais (declaradas no interior de uma função) marcadas com
                        static também são alocadas nos mesmos segmentos .data ou .bss,
                        conforme a existência de inicializações, possivelmente com um símbolo
                        alterado (name mangling) para evitar conflito com o nome de outras
                        variáveis;
                    </li>
                    <li>
                        Variáveis locais (declaradas no interior de uma função) são criadas (pelo
                        prólogo da função) e destruídas (pelo epílogo da função) dinamicamente
                        pelo runtime no segmento de pilha e são, portanto, invisíveis para o linker.
                        Instâncias de variáveis locais pertencentes a chamadas recursivas de uma
                        mesma função estão em frames diferentes da pilha. Preste atenção que não
                        existe nenhum tipo de inicialização para variáveis criadas na pilha: jamais
                        assuma o valor “zero”, por exemplo.
                    </li>
                </ul>
                <p className="espaco-paragrafo"></p>

                <p className="espaco-paragrafo">
                    Vetores são alocados em posições de memória consecutivas, com um
                    tamanho correspondente ao produto do número de elementos pelo tamanho de
                    cada elemento. O acesso aos elementos individuais de um vetor é realizado
                    diretamente em código de máquina, em geral usando modos de endereçamento
                    indexados: o runtime da linguagem C não faz nenhum tipo de verificação de
                    endereçamento (boundary violations), portanto é perfeitamente viável invadir
                    áreas não alocadas por um vetor.
                </p>

                <p className="espaco-paragrafo">
                    Operações realizadas com ponteiros para elementos de um vetor levam
                    em consideração o tamanho de cada elemento, o que normalmente corresponde
                    ao comportamento desejado. A forma como um vetor é disposto na memória
                    pode também ser afetado por características inerentes à arquitetura, como por
                    exemplo, obrigatoriedade de alinhamento em endereços pares, múltiplos de
                    quatro, etc.
                </p>

                <p className="espaco-paragrafo">
                    A definição de uma estrutura (struct) ou união (union) não ocasiona a
                    alocação de posições de memória, o que somente vai acontecer quando a
                    estrutura for declarada como uma variável, parâmetro de uma função ou retorno
                    de função. A disposição dos campos de uma estrutura segue endereços contíguos
                    de memória, de acordo com o tamanho dos campos; no entanto, o compilador geralmente tem a liberdade de redistribuir os campos para otimizar espaço ou
                    incluir espaços não utilizados para forçar alinhamentos e com isso otimizar o
                    tempo de acesso, a menos que você peça para ele não fazer isso. Da mesma forma
                    que para vetores, o cálculo dos endereços efetivos dos campos de uma estrutura
                    é feito em código de máquina, usando modos de endereçamento indexados.
                </p>

                <p className="espaco-paragrafo">
                    Variáveis globais declaradas de tipos struct ou union e não inicializadas
                    explicitamente também são inicializadas com zero, por residirem na área de
                    memória do segmento .bss.
                </p>
                <div>
                <Quiz {...Question1}/>
                </div>
            </div>
            <Footer {...index} />
        </>
    );
};

export default DadosC;

