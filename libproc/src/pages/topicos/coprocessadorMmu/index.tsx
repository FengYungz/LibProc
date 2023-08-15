import React from 'react';
import '../../../assets/styles/global.css';
import coprocessador_mmu_1 from './imgs/coprocessador-mmu_1.png';
import coprocessador_mmu_2 from './imgs/coprocessador-mmu_2.png';
import coprocessador_mmu_3 from './imgs/coprocessador-mmu_3.png';
import coprocessador_mmu_4 from './imgs/coprocessador-mmu_4.png';
import coprocessador_mmu_5 from './imgs/coprocessador-mmu_5.png';
import coprocessador_mmu_6 from './imgs/coprocessador-mmu_6.png';
import coprocessador_mmu_7 from './imgs/coprocessador-mmu_7.png';
import coprocessador_mmu_8 from './imgs/coprocessador-mmu_8.png';
import Header from "../../../components/Header/index";

const CoprocessadorMmu = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <h3>
                    O Coprocessador 15 e o Gerenciador de Memória (MMU)
                </h3>

                <p>
                    Cada núcleo do processador Cortex-A7 possui um gerenciador de
                    memória (Memory Management Unit ou MMU) que realiza a tradução entre
                    endereços virtuais, vistos pela CPU, e endereços físicos, conforme apresentados ao
                    sistema de memória e periféricos. Esse processo de tradução possibilita a
                    definição de espaços de endereçamentos diferentes e independentes para dois ou
                    mais processos, controlando seus modos de acesso, compartilhamento e proteção
                    de áreas de memória (ou de entrada/saída).

                </p>

                <p>
                    A forma como a tradução é realizada no processador ARM é bastante
                    usual: uma parte dos endereços virtual e físico é comum a ambos (o “offset”); os
                    bits mais significativos dos endereços são modificados do VSA (Virtual Segment
                    Address) e o PSA (Physical Segment Address) pelo MMU:
                </p>

                <img className="center-image" src={coprocessador_mmu_1} alt="coprocessadorMmu 1" />
                <p>
                    Dessa forma, as memórias física e virtual são divididas em um número de
                    páginas de mesmo tamanho, determinado pelo número de bits do offset. Cada
                    página da memória virtual pode ser associada (ou “mapeada”) a qualquer página
                    da memória física16. No interior de uma página, o conteúdo de todos os endereços
                    dentro do seu offset é idêntico nas memórias virtual e física.
                </p>

                <p>
                    No caso do ARMv7, podem existir páginas de quatro tamanhos:
                </p>

                <img className="center-image" src={coprocessador_mmu_2} alt="coprocessadorMmu 2" />

                <p>
                    A principal estrutura de dados do MMU é o Translation Look-aside Buffer
                    (TLB) que é uma memória associativa de alta velocidade (memória “cache”) usada
                    para identificar o PAS correspondente a um determinado VAS: o valor do VAS
                    desejado e a identificação do processo atual (ASID) são usados como chave para o
                    acesso ao TLB, que retorna o PAS correspondente, caso presente.
                </p>

                <p>
                    Se o PAS não pôde ser obtido da TLB, o MMU pode ser configurado para
                    gerar uma exceção no processador ou para iniciar automaticamente o processo
                    de busca em uma tabela de tradução de endereços (Address Translation Table ou
                    TTB). Esse processo tem por finalidade atualizar o TLB com a associação entre os
                    endereços VAS e PAS, conforme especificado pela(s) tabela(s).
                </p>

                <p>
                    A tabela de tradução (TTB) é um array na memória, onde cada índice
                    corresponde a um VAS (ou a uma parte de um VAS); cada linha dessa tabela
                    contém um descritor de 32 bits (4 bytes sucessivos, little-endian): uma das
                    informações contidas no descritor pode ser o PAS.</p>

                <p>
                    No caso das seções (1MiB) e das seções grandes (16 MiB), a tabela de
                    tradução precisa de somente 16 kiB de memória e o endereço físico pode ser
                    obtido diretamente a partir de um descritor. No entanto, para mapear páginas de
                    4 kiB seria necessário uma tabela muito maior (32 MiB), com grande desperdício
                    de memória. Nesses casos, é utilizada uma estrutura de tabela esparsa, na qual a
                    entrada na TTB aponta para um segundo nível de tabela: será nesta tabela
                    secundária que o descritor apropriado, contendo o PAS desejado, será
                    encontrado.

                </p>

                <p>
                    Assim, para localizar o endereço físico de uma página, os primeiros 12 bits
                    do VAS são usados para localizar uma posição na TTB: essa posição contém o
                    descritor para a tabela de segundo nível. Os próximos 8 bits do VAS são usados
                    para procurar, nesta tabela de segundo nível, o descritor para o PAS desejado.
                    Com essa técnica, grupos de páginas não utilizadas não precisam ocupar espaço
                    na tabela TTB primária.
                </p>

                <p>
                    As páginas e tabelas de páginas devem ser alinhadas corretamente na
                    memória, de acordo com o seu tamanho:
                </p>

                <ul className="alinha-item">
                    <li> páginas devem alinhadas em 4096 bytes (os 12 bits menos significativos
                        do seu endereço devem ser zero);
                    </li>
                    <li> páginas grandes devem ser alinhadas em 64 kiB (os 16 bits menos
                        significativos do seu endereço devem ser zero);
                    </li>
                    <li> seções devem ser alinhadas em 1 MiB (os 20 bits menos significativos do
                        seu endereço devem ser zero);
                    </li>
                    <li> seções grandes devem ser alinhadas em 16 MiB (os 24 bits menos
                        significativos do seu endereço devem ser zero);
                    </li>

                    <li> a tabela de páginas principal (TTB) deve ser alinhada em 16 kiB (os 14
                        bits menos significativos do seu endereço devem ser zero);
                    </li>

                    <li>
                        as tabelas de páginas secundárias devem ser alinhadas em 1024 bytes
                        (10 bits menos significativos do seu endereço devem ser zero).
                    </li>
                </ul>

                <p>
                    Caso a MMU encontre uma tabela de páginas (primária ou secundária),
                    cujo endereço não estão adequadamente alinhado, será produzida uma exceção
                    de data abort no processador.
                </p>

                <p>
                    Localizar uma seção de 1MiB requer uma busca simples na TTB:
                </p>


                <img className="center-image" src={coprocessador_mmu_3} alt="coprocessadorMmu 3" />

                <p>
                    Os descritores contidos na TTB são de 32 bits (uma palavra), possuindo
                    um formato específico, como pode ser visto na figura a seguir.
                </p>

                <img className="center-image" src={coprocessador_mmu_4} alt="coprocessadorMmu 4" />

                <p>
                    A partir do endereço inicial da TTB, obtido do registrador TTBR
                    (registrador “2” do coprocessador “15”), exemplos de cálculo dos endereços
                    físicos para uma seção (1 MiB) e para uma página (4 kiB) são apresentados a
                    seguir:
                </p>


                <img className="center-image" src={coprocessador_mmu_5} alt="coprocessadorMmu 5" />

                <p>
                    Os descritores possuem campos de bit especiais para definir propriedades
                    para cada página/seção, com relação a permissões de acesso (leitura, escrita e
                    execução) e o funcionamento do cache:
                </p>

                <img className="center-image" src={coprocessador_mmu_6} alt="coprocessadorMmu 6" />

                <p>
                    Nos casos em que a permissão de leitura (ou leitura e escrita) está
                    concedida, o bit “XN” (execute never) pode ser usado para proibir que o
                    processador execute instruções obtidas nos endereços pertencentes à página ou
                    seção descrita.
                </p>

                <p>
                    Caso um endereço de uma página ou seção sem a devida permissão de
                    acesso seja endereçada, uma exceção de abort será produzida pelo MMU (data
                    abort para leitura ou escrita de dados ou instruction fetch abort para leitura de
                    instruções).
                </p>

                <p>
                    Exemplo de código:
                </p>
                <img className="center-image" src={coprocessador_mmu_7} alt="coprocessadorMmu 7" />


                <img className="center-image" src={coprocessador_mmu_8} alt="coprocessadorMmu 8" />
            </div>
        </>
    );
};

export default CoprocessadorMmu;
