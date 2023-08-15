import React from 'react';
import '../../../assets/styles/global.css';
import Header from "../../../components/Header/index";
import Footer from '../footer';

interface Index{
  index: number;
}

const index:Index = {index:18};

const ImplementacaoLinguagemC = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <h3>Implementação da Linguagem C</h3>
                <p className="espaco-paragrafo">
                    A linguagem “C” foi criada da década de 70 por Dennis Ritchie, a partir do
                    protótipo (linguagem “B”) desenvolvido por Ken Thompson para o novo sistema
                    operacional Unix. Mais tarde, a própria linguagem passou a ser utilizada para
                    escrever o código-fonte do sistema operacional e torná-lo mais facilmente
                    portável para outras arquiteturas. A linguagem C começou a ser padronizada em
                    1985 (ANSI C); hoje existem dois padrões principais: C99 e C11.
                    Algumas características dessa linguagem são especialmente importantes:
                    <ul className="alinha-item">
                        <li>
                            Possui uma estrutura simples e muito próxima ao hardware (de fato, nas
                            primeiras implementações somente os tipos de dados e operações
                            efetivamente suportados pela máquina alvo eram implementados na
                            linguagem), tornando seus compiladores mais eficientes e possibilitando a
                            implementação de funcionalidades de baixo nível semântico com menor
                            necessidade de se recorrer à linguagem de máquina;
                        </li>
                        <li>
                            “C” é uma linguagem de modelo funcional, na tradição do ALGOL. De fato,
                            a entidade central na linguagem C é a “função”: com escopo próprio, que
                            pode receber um conjunto variável de parâmetros e pode ser acionada de
                            forma recursiva. Esse tipo de funcionalidade é geralmente implementado
                            através de uma estrutura de dados em pilha, que possui um papel
                            fundamental no funcionamento de um programa codificado em C;
                        </li>
                        <li>
                            As entidades declaradas em C são mapeadas diretamente na memória.
                            Seus endereços de memória e os valores contidos na memória podem ser
                            usados alternativamente com facilidade, através de operações de
                            referência e derreferência (“ponteiros”). Todos os operandos da
                            linguagem são igualmente aplicáveis a ponteiros; um ponteiro, além do
                            endereço em memória, carrega também informação sobre o tipo de dados
                            apontado;
                        </li>
                        <li>
                            Em sua grande maioria, dados de tipos diferentes são intercambiáveis em
                            C e têm sua conversão realizada de forma implícita pelo compilador.
                            Operandos de uma expressão são promovidos para tipos mais completos
                            (por exemplo, um int para um float, ou um unsigned para um
                            signed) e valores atribuídos são convertidos para o tipo correspondente
                            à variável ou ponteiro de destino. Além do tratamento padrão, a
                            conversão de dados pode ser diretamente controlada pelo programador,
                            através de operadores de casting;
                        </li>
                        <li>
                            Permite a representação eficiente de estruturas binárias complexas
                            através do uso de tipos especiais (struct e union), que podem conter
                            todos os tipos elementares da linguagem, vetores, campos de bit e outros
                            tipos especiais aninhados. Campos de bit em uma estrutura permitem
                            definir uma quantidade precisa de bits para a informação, e o compilador
                            automaticamente gera código para sua leitura e atualização (máscaras,
                            deslocamentos, etc.);
                        </li>
                        <li>
                            O valor nulo (todos os bits iguais a “zero”) tem significados especiais em
                            C:
                            <li>
                                Em expressões condicionais (operador ?, if(), while(), etc.) o valor
                                zero representa o valor lógico “falso” ou “não”, enquanto que
                                qualquer outro valor é considerado “verdadeiro”;
                            </li>
                            <li>
                                Utilizado como um índice, entre colchetes ([0]), o valor zero aponta
                                sempre o primeiro elemento de um vetor (deslocamento zero a partir
                                da base);
                            </li>
                            <li>
                                O caractere nulo (código ASCII NUL) é utilizado como terminador de
                                strings pela biblioteca C padrão;
                            </li>
                            <li>
                                Um ponteiro nulo (NULL) é sempre inválido: derreferenciar um
                                ponteiro nulo causa uma exceção ou abort. Assim sendo, é comum que
                                o ponteiro nulo seja utilizado como marcador em situações especiais
                                (“vazio”, “inválido”, “não utilizado”, “fim de lista”, “erro”, etc.);
                            </li>
                            <li>
                                Só há dois tamanhos nulos: o tipo void (sizeof(void)) e o vetor
                                sem dimensão (int x[0]);
                            </li>
                            <li>
                                Todas as variáveis globais não inicializadas no código-fonte têm seus
                                bits zerados antes da chamada à função main().
                            </li>
                        </li>
                    </ul>
                </p>

                <p className="espaco-paragrafo">
                    Como a linguagem C possui uma grande flexibilidade, aderência a padrões
                    de portabilidade e uma longa história de utilização, sendo muito utilizada na
                    construção de firmware, sistemas operacionais e compiladores para outras
                    linguagens, ela se tornou um padrão “de fato”, tendo impacto inclusive no
                    projeto de novos processadores. Diversas características inerentes ao
                    processador ARM, por exemplo, têm influência direta de funcionalidades
                    necessárias para o suporte à linguagem C padronizada.
                </p>
            </div>
            <Footer {...index} />
        </>
    );
};

export default ImplementacaoLinguagemC;

