import React from 'react';
import '../../../assets/styles/global.css';

const Símbolos = () => {
    return (
        <>

            <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
                <h3>Símbolos</h3>
                <p className="espaco-paragrafo">
                    Símbolos são sequências de caracteres alfanuméricos, incluindo o ponto
                    (“.”), o cifrão (“$”) e a barra de sublinhar (“_”), com a restrição de não começar
                    com um dígito. Os símbolos no assembler são sensíveis ao caso, ou seja, “loop”,
                    “Loop” e “LOOP” são todos símbolos diferentes.
                </p>
                <p className="espaco-paragrafo"> O valor de um símbolo é um número (de 32 ou 64 bits, dependendo da
                    arquitetura alvo), que geralmente representa um endereço ou uma constante.
                    Símbolos não definidos são considerados com o valor (temporário) “zero”:
                    eventualmente o linker tentará “corrigir” esses valores. Observe-se que todos os
                    endereços para o assembler são relativos ao primeiro endereço da seção onde
                    estão declarados e são sempre realocados pelo linker.
                </p>
                <p className="espaco-paragrafo">
                    Um símbolo pode ser declarado como um sendo rótulo (“label”), que
                    aponta um endereço, bastando para isso ser seguido por dois pontos : , por
                    exemplo “loop:”, “fim:”. Símbolos também podem ser atribuídos usando =
                    ou através das diretivas .set ou .equ com o resultado de uma expressão.
                </p>
                <p className="espaco-paragrafo">
                    O símbolo . representa o endereço atual (sempre em relação ao
                    primeiro endereço da seção atual); ele pode ser atribuído, o que tem efeito
                    semelhante às diretivas .org e .space .
                </p>

            </div>
        </>
    );
};

export default Símbolos;
