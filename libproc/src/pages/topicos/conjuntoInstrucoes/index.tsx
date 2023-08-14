import React from 'react';
import conjuntoInstrucoes_1 from './imgs/conjunto-instrucoes_1.png';
import conjuntoInstrucoes_2 from './imgs/conjunto-instrucoes_2.png';
import '../../../assets/styles/global.css';
import Quiz from "../quiz";
import Header from "../../../components/Header/index";

interface Question{
  quest: string;
  ans: any;
}

const Question1: Question = {quest: "Sejam os quatro primeiros bits do registrador CPSR atualmente \'1010\' quais condicionais de instrução gerariam instruções \'nop\' no ciclo de execução?", ans: <div><p>Quaisquer instruções com as seguintes condicionais gerariam instruções nop: igual (0000); sem carry (0011); não negativo (0101); overflow (0110); menor ou igual (1001); maior ou igual (1010); maior que (1100).</p><p>Consulte a tabela acima para confirmar ;)</p><p>Quer descobrir como setar flags no resgitrador CPSR? Consulte o a discussão</p><a href="https://www.wise-ware.com.br/pcs3732/d/5-flags-do-arm">Flags do ARM</a> no fórum da disciplina.</div>};

const ConjuntoInstrucoes = () => {
  return (
    <>
      <Header />
      <div className="content-container">
        <h3>O conjunto de instruções do Processador ARM</h3>
        <p className="espaco-paragrafo">
          A maioria das famílias de processadores ARM é capaz de reconhecer mais
          do que um conjunto de instruções. O conjunto de instruções padrão define
          instruções que possuem sempre 32 bits de tamanho, denominado A32; a maioria
          das famílias, a partir da versão 4 da arquitetura, reconhecem também uma
          versão compacta desse conjunto de instruções, na qual as instruções são
          formatadas em apenas 16 bits: esse conjunto de instruções é chamado “Thumb”
          ou T16. Os processadores de 64 bits (versão 8 da arquitetura) reconhecem
          também uma extensão do conjunto A32, denominado A64.</p>
          <h4>Formato geral das instruções A32</h4>
          <p className="espaco-paragrafo"></p>
          <p className="espaco-paragrafo">Todas as instruções do conjunto A32 possuem 32 bits, não existindo
          instruções maiores (ocupando mais do que quatro bytes na memória de
          programa). Os quatro bits mais significativos de todas as instruções A32 sempre
          representam um código de condição para a execução dessa instrução, ou seja,
          todas as instruções do conjunto A32 são condicionais.
        </p>
        <img className="center-image" src={conjuntoInstrucoes_1} alt="ConjuntoInstrucoes 1" />
        <p className="espaco-paragrafo"></p>
        <p className="espaco-paragrafo">
          Dependendo do código de condição presente no início da instrução e da
          situação atual dos flags N, Z, C e V, a instrução pode ser executada (a condição
          está satisfeita) ou descartada (condição não satisfeita). Neste último caso, a
          instrução é ignorada pelo estágio de execução do pipeline (“nop” ou “no
          operation”). Os códigos de condição definidos no processador ARM são
          apresentados na tabela a seguir:
        </p>
        <img className="center-image" src={conjuntoInstrucoes_2} alt="ConjuntoInstrucoes 2" />
        <p className="espaco-paragrafo">
          As instruções cujo código de condição não seja “1110” são, portanto,
          condicionais, e ganham um sufixo em seu mnemônico para indicar esse fato. Por
          exemplo, uma instrução de adição “add” cuja execução seja condicionada ao caso
          do flag carry ser “um” será denominada “addcs”; neste caso, os bits mais
          significativos da instrução devem ser “0010”.
        </p>
        <div>
          <Quiz {...Question1}/>
        </div>
      </div>
    </>
  );
};

export default ConjuntoInstrucoes;

