import React from 'react';
import coprocessadores_1 from './imgs/coprocessadores_1.png';
import coprocessadores_2 from './imgs/coprocessadores_2.png';
import coprocessadores_3 from './imgs/coprocessadores_3.png';
import coprocessadores_4 from './imgs/coprocessadores_4.png';
import coprocessadores_5 from './imgs/coprocessadores_5.png';
import coprocessadores_6 from './imgs/coprocessadores_6.png';
import '../../../assets/styles/global.css';
import Header from "../../../components/Header/index";

const Coprocessadores = () => {
  return (
    <>
      <Header />
      <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
        <h3>Coprocessadores</h3>
        <p className="espaco-paragrafo">
          Como é usual entre os processadores RISC, cada unidade de
          processamento (ou “núcleo”) ARM é modular, sendo que funções adicionais
          podem ser incluídas no sistema mediante o uso de coprocessadores. Até dezesseis
          coprocessadores podem existir dentro de um núcleo ARM, servido a finalidades
          diversas. Alguns desses coprocessadores são padronizados:
          <ul className="alinha-item">
            <li>
              Coprocessador 15 ou coprocessador de sistema – sempre presente em todas
              as arquiteturas ARM, é utilizado para configuração geral do núcleo (clock,
              operação dos caches, controle de energia, temperatura, temporização
              principal, controle de interrupções, etc.); nos núcleos que possuem
              gerenciamento de memória (MMU) ou proteção de memória (MPU), esses
              sistemas também são controlados pelo coprocessador 15;
            </li>
            <li>
              Coprocessador 14 ou “debug” – presente na grande maioria dos chips, é
              responsável pelas funções de depuração (breakpoints, watchpoints,
              protocolos para troca de informações com depuradores, etc.);
            </li>
            <li>
              Coprocessador 10 – execução de operações de ponto flutuante em
              hardware (processador “vfpv4”). Trata-se de uma unidade de
              processamento de ponto flutuante completa, com seu próprio conjunto de
              registradores: 32 registradores de 32 bits (single precision), que podem ser
              agrupados dois a dois para formar 16 registradores de 64 bits (double
              precision). Os registradores podem ser lidos e escritos de e para os
              registradores da CPU (r0 a r15), de e para a memória (instruções de load
              e store). Instruções específicas (instruções de ponto flutuante) são
              decodificadas e executadas pelo coprocessador 10, alterando os valores de
              seus registradores. Operações que afetam múltiplos (ou eventualmente
              todos) registradores são permitidas (operações vetoriais).
            </li>
          </ul>
          <p className="espaco-paragrafo">
            Todos os coprocessadores compartilham os barramentos da CPU
            principal, podendo ter acesso aos endereços (virtuais), aos dados e instruções
            que circulam internamente.
          </p>
          <img className="center-image" src={coprocessadores_1} alt="Coprocessadores 1" />
          <img className="center-image" src={coprocessadores_2} alt="Coprocessadores 2" />
          <p className="espaco-paragrafo">
            As instruções que envolvem coprocessadores dependem da execução
            coordenada e da sincronização entre o processador principal e o coprocessador
            especificado pela instrução. O campo de execução condicional está presente em
            todas as instruções, inclusive nas instruções de coprocessador: a execução de
            uma instrução de coprocessador é sempre iniciada pela CPU, após verificada a
            validade da condição presente na instrução, de acordo com os valores atuais dos
            flags no registrador cpsr.
            Caso a instrução deva ser executada, a CPU usa um sinal específico (CPI)
            para notificar os coprocessadores. Caso o coprocessador, endereçado pelo campo
            especificado na instrução, não exista no núcleo, o sinal CPA é ativado
            (coprocessador ausente) – a instrução é, então, considerada inválida pela CPU.
            Caso o sinal CPA indique processador presente, o próprio coprocessador, através
            do sinal CPB (coprocessor busy), informa à CPU se pode executar a instrução: nesta
            situação, a CPU segue para a busca da próxima instrução na memória, enquanto o
            coprocessador executa a instrução atual; do contrário, “nops” são introduzidos
            no pipeline da CPU até que o sinal CPB seja desligado.
            As instruções mrc (move register from coprocessor) e mcr (move register to
            coprocessor) permitem trocar dados entre os registradores da CPU e os
            registradores de um coprocessador:
          </p>
          <img className="center-image" src={coprocessadores_3} alt="Coprocessadores 3" />
          <p className="espaco-paragrafo">
            Os campos “condição” e “Rd” são tratados pela CPU, enquanto os demais
            campos somente têm significado para o coprocessador endereçado pelo campo
            “cop #” (bits 8-11). Caso a condição para a execução da instrução esteja satisfeita,
            o valor do registrador especificado pelo campo “Rd” será enviado ao
            coprocessador (bit “L” igual a “zero”: instrução mcr) ou será recebido do
            coprocessador (bit “L” igual a “um”: instrução mrc).
            Geralmente os campos “CRn” e “CRm” especificam registradores internos
            (operandos) do coprocessador, mas o seu significado é arbitrário. Os campos “op1” e “op2” são usados para formar diferentes operações a ser realizadas com
            os operandos e seu formato também é ignorado pela CPU.
            Os registradores do coprocessador podem também ser lidos e escritos da
            memória, usando as instruções ldc e stc, que também permitem utilizar os
            modos de endereçamento do ARM, à semelhança das instruções ldrh e strh:
          </p>
          <img className="center-image" src={coprocessadores_4} alt="Coprocessadores 4" />
          <p className="espaco-paragrafo">
            Os bits “P”, “U”, “N”, “B” e “W” da instrução são usados para especificar o
            modo de endereçamento, conforme a tabela:
          </p>
          <img className="center-image" src={coprocessadores_5} alt="Coprocessadores 5" />
          <p className="espaco-paragrafo">
            O significado desses bits é equivalente às instruções vistas anteriormente,
            permitindo o emprego dos modos de endereçamento pré e pós-indexados,
            atualização de índice e a definição da direção do offset. O valor do registrador
            “Rn” é utilizado como base para o cálculo do endereço efetivo da memória, que
            será enviado ao coprocessador para a realização da leitura ou escrita, conforme
            definido pelo bit “L”: “zero” – escrita (instrução stc) ou “um” – leitura
            (instrução ldc). O campo “CRd” especifica o registrador de origem ou de destino,
            interno ao coprocessador endereçado pelo campo “cop #”.
            Finalmente, a instrução genérica de coprocessador (cdp) somente tem o
            campo de execução condicional conferido pela CPU e seu efeito é totalmente
            dependente do coprocessador responsável por sua execução:
          </p>
          <img className="center-image" src={coprocessadores_6} alt="Coprocessadores 6" />
          Como regra geral, os campos “op1” e “op2” são utilizados pelo
          coprocessador para determinar a operação (opcode) a ser realizada e os campos
          “CRd”, “CRn” e “CRm” especificam os registradores de destino, do primeiro
          operando e do segundo operando para a operação, respectivamente,
          pertencentes ao conjunto de registradores do coprocessador. No entanto, o
          significado desses campos é arbitrário, e podem ser codificados da forma mais
          conveniente para o coprocessador. Por exemplo, no caso do coprocessador 10,
          existem 32 registradores de precisão simples e alguns dos bits do campos de
          opcode são utilizados para complementar os campos “CRd”, “CRn” e “CRm”.
        </p>
      </div>
    </>
  );
};

export default Coprocessadores;
