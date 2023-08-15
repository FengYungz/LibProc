import React from 'react';
import thumb_1 from './imgs/thumb_1.png';
import '../../../assets/styles/global.css';
import Header from "../../../components/Header/index";
import Footer from '../footer';

interface Index{
  index: number;
}

const index:Index = {index:26};

const Thumb = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <h3>Conjunto de Instruções Thumb</h3>
                <p className="espaco-paragrafo">
                    A partir da versão 4 da arquitetura (ARM v.4), os processadores passaram
                    a reconhecer o conjunto de instruções chamado “thumb”, no qual as instruções
                    são codificadas em 16 bits, com o objetivo de reduzir a quantidade de memória
                    necessária para armazenar um programa (“footprint”) e aumentar a taxa de
                    execução de instruções (“throughput”), usando barramentos mais simples e
                    baratos.
                    Nos processadores ARM convencionais, cada instrução thumb é traduzida
                    em uma instrução ARM equivalente e executada, de forma transparente: muito
                    poucas instruções thumb não possuem uma tradução direta em instruções de 32
                    bits. O processador identifica o conjunto de instruções através de um “modo”,
                    que é selecionado através do bit “T”, presente no registrador cpsr.
                    A seleção do conjunto de instruções obedece as seguintes regras:
                    <ul className="alinha-item">
                        <li>
                            Após um reset ou qualquer exceção ou interrupção, o modo de execução é
                            sempre ARM (bit “T” igual a “zero”);
                        </li>
                        <li>
                            Ao retornar de uma exceção ou interrupção, o valor anterior do bit “T”,
                            que é salvo automaticamente em spsr, é restaurado e o processador
                            assume novamente o modo de instruções anterior à exceção;
                        </li>
                        <li>
                            Normalmente não se deve alterar o valor do bit “T” (por exemplo, usando
                            a instrução msr). Para alternar entre os modos ARM e thumb, as
                            instruções bx (branch and exchange) e blx (branch, link and exchange), que
                            existem em ambos os conjuntos de instrução, podem ser usadas;
                        </li>
                        <li>
                            As instruções bx e blx usam o bit menos significativo do endereço efetivo
                            de destino para identificar o conjunto de instruções de destino: caso seja
                            “zero” (endereço alinhado em half-words), o conjunto será ARM (bit “T” é
                            zerado); caso seja “um” (endereço desalinhado), o endereço é corrigido e
                            o conjunto de instruções será o thumb (bit “T” ligado).
                        </li>
                    </ul>

                    <p className="espaco-paragrafo">
                        A implementação do conjunto de instruções thumb divide o conjunto de
                        registradores em dois grupos: “lo”, de r0 até r7 e “hi”, de r8 a r15. A maioria das
                        instruções thumb somente permite o acesso aos registradores do primeiro grupo.
                        Algumas instruções especiais permitem manipular registradores do grupo “hi”,
                        em particular envolvendo o contador de programa (r15) e o stack pointer (r13).
                    </p>

                    <p className="espaco-paragrafo">
                        Nos processadores da família Cortex-M (microcontroladores), a
                        arquitetura implementada suporta somente o conjunto de instruções thumb,
                        geralmente com algumas outras diferenças significativas, com relação aos
                        estados do processador e o acesso a coprocessadores.
                    </p>

                    <p className="espaco-paragrafo">
                        A tabela a seguir ilustra as principais diferenças entre os conjuntos de
                        instrução “arm” e “thumb”.
                    </p>

                    <img className="center-image" src={thumb_1} alt="Thumb 1" />
                </p>
            </div>
            <Footer {...index} />
        </>
    );
};

export default Thumb;
