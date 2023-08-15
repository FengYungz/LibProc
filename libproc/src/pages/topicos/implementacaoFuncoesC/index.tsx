import React from 'react';
import '../../../assets/styles/global.css';
import implementacao_funcoes_c_1 from './imgs/implementacao-funcoes-c_1.png';
import implementacao_funcoes_c_2 from './imgs/implementacao-funcoes-c_2.png';
import implementacao_funcoes_c_3 from './imgs/implementacao-funcoes-c_3.png';
import Header from "../../../components/Header/index";
import MultipleChoiceQuestion from '../multipleChoice';
import Footer from '../footer';

interface Index{
  index: number;
}

const index:Index = {index:22};

interface Question {
  question: string;
  options: string[];
  answer:number;
  correctMessage: any;
  incorrectMessage: any;
}

const Question1: Question = { question: "Escolha a alternativa correta quanto às funções dos registradores na execução de uma função em C.", options: ["O \"stack pointer\" (SP) e o \"frame pointer\" (FP) podem ser usados indistintamente para acessar variáveis locais em uma função.", "Os parâmetros de uma função são passados nos registradores em sequência, começando do R0 e crescendo, sendo garantido que até o final da execução, aqueles registradores onde se passaram os parâmetros não irão ter seus valores alterados.", "O \"frame pointer\" \'caminha\' pela pilha ao longo da execução da função, a depender da variável que é preciso acessar no momento.", "O \"stack pointer\" indica o endereço do topo da pilha a cada momento da execução."], answer:3, correctMessage:<div><p>A resposta está correta!</p><p>A função do registrador SP é justamente apontar para o endereço do topo da pilha.</p><p>SP e FP possuem funções distintas, ainda que relacionadas à identificação de endereços na pilha.</p><p>Não há nenhuma garantia que o valores dos parâmetros serão preservados nos registradores, sendo, inclusive, improvável.</p><p>O frame pointer aponta para a base da pilha durante toda a execução da função.</p></div>, incorrectMessage:<div><p>A resposta correta seria a última alternativa.</p><p>A função do registrador SP é justamente apontar para o endereço do topo da pilha.</p><p>SP e FP possuem funções distintas, ainda que relacionadas à identificação de endereços na pilha.</p><p>Não há nenhuma garantia que o valores dos parâmetros serão preservados nos registradores, sendo, inclusive, improvável.</p><p>O frame pointer aponta para a base da pilha durante toda a execução da função.</p></div>};

