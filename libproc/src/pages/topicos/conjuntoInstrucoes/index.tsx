import React from 'react';
import conjuntoInstrucoes_1 from './imgs/conjunto-instrucoes_1.png';
import conjuntoInstrucoes_2 from './imgs/conjunto-instrucoes_2.png';
import '../../../assets/styles/global.css';

const ConjuntoInstrucoes = () => {
  return (
    <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
      <h3>O conjunto de instruções do Processador ARM</h3>
      <p className="espaco-paragrafo">
        O conjunto de instruções do Processador ARM
        A maioria das famílias de processadores ARM é capaz de reconhecer mais
        do que um conjunto de instruções. O conjunto de instruções padrão define
        instruções que possuem sempre 32 bits de tamanho, denominado A32; a maioria
        das famílias, a partir da versão 4 da arquitetura, reconhecem também uma
        versão compacta desse conjunto de instruções, na qual as instruções são
        formatadas em apenas 16 bits: esse conjunto de instruções é chamado “Thumb”
        ou T16. Os processadores de 64 bits (versão 8 da arquitetura) reconhecem
        também uma extensão do conjunto A32, denominado A64.
        Formato geral das instruções A32
        Todas as instruções do conjunto A32 possuem 32 bits, não existindo
        instruções maiores (ocupando mais do que quatro bytes na memória de
        programa). Os quatro bits mais significativos de todas as instruções A32 sempre
        representam um código de condição para a execução dessa instrução, ou seja,
        todas as instruções do conjunto A32 são condicionais.
      </p>
      <img className="center-image" src={conjuntoInstrucoes_1} alt="ConjuntoInstrucoes 1" />
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
    </div>
  );
};

export default ConjuntoInstrucoes;

