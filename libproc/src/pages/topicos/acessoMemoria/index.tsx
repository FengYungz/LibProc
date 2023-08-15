import React from 'react';
import acesso_memoria_1 from './imgs/acesso-memoria_1.png';
import acesso_memoria_2 from './imgs/acesso-memoria_2.png';
import acesso_memoria_3 from './imgs/acesso-memoria_3.png';
import acesso_memoria_4 from './imgs/acesso-memoria_4.png';
import acesso_memoria_5 from './imgs/acesso-memoria_5.png';
import acesso_memoria_6 from './imgs/acesso-memoria_6.png';
import acesso_memoria_7 from './imgs/acesso-memoria_7.png';
import acesso_memoria_8 from './imgs/acesso-memoria_8.png';
import acesso_memoria_9 from './imgs/acesso-memoria_9.png';
import acesso_memoria_10 from './imgs/acesso-memoria_10.png';
import acesso_memoria_11 from './imgs/acesso-memoria_11.png';
import '../../../assets/styles/global.css';
import Quiz from "../quiz";
import Header from "../../../components/Header/index";
import Footer from '../footer';

interface Index{
  index: number;
}

const index:Index = {index:4};

interface Question{
  quest: string;
  ans: any;
}

const Question1: Question = {quest: "Qual é a maior distância na memória que uma instrução ld ou st consegue acessar a partir de um registrador base e uma constante?", ans: <div><p>O formato das instruções ld e st permite 12 bits de imediato, portanto o imediato pode representar até 12^12 - 1 = 4095 bytes. Como no ARM as posições de memória devem ser múltiplas de 4 (4 bytes por palavra) e o maior múltiplo de 4 menor do que 4095 é 4092, o alcance dessas instruções é de 4092/4=1023 palavras!</p><p>Para uma visão mais completa do tema consulte a discussão <a href="https://www.wise-ware.com.br/pcs3732/d/42-alcance-das-instrucoes-ldrstr">Alcance das instruções ldr/str</a> no fórum da disciplina :)</p></div>};


