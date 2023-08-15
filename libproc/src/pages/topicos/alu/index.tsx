import React from 'react';
import alu_1 from './imgs/alu_1.png';
import alu_2 from './imgs/alu_2.png';
import alu_3 from './imgs/alu_3.png';
import alu_4 from './imgs/alu_4.png';
import alu_5 from './imgs/alu_5.png';
import alu_6 from './imgs/alu_6.png';
import alu_7 from './imgs/alu_7.png';
import alu_8 from './imgs/alu_8.png';
import alu_9 from './imgs/alu_9.png';
import alu_10 from './imgs/alu_10.png';
import '../../../assets/styles/global.css';
import MultipleChoiceQuestion from '../multipleChoice'
import Header from "../../../components/Header/index";
import Footer from '../footer';

interface Index{
  index: number;
}

const index:Index = {index:3};

interface Question {
  question: string;
  options: string[];
  answer:number;
  correctMessage: any;
  incorrectMessage: any;
}

const Question1: Question = { question: "Selecione a alternativa com uma instrução de ULA que inverta o sinal de um registrador, uma instrução de ULA que zere um registrador, uma instrução de ULA que inverta os bits de um registrador e uma instrução que inverta as metades de 16 bits de um registrador entre si (0x12345678 -> 0x56781234). ", options: ["SUB R1, #0, R0; AND R0, #0; MVN R0, R0 ;MOV R0, R0, ROL #16", "RSB R1, R0, #0; OR R0, #0; MOV R0, -R0 ;MOV R0, R0, ROR #16", "SUB R1, #0, R0; AND R0, #0; MVN R0, R0 ;MOV R0, R0, ROL #16", "RSB R1, R0, #0; AND R0, #0; MVN R0, R0 ;MOV R0, R0, ROR #16"], answer:3, correctMessage:<div><p>A resposta está correta!</p><p>Cheque a discussão <a href="https://www.wise-ware.com.br/pcs3732/d/10-sinal">Sinal</a> no fórum para mais instruções que invertam o sinal de um registrador.</p><p>Cheque a discussão <a href="https://www.wise-ware.com.br/pcs3732/d/7-zerando-um-registrador">Zerando um registrador</a> para mais operações de zerar.</p><p>Cheque a discussão <a href="https://www.wise-ware.com.br/pcs3732/d/31-operacao-logica-nao">Operação lógica NÃO</a> para outras operações de inversão de bits.</p><p>Não deixe também de se aprofundar na discussão <a href="https://www.wise-ware.com.br/pcs3732/d/19-manipulacao-de-bits">Manipulação de Bits</a>.</p></div>, incorrectMessage:<div><p>A resposta correta seria RSB R1, R0, #0; AND R0, #0; MVN R0, R0 ;MOV R0, R0, ROR #16</p><p>Cheque a discussão <a href="https://www.wise-ware.com.br/pcs3732/d/10-sinal">Sinal</a> no fórum para mais instruções que invertam o sinal de um registrador.</p><p>Cheque a discussão <a href="https://www.wise-ware.com.br/pcs3732/d/7-zerando-um-registrador">Zerando um registrador</a> para mais operações de zerar.</p><p>Cheque a discussão <a href="https://www.wise-ware.com.br/pcs3732/d/31-operacao-logica-nao">Operação lógica NÃO</a> para outras operações de inversão de bits.</p><p>Não deixe também de se aprofundar na discussão <a href="https://www.wise-ware.com.br/pcs3732/d/19-manipulacao-de-bits">Manipulação de Bits</a>.</p></div>};


const ALU = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <h3>Instruções ALU</h3>
                <p className="espaco-paragrafo">
                    As instruções ALU são as instruções que podem alterar o valor de um
                    registrador mediante uma operação lógica ou aritmética sobre outros dois
                    valores (operandos), um dos quais está em um registrador (eventualmente o
                    mesmo registrador de destino); o segundo operando da instrução pode ser um
                    registrador ou uma constante numérica positiva, introduzida diretamente no
                    corpo da instrução (valor imediato).
                    Assim, as instruções de ALU são tuplas: uma única instrução pode envolver
                    três registradores diferentes (na verdade, graças ao barrel shifter, são quatro
                    registradores, como veremos a seguir).
                </p>
                <img className="center-image" src={alu_1} alt="Alu 1" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">
                    O código de condição tem o mesmo formato das demais instruções do
                    ARM: caso a condição expressa na instrução não seja válida, a instrução é
                    ignorada. No caso das instruções ALU, o bit “S” ou “set flags” (bit 20) especifica se
                    essa instrução deve ou não deve alterar os valores dos flags do processador de
                    acordo com o resultado da operação; o bit “S” é sempre usado em conjunto com
                    os códigos de condição: com o bit “S” igual a “zero”, os flags não são alterados, por exemplo para não interferir com o estado de um teste anterior, que
                    determinou a execução condicional desta instrução em particular e que deve
                    continuar válido para a(s) próxima(s) instrução(ões). O mnemônico da instrução
                    ganha o sufixo “s” (por exemplo, adds, orrs, etc.) quando o campo de set-flags
                    está ativo.
                    Os campos referentes aos registradores de destino (Rd) e do primeiro
                    operando (Rn) contém quatro bits, representando os índices correspondentes aos
                    registradores R0 (valor “0000”) até R15 (valor “1111”). Os bits no campo “opcode”
                    selecionam a operação a ser realizada pela ALU, conforme descrito pela tabela a
                    seguir:
                </p>
                <img className="center-image" src={alu_2} alt="Alu 2" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">
                    <ul className="alinha-item">
                        <li>
                            <strong>Instruções lógicas:</strong> Instruções lógicas: “e” (and), “ou” (orr), “ou exclusivo” (eor) e “e-não”
                            (“bit clear” ou bic). Essa última instrução é um mecanismo eficiente para
                            zerar bits no registrador de destino;
                        </li>
                        <li>
                            <strong>Instruções aritméticas:</strong>  soma (add), soma com vai-um (adc), subtração
                            (sub e rsb) e subtração com empresta-um (sbc ou rsc). As instruções
                            sub e sbc subtraem o segundo operando do primeiro, enquanto que as
                            instruções rsb (“reverse subtract”) e rsc (“reverse subtract with carry”)
                            subtraem o primeiro operando do segundo. Considerando que somente o
                            segundo operando pode ser uma constante imediata, as instruções “reversas”
                            tornam-se particularmente úteis;
                        </li>
                        <li>
                            <strong>Instruções de comparação:</strong> cmp e cmn. A instrução cmp é equivalente à
                            instrução subs, sem, contudo, salvar o resultado da subtração no
                            registrador de destino. O resultado da subtração de dois valores pode ser
                            nulo (os valores são iguais), positivo (o primeiro valor é maior do que o
                            segundo) ou negativo (o primeiro valor é menor do que o segundo). De
                            forma análoga, a instrução cmn é equivalente à instrução adds: nesse
                            caso, o segundo operando é considerado com o sinal invertido, o que é
                            muito conveniente para a comparação com valores constantes negativos,
                            uma vez que as constantes introduzidas nas instruções (segundo
                            operando) são sempre positivas;
                        </li>
                        <li>
                            <strong>Instruções de teste lógico:</strong> tst e teq. À semelhança das instruções de
                            comparação, as instruções de teste lógico não alteram o registrador de
                            destino, apenas servindo para alterar o valor dos flags. A instrução tst é
                            equivalente à instrução ands, servindo para testar se determinados bits
                            do operando são iguais a “um”. A instrução teq é equivalente à instrução
                            eors, permitindo verificar se dois valores são iguais, somente afetando o
                            flag Z, sem interferir com os flags C e V;
                        </li>
                        <li>
                            <strong>Instruções de movimentação de dados:</strong> mov e mvn. Nessas instruções, a ALU
                            somente copia o valor do operando ao registrador de destino (mov) ou
                            copia o inverso bit a bit (operação lógica “não”) do operando ao registrador
                            de destino. Essa última operação é particularmente útil para carregar
                            valores constantes negativos em um registrador, uma vez que as constantes
                            introduzidas nas instruções (segundo operando) são sempre positivas.
                            Observe que as instruções de movimentação de dados também podem
                            modificar os valores dos flags, bastando que o bit “S” da instrução seja
                            igual a “um”.
                        </li>

                    </ul>
                    <p className="espaco-paragrafo"></p>

                    <p className="espaco-paragrafo"> As instruções de comparação e testes lógicos somente fazem sentido
                        quando o bit “S” (set flags) é igual a “um”: o comportamento do processador ao
                        executar uma instrução desse tipo com o bit “S” igual a “zero” não é especificado
                        pela arquitetura e tal instrução deve ser considerada inválida.
                        Quando o registrador de destino é o contador de programa (r15), o
                        resultado da operação é um salto. Neste caso especial, o significado do bit “S” é
                        diferente: caso o valor de “S” seja “um”, o valor do registrador cpsr é
                        inteiramente substituído pelo valor do registrador spsr do modo atual; isso é
                        necessário, por exemplo, para retornar de serviços de interrupção.
                    </p>
                    <p className="espaco-paragrafo">
                        Segundo operando
                        O segundo operando da instrução sempre pode ser alterado pelo barrel
                        shifter. O significado dos bits referentes ao segundo operando depende do valor
                        do bit “I” (bit 25): caso o bit “I” seja “um”, o campo contém um valor imediato;
                        caso seja “zero”, o campo de segundo operando especifica um terceiro
                        registrador.
                        Na situação na qual o campo de segundo operando corresponde a um
                        registrador (bit “I” igual a “zero”), o campo de quatro bits Rm conterá o índice
                        desse registrador, no mesmo formato que os campos Rd e Rn. O valor contido no
                        registrador Rm pode ser ainda manipulado pelo barrel shifter antes de ser
                        utilizado como operando pela ALU.
                    </p>
                    <img className="center-image" src={alu_3} alt="Alu 3" />
                    <p className="espaco-paragrafo"></p>
                    <p className="espaco-paragrafo">
                        O comportamento do barrel shifter com relação ao valor de Rm é definido
                        pelos campos “shifter” (bits 7-11) e “tipo” (bits 5 e 6) da instrução.
                    </p>
                    <img className="center-image" src={alu_4} alt="Alu 4" />
                    <p className="espaco-paragrafo">
                        Veja na figura a seguir as operações que podem ser realizadas pelo barrel
                        shifter, considerando uma movimentação (deslocamento ou rotação) de apenas
                        um bit. O flag carry somente é afetado se o bit “S” estiver ativo; além disso,
                        dependendo da instrução realizada, a ALU poderá modificar em seguida o estado
                        desse flag.
                    </p>
                    <img className="center-image" src={alu_5} alt="Alu 5" />
                    <p className="espaco-paragrafo"></p>
                    <p className="espaco-paragrafo">
                        No caso em que o bit “R” é “zero” trata-se de uma movimentação de
                        tamanho fixo, especificado diretamente pelo campo “shifter”, de cinco bits,
                        tomado como um valor imediato (0 até 31).
                    </p>
                    <p className="espaco-paragrafo">
                        Exemplo
                        A palavra a seguir (0xE18102A2) corresponde à instrução
                        orr R0, R1, R2, lsr #5
                    </p>
                    <img className="center-image" src={alu_6} alt="Alu 6" />
                    <p className="espaco-paragrafo"></p>
                    <p className="espaco-paragrafo">
                        Por outro lado, na situação na qual o bit “R” é “um”, o tamanho do
                        deslocamento ou rotação é determinado pelo valor de um quarto registrador,
                        especificado pelo campo Rs (bits 8-11), no mesmo formato que Rd, Rn e Rm:
                    </p>
                    <img className="center-image" src={alu_7} alt="Alu 7" />
                    <p className="espaco-paragrafo"></p>
                    <p className="espaco-paragrafo">
                        Exemplo

                        A palavra a seguir (0xE1810332) corresponde à instrução
                        orr R0, R1, R2, lsr R3
                    </p>
                    <img className="center-image" src={alu_8} alt="Alu 8" />
                    <p className="espaco-paragrafo"></p>
                    <p className="espaco-paragrafo">
                        Finalmente, o último caso é aquele no qual o bit “I” é igual a “1” e o
                        campo de segundo operando contém um valor imediato positivo. Também neste
                        caso, o barrel shifter pode ser utilizado para aumentar o número de constantes
                        que podem ser representadas, através do campo “rotação” (bits 8-11):
                    </p>
                    <img className="center-image" src={alu_9} alt="Alu 9" />

                    O valor imediato é representado nos bits 0-7 da instrução, sem sinal. O
                    campo “rotação”, de quatro bits, estabelece a quantidade de bits para uma
                    rotação à direita (operação “ror”) para reposicionar esse valor imediato em uma
                    palavra de 32 bits, composta pelo barrel shifter. Como há somente quatro bits
                    disponíveis para o campo “rotação”, esse valor é multiplicado por dois,
                    permitindo rotações de zero (“rotação” vale “0000”) até 30 (“rotação” vale
                    “1111”) bits.
                    <p className="espaco-paragrafo">
                        Exemplo
                        A palavra a seguir (0xE3810102) corresponde à instrução
                        orr R0, R1, #0x80000000
                    </p>
                    <img className="center-image" src={alu_10} alt="Alu 10" />
                </p>
                <div>
                    <MultipleChoiceQuestion {...Question1} />
                </div>
            </div>
            <Footer {...index}/>
        </>
    );
};

export default ALU;
