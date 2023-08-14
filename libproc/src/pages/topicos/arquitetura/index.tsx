import React from 'react';
import arquitetura_1 from './imgs/arquitetura_1.png';
import arquitetura_2 from './imgs/arquitetura_2.png';
import arquitetura_3 from './imgs/arquitetura_3.png';
import arquitetura_4 from './imgs/arquitetura_4.png';
import '../../../assets/styles/global.css';
import Header from "../../../components/Header/index";
import MultipleChoiceQuestion from '../multipleChoice'

interface Question {
  question: string;
  options: string[];
  answer:number;
  correctMessage: any;
  incorrectMessage: any;
}

const Question1: Question = { question: "Considerando o modelo de pipeline da arquitetura original do processador ARM, endereçamento por número de bytes e que não existam instruções de salto no programa em questão, quando uma instrução presente no endereço E1 está sendo executada qual o valor do registrador R15? ", options: ["R15 = E1", "R15 = E1 + 8", "R15 = E1 + 4", "R15 = E1 + 2"], answer:1, correctMessage:<div><p>A resposta está correta!</p><p>A arquitetura ARM original possui um pipeline de 3 estágios (Fetch -{'>'} Decode -{'>'} Execute), portanto, quando uma instrução está no estágio de execução o program counter (registrador R15) já está 2 instruções à frente da instrução inicial (8 posições de memória, já que cada instrução possui 4 bytes)!</p></div>, incorrectMessage:<div><p>A resposta correta seria R15 = E1 +8.</p><p>A arquitetura ARM original possui um pipeline de 3 estágios (Fetch -{'>'} Decode -{'>'} Execute), portanto, quando uma instrução está no estágio de execução o program counter (registrador R15) já está 2 instruções à frente da instrução inicial (8 posições de memória, já que cada instrução possui 4 bytes)!</p></div>};

