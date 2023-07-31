import React from 'react';
import load_store_1 from './imgs/load-store_1.png';
import '../../../assets/styles/global.css';

const InstrucoesAcessoMemoria = () => {
    return (
        <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
            <h3>Instruções de acesso à memória (Load/Store)</h3>
            <p className="espaco-paragrafo">
                As instruções load e store do conjunto thumb usam um registrador
                como base e o modo de endereçamento pré-indexado, que pode envolver um
                segundo registrador ou um valor constante (offset). O contador de programa (r15)
                e o stack pointer (r13) são os únicos registradores “hi” que podem ser usados como
                registrador base.
            </p>
            <p className="espaco-paragrafo">
                As instruções load e store no modo thumb são de seis tipos:
                <ul className="alinha-item">
                    <li>
                        Carga de uma palavra (32 bits) de uma posição de memória relativa ao
                        contador de programa (offset imediato de oito bits)- somente ldr;
                    </li>
                    <li>
                        Carga ou salvamento de palavra (32 bits) em uma posição de memória
                        relativa ao stack pointer (offset imediato de oito bits)- ldr e str;
                    </li>
                    <li>
                        Carga ou salvamento de dados (32, 16 ou 8 bits) em um posição de
                        memória relativa a um registrador base (offset imediato de cinco bits)–
                        ldr, str, ldrb, strb, ldrh, strh;
                    </li>
                    <li>
                        Carga ou salvamento de dados (32, 16 ou 8 bits) em um posição de
                        memória calculada com o valor de dois registradores (base e índice)-
                        todas as instruções: ldr, str, ldrb, strb, ldrsb, strsb, ldrh e strh;
                    </li>
                    <li>
                        Carga ou salvamento de múltiplos registradores na pilha- push e pop;
                    </li>
                    <li>
                        Carga ou salvamento de múltiplos registradores “lo” a partir de um
                        endereço base: ldmia e stmia.
                    </li>
                </ul>
            </p>
            <img className="center-image" src={load_store_1} alt="LoadStore 1" />
            <p className="espaco-paragrafo">Os offsets imediatos podem ter cinco bits (somando a um registrador base
                entre r0 e r7) ou oito bits (somando ao registrador r15 ou ou registrador r13),
                sendo sempre sem sinal. Os offsets são multiplicados pelo tamanho dos dados a
                acessar: quatro vezes para palavras (32 bits) e duas vezes para half-words (16 bits).
                As instruções que têm r15 ou r13 como base somente podem acessar palavras (32
                bits) na memória. As demais instruções possuem versões para leitura de bytes (bit
                “B”) e half-words (bit “H”), com ou sem extensão de sinal (bit “S”).
            </p>
            <p className="espaco-paragrafo">
                As instruções push, pop, ldmia e stmia permitem transferir vários
                registradores em sequência e sempre atualizam o valor do registrador base. Os
                únicos registradores que podem ser acessados são os registradores “lo” (r0 a r7),
                com a exceção dos registradores pc (r15) e lr (r14) no caso das instruções de
                pilha, quando o bit “R” vale “um”: push empilha r14 e pop desempilha seu valor
                em r15.
            </p>

        </div>
    );
};

export default InstrucoesAcessoMemoria;
