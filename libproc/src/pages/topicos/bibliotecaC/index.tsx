import React from 'react';
import '../../../assets/styles/global.css';
import biblioteca_c_1 from './imgs/biblioteca-c_1.png';

const BibliotecaC = () => {
    return (
        <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
            <h3>Biblioteca C padrão</h3>
            <p className="espaco-paragrafo">
                Os compiladores C geralmente oferecem bibliotecas de funções de alto
                nível, algumas delas definidas por padrões (como stdlib).
            </p>

            <p className="espaco-paragrafo">
                Muitas das funções padrão são interfaces para o acionamento de serviços
                de um sistema operacional (como as funções para manipulação de arquivos e
                sockets). Na quase totalidade dos casos, os processos não acessam diretamente as
                chamadas do sistema operacional, mas o fazem indiretamente a partir das
                funções oferecidas pela biblioteca C (ainda que tais programas tenham sido
                escritos em outras linguagens!), por simplicidade e familiaridade, mas também
                por ser uma interface padronizada, ajudando no processo de portabilidade entre
                diferentes sistemas operacionais.
            </p>

            <p className="espaco-paragrafo">
                Funções mais básicas como a inicialização de um processo, com a alocação
                e inicialização dos segmentos de dados, a chamada e o tratamento do valor
                retornado pela
                função
                main() , também estão incluídas nas bibliotecas
                padrão: o ponto de entrada definido pelo linker é a função start() , definida
                no arquivo crt0.o , que realiza esse procedimento. Ao criar um programa em
                C para ser executado em uma máquina sem um sistema operacional, o
                programador é responsável pela realização dessas tarefas.
            </p>

            <p className="espaco-paragrafo"> As bibliotecas padrão oferecem também várias ferramentas úteis ao
                programador, como tratamento de funções variádicas (stdarg), funções
                matemáticas, gerenciamento de memória dinâmica, manipulação de strings, data
                e hora, formatação de strings com localização (“locales”), saltos longos, expressões
                regulares, etc.
            </p>

            <p className="espaco-paragrafo">
                A inclusão das funções das bibliotecas padrão é opcional (ao contrário das
                funções do runtime) e pode ser feita tanto estaticamente pelo linker (por exemplo,
                incluindo o arquivo
                libc.a ) quanto dinamicamente pelo loader do sistema
                operacional (carregando libc.so junto com o processo).
            </p>


            <p className="espaco-paragrafo">
                De um modo geral, todas as declarações das funções presentes na
                biblioteca padrão são acessíveis para inclusão no código-fonte com o comando
                #includedo pré-processador, em arquivos cabeçalho como
                stdio.h ,math.h ,
                stdlib.h ,
                string.h , etc. As bibliotecas a serem utilizadas
                também devem incluídas entre os arquivos a serem consultados pelo linker
                ( libm.a , libpthread.a , etc.).
            </p>

            <p className="espaco-paragrafo">Você pode verificar as funções de biblioteca existentes na versão do gcc
                que está utilizando com os comandos:</p>



            <img className="center-image" src={biblioteca_c_1} alt="biblioteca-c 1" />

            <p className="espaco-paragrafo">
                Existem várias implementações da biblioteca C que podem ser utilizadas
                pelo compilador gcc (mas isso geralmente requer uma versão especial do gcc
                para cada biblioteca: às vezes o nome da biblioteca é incluído no prefixo do
                executável do compilador), tais como glibc (do próprio GNU), BSD (usado no
                macOS), uclibc (projeto uClinux), newlib (Red Hat), musl (usado no Gentoo e
                Alpine) e bionic (usado no Android). A versão do arm-none-eabi-gcc que
                estamos utilizando instala a biblioteca C do projeto newlib8, frequentemente
                utilizada sem o suporte de um sistema operacional (aplicações “bare metal”, por
                isso o “none” no prefixo) e em sistemas sem suporte a memória virtual.
            </p>

        </div>
    );
};

export default BibliotecaC;

