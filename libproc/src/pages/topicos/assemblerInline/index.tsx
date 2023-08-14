import React from 'react';
import '../../../assets/styles/global.css';
import assembler_inline_1 from './imgs/assembler-inline_1.png';
import assembler_inline_2 from './imgs/assembler-inline_2.png';
import assembler_inline_3 from './imgs/assembler-inline_3.png';
import assembler_inline_4 from './imgs/assembler-inline_4.png';
import Header from "../../../components/Header/index";

const AssemblerInline = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <h3>Assembler inline</h3>
                <p className="espaco-paragrafo">
                    O compilador gcc permite integrar código em assembler diretamente no
                    código-fonte em C, sem a necessidade de montar arquivos .s e vinculá-los ao
                    executável separadamente. Esse recurso é implementado através da função
                    especial asm() (uma sintaxe específica do gcc, não sendo portável12). Além
                    disso, a função asm() permite que o código escrito em assembler acesse símbolos
                    definidos no código-fonte em C.
                </p>

                <p className="espaco-paragrafo">
                    Quando a função asm() possui um único parâmetro (um string), este é
                    copiado integralmente na saída do compilador para ser montado pelo assembler13,
                    juntamente com o código produzido pelo compilador.
                </p>

                <img className="center-image" src={assembler_inline_1} alt="assemblerInline 1" />

                <p className="espaco-paragrafo">
                    Neste exemplo, a função delay() é implementada inteiramente em
                    assembler. Observe que é preciso incluir manualmente quebras de linha (‘\n’)
                    para que o assembler consiga diferenciar duas instruções sucessivas. É opcional,
                    mas comum, também incluir tabulações (‘\t’) para melhorar a legibilidade do
                    código assembler gerado (opção -S ).
                </p>

                <p className="espaco-paragrafo">
                    Quando o código no interior de asm() precisa enviar dados de volta ao
                    compilador C é possível utilizar parâmetros de saída, que são especificados em
                    asm() após dois pontos (“:”). No caso de processadores RISC, esses valores
                    precisam necessariamente estar em registradores (ou seja, o “tipo” é sempre
                    “=r”):
                </p>

                <img className="center-image" src={assembler_inline_2} alt="assemblerInline 2" />

                <p className="espaco-paragrafo">
                    O exemplo anterior solicita ao compilador que informe um registrador
                    (“=r”) que o assembler pode alterar: vai corresponder à variável local “res”. O
                    assembler consulta o nome do registrador através da macro “%0” (que substitui o
                    “primeiro parâmetro”, “%1” substitui o “segundo parâmetro”, etc.). Observe o
                    uso de dois pontos (“:”) na função asm().
                </p>

                <p className="espaco-paragrafo">
                    De forma análoga, para o assembler ler valores provenientes da linguagem
                    C são usados parâmetros de entrada, que são especificados após um segundo dois
                    pontos (“:”) em asm(). No caso de processadores RISC, esses valores precisam
                    necessariamente estar em registradores (ou seja, o “tipo” é sempre “r”).
                </p>


                <img className="center-image" src={assembler_inline_3} alt="assemblerInline 3" />

                <p className="espaco-paragrafo">
                    Veja neste exemplo que asm() solicita ao compilador que informe o
                    registrador (“r”) onde o assembler pode encontrar o valor de “modo”. O assembler
                    consulta o nome desse registrador através da macro “%0” (que substitui o
                    “primeiro parâmetro”, “%1” substitui o “segundo parâmetro”, etc.). Observe o
                    uso dos dois pontos (“:”) na função asm(): neste caso não há parâmetros de
                    saída, correspondendo ao espaço vazio após o primeiro “:”.
                </p>

                <p className="espaco-paragrafo">
                    Finalmente, caso o código em assembler inserido faça alguma modificação
                    no contexto do processador, além dos parâmetros de entrada ou saída, é
                    necessário informar ao compilador, após um terceiro dois pontos (“:”) em asm()
                    (chamado de “clobber”):
                </p>

                <img className="center-image" src={assembler_inline_4} alt="assemblerInline 4" />

                <p className="espaco-paragrafo">
                    O código neste exemplo introduz um pequeno atraso através de um laço
                    ocioso. Como o registrador r0 é alterado internamente, ele é introduzido na lista
                    “clobber”, apesar de não existirem parâmetros de entrada ou de saída. Um caso
                    particular importante a ser lembrado é introduzir a palavra “memory” na lista,
                    sempre que o código em assembler fizer alguma alteração na memória (usando as
                    instruções str, strb, strh, stm ou stc): isso é importante para o compilador
                    considerar otimizações na parte da função que está escrita em C.
                </p>
            </div>
        </>
    );
};

export default AssemblerInline;

