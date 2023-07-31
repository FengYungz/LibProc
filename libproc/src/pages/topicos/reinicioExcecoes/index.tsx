import React from 'react';
import reinicio_excecoes_1 from './imgs/reinicio-excecoes_1.png';
import reinicio_excecoes_2 from './imgs/reinicio-excecoes_2.png';
import reinicio_excecoes_3 from './imgs/reinicio-excecoes_3.png';
import reinicio_excecoes_4 from './imgs/reinicio-excecoes_4.png';
import '../../../assets/styles/global.css';

const ReinicioExcecoes = () => {
  return (
    <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
      <h3>Reinício, Exceções e Interrupções</h3>
      <p className="espaco-paragrafo">
        Ao ser ligada a energia ou ao ser detectado o sinal de reset, o processador
        é iniciado no modo supervisor (SVR ou o modo mais privilegiado disponível na
        arquitetura) e o contador de programa (r15) é carregado com o valor zero. A
        instrução que se encontra nesse endereço será portanto a primeira instrução a
        ser executada, seguindo-se a trajetória das instruções a partir dessa primeira
        instrução.
        A sequência das instruções executadas pelo processador pode no entanto
        ser quebrada por determinados eventos síncronos (“exceções”) ou assíncronos
        (“interrupções”). Eventos síncronos, causados pela própria execução de uma
        instrução, ocasionam o abandono da execução dessa instrução (o que pode
        acontecer em diversos estágios da sua execução) e o desvio para um endereço
        específico da memória; processo semelhante acontece com eventos assíncronos,
        causados por sinais provenientes de dispositivos externos à CPU (por exemplo,
        periféricos, outros processadores, etc.), denominados interrupções. Neste
        último caso, porém, a instrução corrente é executada até o seu final e somente
        então o desvio é realizado. Tanto as exceções quanto as interrupções alteram o
        modo de execução do processador.
        Assim como o ponto de entrada do reinício (reset), os demais endereços
        alvo das exceções e interrupções são definidos na área ocupando as 32 primeiras
        posições da memória física, denominada vetor de interrupções:
      </p>
      <img className="center-image" src={reinicio_excecoes_1} alt="ReinicioExcecoes 1" />
      <p className="espaco-paragrafo">
        Observe que existem somente quatro posições de memória reservadas
        para cada vetor, o suficiente para apenas uma instrução de máquina do ARM.
        Sendo assim, na quase totalidade dos casos, essas posições de memória vão
        conter uma instrução de salto (instrução branch) ou de atualização do registrador
        r15 (instrução load).
        Essa tabela mostra também relações de prioridade (quanto menor o
        número, mais prioritário): o processador executando no modo usuário pode ser
        interrompido por qualquer evento, digamos, uma interrupção (prioridade 4),
        mudando para o modo IRQ. Ainda executando no modo IRQ, o processador
        poderia ser interrompido por uma interrupção rápida (prioridade 3), e assim por
        diante. O sinal de reset tem a maior prioridade e não pode ser mascarado.
        A ocorrência de uma exceção ou interrupção faz com que o processador
        execute as seguintes operações:
        <ul className="alinha-item">
          <li>
            1. No caso de interrupções, a instrução atual é executada até o final,
            enquanto são inseridos “nops” no pipeline;
          </li>
          <li>
            2. O pipeline é esvaziado;
          </li>
          <li>
            3. O estado atual dos flags do processador (cpsr), incluindo os bits
            especificando o modo atual é salvo no registrador spsr e o contador de
            programa (r15) é salvo no registrador r14, nas instâncias
            correspondentes ao modo de destino;
            </li>
          <li>
            4. O modo do processador é modificado para o modo correspondente ao
            evento;
          </li>
          <li >
            5. O contador de programa (r15) é carregado com o endereço do vetor
            correspondente ao evento.
          </li>
        </ul>
        Observe-se que o endereço para um eventual retorno ao fluxo original da
        execução, usando o valor armazenado no registrador r14 (link register), depende
        do estágio no qual o pipeline foi interrompido e, como mostra a tabela anterior, o
        endereço correto para ser escrito no contador de programa varia conforme o
        tipo de evento. O modo de execução original (antes da exceção) é recuperado
        automaticamente ao ser restaurado o valor do registrador cpsr.
        A exceção “software interrupt” é ocasionada pela execução da instrução
        swi, cujo uso principal é a elevação do nível de privilégio do processador e a
        execução de algum serviço prioritário, geralmente oferecido pelo Sistema
        Operacional aos programas executando em modo usuário.
      </p>
      <img className="center-image" src={reinicio_excecoes_2} alt="ReinicioExcecoes 2" />
      <p className="espaco-paragrafo">
        Os bits do argumento (bits 0 a 23) são ignorados pela arquitetura, mas
        podem ser analisados pelo serviço de interrupção (lendo a memória com r14
        como registrador base).
        As exceções “abort” estão relacionadas com o acesso à memória, tanto a
        leitura da próxima instrução (prefetch abort) quanto a leitura ou escrita de dados
        (data abort). Algumas situações são erros, tais como violações a proteções de
        memória previamente definidas, uso de endereços não alinhados corretamente,
        etc. Podem, contudo, ocorrer em situações corriqueiras, como o acesso a páginas
        de memória virtual não disponíveis na memória física (ainda não carregadas ou
        trocadas com a memória secundária): nesses casos, o Sistema Operacional deve
        corrigir a situação e a instrução que provocou a exceção será executada
        novamente (e desta vez, supostamente, será bem sucedida).
        Algumas situações podem ocasionar a exceção de instrução indefinida:
        caso a decodificação da instrução falhe, com um opcode inválido ou com um
        conjunto de argumentos inconsistente, e, no caso de uma instrução de
        coprocessador, caso o coprocessador endereçado não esteja presente no sistema.
        É comum que o tratamento dessa exceção seja utilizado para tentar identificar a
        instrução desejada e emular a sua execução em software (“máquina virtual”), por exemplo, a execução de operações de ponto flutuante nas CPUs que não possuam
        o coprocessador correspondente (coprocessador 10).
        Algumas instruções permitem a modificação explícita do modo de
        execução do processador, por exemplo para ter acesso aos registradores de suas
        respectivas instâncias e para retornar à execução no modo usuário. O modo de
        execução do processador é definido pelos bits menos significativos do
        registrador cpsr, que pode ser alterado por instruções privilegiadas.
        A instrução mrs (move register from psr) pode ser usada para ler o valor
        atual do registrador cpsr ou spsr (conforme o valor do flag “S” na instrução).
        Um registrador deve ser especificado como o destino da informação (“Rd”):
      </p>
      <img className="center-image" src={reinicio_excecoes_3} alt="ReinicioExcecoes 3" />
      <p className="espaco-paragrafo">
        A instrução msr (move psr from register) é privilegiada e pode ser usada
        para modificar o valor atual do registrador cpsr ou spsr (conforme o valor do
        flag “S” na instrução). O registrador contendo o valor a ser atribuído deve ser
        especificado pelo campo “Rm”:
      </p>
      <img className="center-image" src={reinicio_excecoes_4} alt="ReinicioExcecoes 4" />
    </div>
  );
};

export default ReinicioExcecoes;