const ImplementacaoFuncoesC = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <h3>Implementação de funções em C</h3>
                <p className="espaco-paragrafo">
                    Uma função compilada em C ganha um endereço no código objeto (que
                    pode ser referenciado em um ponteiro de função com uma notação especial) e
                    um símbolo no segmento .text. Esse símbolo normalmente é exportado (como
                    “.global” em assembler), a menos que a função seja marcada como static:
                    neste caso, o símbolo somente é visível no arquivo onde a função foi definida.
                    Outras funções podem usar esse símbolo para chamá-la como uma sub-rotina
                    (instrução bl, no caso do ARM).
                </p>
                <p className="espaco-paragrafo">
                    O código de uma função C geralmente inclui um prólogo criado pelo
                    compilador para gerenciar a pilha, alocar espaço para as variáveis locais e salvar
                    o estado de registradores que sejam alterados dentro da função. Eventuais
                    alterações na pilha são desfeitas por um epílogo introduzido no final da função,
                    que também é responsável por realizar o retorno à função chamadora.
                </p>

                <img className="center-image" src={implementacao_funcoes_c_1} alt="implementacaoFuncoes 1" />
                <p className="espaco-paragrafo"></p>

                <p className="espaco-paragrafo">
                    Todas as funções em C têm a obrigação de retornar a pilha no mesmo
                    estado que receberam, bem como manter certos registradores com seus valores
                    inalterados. Funções especificamente declaradas como assíncronas (por exemplo,
                    implementando serviços de interrupção) devem manter os valores originais de
                    todos os registradores.
                </p>

                <p className="espaco-paragrafo">
                    As funções em C organizam o seu espaço na pilha através de uma
                    estrutura de dados chamada frame ou “registro de ativação”:
                </p>

                <img className="center-image" src={implementacao_funcoes_c_2} alt="implementacaoFuncoes 2" />

                <p className="espaco-paragrafo">
                    Como regra geral, os parâmetros da função a chamar são colocados na
                    pilha pela função chamadora, enquanto que a alocação de variáveis locais e de
                    cópias dos parâmetros são realizadas pela função chamada. Após o retorno, a
                    função chamadora é responsável pela eventual remoção dos parâmetros
                    colocados na pilha, caso necessário.
                </p>

                <p className="espaco-paragrafo"> Um registrador especial, geralmente chamado de frame pointer (fp) é
                    utilizado para armazenar um endereço do frame, que serve como base para
                    acessar tanto os parâmetros quanto as variáveis locais através de endereçamento
                    indexado (como se fossem campos de um struct). O endereço armazenado no
                    frame pointer também serve para atualizar o ponteiro de pilha para o valor
                    anterior, de forma a retornar a pilha inalterada à função chamadora.

                </p>

                <p className="espaco-paragrafo">
                    Vários tipos de otimizações podem ser utilizados, conforme convenções e
                    configurações feitas pelo programador:

                </p>


                <ul className="alinha-item">
                    <li>
                        Passagem de parâmetros em registradores específicos da arquitetura,
                        sem usar a pilha. Caso o número de parâmetros ou a quantidade de bits
                        necessários ultrapasse a capacidade dos registradores, os parâmetros
                        extra são colocados na pilha, segundo o modelo padrão;
                    </li>
                    <li>
                        Caso a função chamada não altere os valores de algum parâmetro ou
                        esteja autorizada a fazer alterações nos valores dos parâmetros
                        introduzidos no frame pela função chamadora, a cópia desses parâmetros
                        junto com as variáveis locais da função pode ser evitada. Esse tipo de
                        otimização pode ser inibido pela especificação do parâmetro com a
                        palavra reservada const;
                    </li>
                    <li>
                        Variáveis locais também podem ser alocadas em registradores (ou
                        reutilizando os registradores eventualmente utilizados para a passagem
                        de parâmetros), evitando o acesso à pilha. Essa otimização pode ser
                        sugerida ao compilador usando a palavra reservada register. Caso a
                        variável local use algum registrador que não possa ser alterado, seu valor
                        original deve ser salvo e recuperado após a execução (provavelmente
                        usando a pilha).
                    </li>
                </ul>
                <p className="espaco-paragrafo"></p>

                <p className="espaco-paragrafo">
                    O valor de retorno de uma função é passado de volta à função chamadora
                    em um registrador específico ou, no caso de valores de retorno maiores, em um
                    grupo de registradores. Um caso especial, no qual o valor é grande demais para
                    ser retornado dessa forma11, usa um truque: a função chamadora reserva espaço
                    suficiente em seu próprio frame e passa um endereço à função chamada em um
                    parâmetro “oculto”. A função chamada fará uma cópia do valor a ser retornado
                    no endereço especificado pelo parâmetro oculto.
                </p>

                <p className="espaco-paragrafo"> No caso particular do ARM32, o uso dos registradores nas funções é
                    convencionado conforme a tabela a seguir:
                </p>
                <img className="center-image" src={implementacao_funcoes_c_3} alt="implementacaoFuncoes 3" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">
                    O valor anterior do frame pointer sempre é salvo na pilha pelo prólogo da
                    função chamada; caso essa função chame outras funções, o valor do link register
                    também é obrigatoriamente salvo.

                </p>
                Os parâmetros são passados em ordem, nos registradores r0-r3. Por
                exemplo:
                <p className="espaco-paragrafo">

                </p>
                <ul className="alinha-item">
                    <li>
                        Um único parâmetro do tipo “int”, “char” ou ponteiro é passado no
                        registrador r0;
                    </li>
                    <li>
                        Dois parâmetros “int” ou “char” são passados em r0 (primeiro parâmetro) e r1 (segundo parâmetro);
                    </li>
                    <li>
                        Um parâmetro “long” é passado em r0 (32 bits menos significativos) e r1
                        (32 bits mais significativos);
                    </li>
                    <li>
                        Dois parâmetros “long” usam r0-r1 para o primeiro parâmetro e r2-r3
                        para o segundo parâmetro;
                    </li>
                    <li>
                        Vetores usados em parâmetros são normalmente substituídos por
                        ponteiros.
                    </li>
                </ul>
                <p className="espaco-paragrafo"></p>

                <p className="espaco-paragrafo">
                    Caso existam mais parâmetros, os parâmetros excedentes serão
                    introduzidos no frame na pilha, conforme descrito anteriormente. Os mesmos
                    registradores r0-r3 são usados para armazenar o valor de retorno da função, até
                    o máximo de 128 bits (usando todos os quatro registradores). Caso esse conjunto
                    de registradores não seja suficiente (ou em situações especiais, como por
                    exemplo o retorno de uma estrutura), o mecanismo descrito anteriormente é
                    utilizado.
                </p>
                <div>
                <MultipleChoiceQuestion {...Question1} />
                </div>
            </div>
            <Footer {...index} />
        </>
    );
};

export default ImplementacaoFuncoesC;

