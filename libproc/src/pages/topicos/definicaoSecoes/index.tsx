import React from 'react';
import '../../../assets/styles/global.css';
import definicao_secoes_1 from './imgs/definicao-secoes_1.png';
import Header from "../../../components/Header/index";

const DefinicaoSecoes = () => {
    return (
        <>
            <Header />
            <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
                <h3>Definição de Seções</h3>
                <p className="espaco-paragrafo">
                    Seções são áreas de memória tratadas como unidades pelo linker e loader,
                    geralmente associadas a determinadas funções (como “.text” para conter código
                    executável e “.data” para conter informações modificáveis) e que serão alocadas
                    a endereços absolutos de memória contíguos e com determinadas propriedades
                    (por exemplo, “.text” em uma região de memória com permissão de execução ou
                    na memória flash de programa de um microcontrolador). O assembler pode
                    especificar o nome da seção na qual instruções ou dados serão inseridos, porém
                    não tem controle sobre o endereçamento absoluto das seções, cuja atribuição é
                    função do linker.
                </p>
                <p className="espaco-paragrafo">
                    As diretivas .data e .text informam ao assembler que os próximos
                    endereços estão nessas seções, respectivamente. Um valor numérico após a
                    diretiva permite definir uma subseção. A diretiva .section pode especificar
                    uma seção de nome arbitrário (além de .data e .text ).
                </p>
                <img className="center-image" src={definicao_secoes_1} alt="definicaoSecoes 1" />
            </div>
        </>
    );
};

export default DefinicaoSecoes;
