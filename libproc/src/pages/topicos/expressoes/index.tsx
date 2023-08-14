import React from 'react';
import '../../../assets/styles/global.css';
import expressoes_1 from './imgs/expressoes_1.png';

const Expressoes = () => {
    return (
        <>
            <div className="content-container">
                <h3>Expressões</h3>
                <p className="espaco-paragrafo">
                    O gnu-as é capaz de processar expressões envolvendo operadores
                    equivalentes aos da linguagem C, com as mesmas regras de precedência,
                    incluindo o aninhamento de parênteses. O valor das expressões é avaliado em
                    tempo de montagem, devendo resultar em um valor constante. Uma expressão
                    vazia é avaliada com o valor zero. Observe-se que o resultado de uma expressão
                    que contenha operadores de comparação (por exemplo, == ou &ge;) ou
                    operadores lógicos ( & ou | ) será “zero” para significar “falso”, mas pode
                    resultar em qualquer outro valor para significar “verdadeiro”.
                </p>
                <p className="espaco-paragrafo">
                    As expressões podem conter contantes numéricas, no mesmo formato da
                    linguagem C:
                    <ul className="alinha-item">
                        <li>
                            Decimal: 116
                        </li>
                        <li>
                            Hexadecimal: 0x74
                        </li>
                        <li>
                            Octal: 0164
                        </li>
                        <li>
                            Binário: 0b1110100
                        </li>
                        <li>
                            Caractere: 't'
                        </li>
                    </ul>
                </p>
                <h4>
                    Diretivas ou “pseudo-ops”
                </h4>
                <p className="espaco-paragrafo">
                    Diretivas são comandos para o expressoes, e sempre começam com um um
                    ponto. Uma diretiva pode ter um ou mais parâmetros; caso possua mais do que
                    um parâmetro, eles devem ser separados por vírgulas.
                </p>
                <p className="espaco-paragrafo">
                    A diretiva permite incluir um arquivo, cujo nome deve aparecer entre aspas duplas (string). Os diretórios onde os arquivos a incluir são
                    procurados podem ser especificados pela opção-I na linha de comando do expressoes.
                </p>
                <img className="center-image" src={expressoes_1} alt="Expressoes 1" />
            </div>
        </>
    );
};

export default Expressoes;