const AcessoMemoria = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <h3>Instruções de acesso à memória</h3>
                <p className="espaco-paragrafo">
                    Como em qualquer processador RISC, as únicas instruções do conjunto de
                    instruções ARM que podem fazer acesso à memória são as instruções load e
                    store. As instruções load e store precisam que o endereço da memória
                    (ponteiro) a ser acessado esteja armazenado previamente em um registrador,
                    denominado registrador base: em outras palavras, somente é possível o
                    endereçamento indireto (baseado em um ponteiro). Um valor de índice pode ser
                    somado ou subtraído ao valor do registrador base para calcular o valor efetivo do
                    endereço de acesso à memória; tal índice pode ser incluído na instrução como
                    uma constante imediata (offset) ou ser proveniente de um registrador. Neste
                    último caso, o valor do registrador de índice pode ainda ser manipulado pelo
                    barrel shifter: útil para alinhar endereços na memória.
                    O formato das instruções load e store com offset imediato é apresentado
                    na figura a seguir.
                </p>
                <img className="center-image" src={acesso_memoria_1} alt="AcessoMemoria 1" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">
                    O código de condição tem o mesmo formato das demais instruções do
                    ARM: caso a condição expressa na instrução não seja válida, a instrução é
                    ignorada. O campo Rd especifica, no mesmo formato que as instruções ALU, o
                    registrador de destino (no caso de uma instrução load) ou de origem (no caso de
                    uma instrução store) da informação a ser lida ou escrita na memória. Rn
                    identifica o registrador base (ponteiro), a partir do qual será calculado o
                    endereço da memória a ser acessado. O bit “L” define a instrução como load (bit
                    “L” igual a “um”) ou store (bit “L” igual a “zero”).
                    Os bits “P”, “U”, “B” e “W” da instrução são usados para especificar o
                    modo de endereçamento, conforme a tabela:
                </p>
                <img className="center-image" src={acesso_memoria_2} alt="AcessoMemoria 2" />
                <p className="espaco-paragrafo"></p>
                <p>O modo pré-indexado (bit “P” da instrução igual a “um”) calcula o
                    endereço efetivo a partir do endereço base antes da operação e utiliza o
                    endereço calculado para o acesso à memória. O valor contido no registrador base
                    permanece inalterado. Alternativamente, o modo pós-indexado (bit “P” da
                    instrução igual a “zero”) realiza a operação de leitura ou escrita na memória
                    usando o endereço base e, depois disso, modifica o valor do registrador base
                    para o valor do endereço efetivo calculado. Caso o programador deseje que o
                    valor do registrador base seja atualizado também no modo pré-indexado, pode
                    usar o bit “W” (write back): após um acesso pré-indexado com o bit “W” igual a
                    “um”, o registrador base é atualizado para o valor do endereço efetivo utilizado
                    na operação de memória.</p>
                    <p>A direção da indexação é definida pelo valor do bit “U”: caso seja “1” (up),
                    o valor de índice (em ambos os casos, offset imediato ou registrador) é somado ao
                    registrador base; caso seja “zero”, o endereço efetivo é calculado subtraindo o
                    índice do registrador base. Observe-se que o valor do offset imediato (bits 0 até
                    11) é sempre positivo.</p>
                    <p>Finalmente, o bit “B” da instrução permite especificar o tamanho da
                    transferência: um word (quatro bytes, bit “B” igual a “zero”) ou um byte (bit “B”
                    igual a “um”). Observe que, no caso de uma transferência de 32 bits, o endereço
                    efetivo precisa ser múltiplo de quatro para que a execução da instrução obtenha
                    o resultado esperado! A ordenação (endianess) dos dados de 32 bits lidos da
                    memória pode ser definida pelo programador, sendo que a ordenação padrão é
                    little-endian.</p>
                    <p>As transferências de um byte não têm restrição quanto ao valor do
                    endereço efetivo. As instruções de load e store no nível de bytes têm os
                    mnemônicos ldb e stb, respectivamente. Atenção ao fato de que, na instrução
                    ldb, o sinal do byte lido não é estendido: os bits 8-31 do registrador de destino
                    são zerados; no caso da instrução stb, somente os bits 0-7 do registrador de
                    origem são transferidos à memória.</p>
                    <p className="espaco-paragrafo">Convencionam-se os formatos das instruções load e store com offset
                    imediato para os programas assembler da seguinte forma:</p>
                <img className="center-image" src={acesso_memoria_3} alt="AcessoMemoria 3" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">O formato das instruções load e store com registrador de índice é
                    semelhante:</p>
                <img className="center-image" src={acesso_memoria_4} alt="AcessoMemoria 4" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">A especificação do modo de endereçamento é a mesma do formato anterior
                    (bits “P”, “U”, “B” e “W”). O índice a ser somado ao (bit “U” igual a “um”) ou
                    subtraído do (bit “U” igual a “zero”) registrador base para o cálculo do endereço
                    efetivo é proveniente do registrador Rm (registrador de índice). Esse valor
                    também pode ser manipulado pelo barrel shifter, de forma equivalente ao que
                    acontece com as instruções ALU. A operação do barrel shifter é definida pelos
                    campos “tipo” e “shift”: o campo “shift” permite especificar um número
                    constante de bits (valor imediato de zero a 31) para deslocamento lógico à
                    esquerda (“tipo” igual a “00”), lógico à direita (“tipo” igual a “01”), aritmético à
                    direita (“tipo” igual a “10”) ou rotação à direita (“tipo” igual a “11”)
                    Convencionam-se os formatos das instruções load e store com
                    registrador de índice para os programas assembler da seguinte forma:</p>
                <img className="center-image" src={acesso_memoria_5} alt="AcessoMemoria 5" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">Outro grupo de instruções load/store permite a manipulação de half
                    words na memória, com ou sem sinal, bem como bytes com sinal
                    (complementando a limitação das instruções de load/store word). Quando é
                    empregado um registrador de índice, o formato dessas instruções é o seguinte:</p>
                <img className="center-image" src={acesso_memoria_6} alt="AcessoMemoria 6" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">Os campos da instrução são equivalentes aos vistos anteriormente. Um
                    detalhe importante é que não é possível alterar o valor do registrador de índice
                    por intermédio do barrel shifter, como podia acontecer na instrução de
                    load/store word. O campo “size” especifica o tamanho da transferência:</p>
                <img className="center-image" src={acesso_memoria_7} alt="AcessoMemoria 7" />
                <p className="espaco-paragrafo"></p>
                <p>No caso das instruções half word, o endereço efetivo (calculado usando o
                    registrador base e o registrador índice) deve ser um número par. O bit 6
                    determina se o sinal do valor lido da memória deve ser estendido no registrador
                    de destino (instruções ldrsh e ldrsb); o estado do bit 6 é indiferente para
                    instruções store.</p>
                    <p className="espaco-paragrafo">O formato das instruções half word usando um offset imediato é
                    diferenciado pelo estado do bit 22, conforme ilustrado na figura a seguir:</p>
                <img className="center-image" src={acesso_memoria_8} alt="AcessoMemoria 8" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">O comportamento dos diversos campos é idêntico aos das instruções
                    vistas anteriormente. Observe-se que o offset imediato possui 8 bits no total, sem
                    sinal, divididos em duas metades: bits mais significativos nos bits 8-11 da
                    instrução e bits menos significativos nos bits 0-3 da instrução.
                    O último tipo de instruções de acesso à memória são as instruções de
                    load/store multiple. Essas instruções permitem a escrita ou leitura de diversas
                    posições de memória em sequência, podendo ser utilizadas para a transferência
                    dos valores de diversos registradores.</p>
                <img className="center-image" src={acesso_memoria_9} alt="AcessoMemoria 9" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">
                    De forma semelhante às instruções anteriores, os bits “P”, “U”, “S” e “W”
                    da instrução são usados para especificar o modo de endereçamento, conforme a
                    tabela:
                </p>
                <img className="center-image" src={acesso_memoria_10} alt="AcessoMemoria 10" />
                <p className="espaco-paragrafo"></p>
                <p>
                    Cada um dos bits 0-15 é associado a um dos registradores R0 a R15 (bit 0 a
                    R0, bit 1 a R1, etc.). Quando o valor de um desses bits é “um”, o conteúdo do
                    registrador correspondente será transferido da ou para a memória. O bit especial
                    “S” é utilizado para forçar o salvamento ou restauração do registrador spsr
                    sempre que o contador de programa (R15) estiver envolvido na transferência, o
                    que é importante para, por exemplo, retornar de um serviço de interrupção –
                    situação na qual o modo de execução anterior do processador deve ser
                    restaurado.</p>
                    <p className="espaco-paragrafo">Convencionam-se os formatos das instruções load e store multiple para
                    os programas assembler da seguinte forma:
                </p>
                <img className="center-image" src={acesso_memoria_11} alt="AcessoMemoria 11" />
                <p className="espaco-paragrafo"></p>
                <p className="espaco-paragrafo">
                    As instruções load/store multiple podem ser usadas em pilhas, filas,
                    buffers, etc., bem como no processo de cópia de áreas de memória. Embora
                    instruções de acesso múltiplo demandem diversos ciclos de máquina para ser
                    executadas, há ganho significativo de velocidade em relação à transferência do
                    valor de cada registrador individualmente, com uma instrução separada.
                </p>
                <div>
                <Quiz {...Question1}/>
                </div>
            </div>
            <Footer {...index} />
        </>
    );
};

export default AcessoMemoria;