const Arquitetura = () => {
  return (
    <>
      <Header />
      <div className="content-container">
        <h3>Arquitetura do Processador ARM</h3>
        <p>
          O processador ARM (Advanced Risc Machine, originalmente Acorn Risc
          Machine) é um microprocessador RISC (Reduced Instruction Set Computer) de 32 bits
          muito popular. Sua primeira versão foi desenvolvida em 1985 e várias revisões
          foram feitas ao longo dos anos. As versões mais utilizadas de sua arquitetura hoje
          em dia são a versão 4 (em microcontroladores), a versão 7 (computadores e
          dispositivos portáteis de 32 bits) e a versão 8 (computadores e dispositivos
          portáteis de 64 bits). Como regra geral, as versões mais recentes implementam
          todas as instruções das versões mais antigas.</p>
          <p className="espaco-paragrafo">A arquitetura original foi implementada com um pipeline de três estágios,
          apresentado na figura seguinte:
        </p>
        <img className="center-image" src={arquitetura_1} alt="Arquitetura 1" />
        <p className="espaco-paragrafo"></p>
        <p>
          Outras versões da arquitetura ARM contam com pipelines com maior
          número de estágios, pipelines superescalares e podem incluir processadores
          secundários, como processador de ponto flutuante escalar (armhf) e processador
          vetorial (NEON). Além disso, arquiteturas com múltiplos núcleos (SMP) são
          comuns. No entanto, o modelo lógico do fluxo de dados visto anteriormente pode
          ser utilizado para compreender o conjunto de instruções básico, com o qual
          todos os processadores de todas as versões da arquitetura são compatíveis.</p>
          <p>O coração da CPU é um conjunto de dezesseis registradores, cujos nomes
          são R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14 e R15. Em
          conformidade com a filosofia dos processadores RISC, qualquer desses
          registradores pode ser utilizado por qualquer instrução de máquina, de forma
          simétrica; contudo, os registradores R14 e R15 têm funções especiais.</p>
          <p>
          O registrador R15 é o contador de programa, e seu conteúdo aponta o
          endereço da memória no qual a próxima instrução será buscada (estágio “fetch”Contador de
          programado pipeline). A execução de instruções de salto e a ocorrência de exceções ou
          interrupções vão alterar diretamente o conteúdo desse registrador.
          O registrador R14 é chamado de link register: ele é utilizado para o
          armazenamento temporário do endereço de retorno de uma sub-rotina ou de um
          serviço de interrupção. Ao ser executada uma instrução branch and link (bl) ou ao
          ser reconhecida uma exceção ou interrupção, o valor do contador de programa
          (registrador R15) é copiado no registrador R14 antes de ser alterado para o
          endereço de destino do salto.</p>
          <p>O estágio de execução do pipeline inclui uma Unidade Lógica e Aritmética
          (ALU) bastante poderosa, um multiplicador com acúmulo e um deslocador tipo
          “barril” (barrel shifter) em uma das entradas da ALU. A Unidade Lógico e
          Aritmética do ARM é capaz de executar todas as operações lógicas, as operações
          de soma e subtração (neste último caso também permitindo inverter a ordem dos
          operandos) e pode alterar o valor dos flags do processador (N, V, C e Z, no
          registrador CPSR) conforme o resultado da operação. Um campo especial na
          instrução (bit “S” ou “set flags”) permite habilitar ou inibir a atualização dos flags
          pela ALU como resultado da execução da instrução.</p>
          <p>O multiplicador permite calcular o produto entre um número de 32 bits e
          um número de oito bits (até a versão 4 da arquitetura) ou de dezesseis bits
          (versão 5) e acumular o resultado. Dessa forma, não é possível completar uma
          instrução de multiplicação de 32 bits por 32 bits em um único ciclo.
          O barrel shifter é capaz de deslocar o valor de 32 bits em sua entrada de
          qualquer quantidade de bits à direita ou à esquerda, também podendo considerar
          o deslocamento do sinal (deslocamento aritmético à direita) e executar rotações à
          direita. O barrel shifter é um circuito combinatório, realizando esse
          deslocamento ou rotação em um único ciclo. Além da função óbvia no
          processamento de deslocamentos e rotações, o barrel shifter é comumente
          utilizado em conjunto com a operação realizada pela ALU.</p>
        <p className="espaco-paragrafo"> Os flags de estado do processador são armazenados em um registrador
          especial denominado CPSR (current program status register), cujos bits possuem
          diferentes significados, conforme a tabela a seguir:
        </p>
        <img className="center-image" src={arquitetura_2} alt="Arquitetura 2" />
        <p className="espaco-paragrafo"></p>
        <p>
          O modo de execução do processador é utilizado para definir níveis de
          privilégio, permitindo o controle de características especiais da arquitetura,
          como o acesso a recursos da CPU e conjuntos de registradores alternativos.
          Normalmente, o processador executa no modo usuário (“User”), que possui o
          menor privilégio; ao ser atendida uma interrupção, o modo é alterado para “IRQ”
          ou “FIQ”, dependendo da configuração das interrupções; a ocorrência de
          exceções pode levar o processador ao estado “Undef” (instrução não definida),
          “Abort” (falha de acesso à memória) ou “SVR” (supervisor: chamada ao Sistema
          Operacional com a instrução swi).</p>
          <p className="espaco-paragrafo">Instâncias dedicadas de alguns registradores são exclusivas de cada modo,
          mantendo o seu valor inalterado enquanto o processador executar em outros
          modos. Veja no esquema da figura abaixo que os registradores R0 até R7 são
          comuns a todos os modos e que os registradores R13, R14 e SPSR têm instâncias
          específicas para cada um dos modos. O registrador SPSR (saved program status
          register) de cada modo é automaticamente atualizado com o valor do registrador
          CPSR no momento da mudança de modo.
        </p>
        <img className="center-image" src={arquitetura_3} alt="Arquitetura 3" />
        <p className="espaco-paragrafo"></p>
        <p>
          Os registradores R8 até R12 têm instâncias especiais no modo “FIQ”
          (chamado de modo “fast interrupt” ou “interrupção rápida”), com o objetivo de
          agilizar o tratamento dessa interrupção, uma vez que a cópia e a restauração dos
          valores originais desses registradores podem ser dispensadas pelo serviço de
          interrupção correspondente.</p>
          <p>Observe que o registrador R13 também é preservado durante as mudanças
          de modo. Por convenção, esse registrador normalmente é utilizado como
          ponteiro de pilha (stack pointer). Na verdade, a arquitetura ARM não define uma
          “pilha” e qualquer registrador poderia ser utilizado com essa finalidade, mas o
          registrador R13 possui a vantagem de ter instâncias independentes,
          automatizando a definição de pilhas separadas para cada modo.</p>
          <p>Os registradores do ARM podem conter valores de 32 bits (“words”), cujo
          sinal pode ser considerado (signed, em complemento de dois) ou não (unsigned).
          As instruções load e store também podem carregar ou salvar valores de 16 bits
          Stack pointer(“half words”) ou de 8 bits (“bytes”) da memória: nesses casos, se o sinal for
          considerado, ele é estendido do bit 15 (no caso de half words com sinal) ou do bit
          7 (no caso de bytes com sinal) até o bit 31 do registrador de destino.</p>
          <p className="espaco-paragrafo">A memória é sempre organizada em bytes (cada endereço contém um byte)
          e, como qualquer registrador pode ser usado como um ponteiro, ela pode conter
          até 232 endereços distintos (4 GiB)1. No entanto, tanto palavras quanto instruções
          de 32 bits devem ser alinhadas em endereços múltiplos de quatro; half words e
          instruções de 16 bits (modo Thumb) somente podem ser acessadas em endereços
          pares.
        </p>
        <img className="center-image" src={arquitetura_4} alt="Arquitetura 4" />
        <p className="espaco-paragrafo"></p>

        <p>
          A arquitetura ARM pode salvar dados compostos por múltiplos bytes na
          memória empregando tanto a ordenação little endian (bytes menos significativos
          são salvos em endereços menores) quanto big endian (bytes mais significativos em
          endereços menores). Após o reset, a ordenação padrão é little endian.</p>
          <p>Em contraste com as arquiteturas RISC tradicionais, com o objetivo de
          reduzir custos, a arquitetura original (versão 1) não incluía uma memória cache
          interna nem exigia algum tipo especial de barramento de memória ou a
          existência de uma memória cache externa. Nessa situação, é comum na prática
          que diversos acessos consecutivos à memória sejam necessários para a execução
          de uma instrução load ou store. Considerando esse fato, os projetistas do ARM
          introduziram também instruções capazes de ler e de escrever diversos
          registradores em sequência na memória (load multiple e store multiple).</p>
          <p>Todas essas operações normalmente levam vários ciclos de máquina para serem
          executadas.</p>
          <p className="espaco-paragrafo">Observe que apesar de existirem instruções especiais para a troca de
          dados com coprocessadores, qualquer acesso a dispositivos e periféricos deve ser
          realizado através das mesmas instruções load e store, usando o endereçamento
          de memória convencional (entrada e saída mapeada em memória).
        </p>
        <div>
          <MultipleChoiceQuestion {...Question1} />
        </div>
      </div>
    </>
  );
};

export default Arquitetura;