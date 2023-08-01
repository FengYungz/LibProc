import React from 'react';
import '../../../assets/styles/global.css';
import biblioteca_c_newlib_1 from './imgs/biblioteca-c-newlib_1.png';
import biblioteca_c_newlib_2 from './imgs/biblioteca-c-newlib_2.png';
import biblioteca_c_newlib_3 from './imgs/biblioteca-c-newlib_3.png';
import biblioteca_c_newlib_4 from './imgs/biblioteca-c-newlib_4.png';
import biblioteca_c_newlib_5 from './imgs/biblioteca-c-newlib_5.png';
import biblioteca_c_newlib_6 from './imgs/biblioteca-c-newlib_6.png';

const BibliotecaCNewlib = () => {
    return (
        <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
            <h3>Biblioteca C padrão: newlib</h3>
            <p className="espaco-paragrafo">
                O compilador cruzado arm-none-eabi-gcc normalmente é compilado
                junto com a biblioteca C “newlib”, criada pela Red Hat. Essa biblioteca é preferida
                em relação à biblioteca padrão do GNU (glibc) por ser mais compacta e não
                depender de um sistema operacional ou de um sistema de proteção ou
                virtualização de memória. Uma versão ainda menor pode ser utilizada em
                aplicações com pouca memória, como em microcontroladores, chamada de
                “newlib-nano”.
            </p>
            <p className="espaco-paragrafo">
                Os arquivos de biblioteca do newlib normalmente estão instalados no
                diretório /usr/lib/arm-none-eabi/lib (arquivos libc.a, libm.a,
                libc_nano.c, libg.a, etc.). O newlib implementa as funções definidas pelos
                padrões, entre elas:
            </p>

            <ul className="alinha-item">
                <li>
                    Funções de entrada e saída (“stdio”): fopen, fread, puts, gets, getc,
                    printf e sua família;
                </li>
                <li>Funções padrão da linguagem C (“stdlib”): malloc, free, atof, atoi, rand,
                    etc.;

                </li>
                <li>
                    Funções de tempo (“time”): time, ctime, localtime, etc.;
                </li>
                <li>
                    Funções matemáticas (“math”): sin, cos, pow, round, etc.;
                </li>
                <li>
                    Funções de manipulação de strings (“string”): strlen, strcat, strcpy,
                    memcpy, etc.;
                </li>
                <li>
                    Funções de tipos (“ctype”): isdigit, isalpha, isprint, toupper, etc.;
                </li>
                <li>
                    Tratamento de parâmetros em funções variádicas (“stdarg”): macros
                    va_start, va_arg, etc;
                </li>
                <li>
                    Saltos longos (“setjmp”): setjmp, longjmp.
                </li>
            </ul>


            <p className="espaco-paragrafo">
                Para que as funções do newlib sejam incluídas no arquivo executável,
                deve-se informar ao linker. Como estamos usando o linker (gnu-ld)
                separadamente, precisamos informar a ele o nome (opção -l ) e a localização
                (opção -L ) das bibliotecas. Um exemplo de comando do linker para incluir o
                newlib é:
            </p>

            <img className="center-image" src={biblioteca_c_newlib_1} alt="biblioteca-c-newlib 1" />

            <p className="espaco-paragrafo">
                Esse comando, contudo, vai falhar na maioria das vezes. As funções da
                biblioteca newlib vão em algum momento chamar determinadas funções, que
                correspondem aos “pontos de entrada” de um suposto sistema operacional:
                funções para ler ou escrever dados de arquivos, acessar o hardware do relógio de
                tempo real, alterar a área de memória no heap, etc. Uma vez que não existe um
                sistema operacional, o programador é responsável por fornecer essas funções,
                mesmo que em muitos casos não executem nenhum processamento.
            </p>
            <p className="espaco-paragrafo">

                A tabela a seguir apresenta as funções “stub” que podem ser necessárias
                ao funcionamento do newlib.
            </p>

            <img className="center-image" src={biblioteca_c_newlib_2} alt="biblioteca-c-newlib 2" />

            <p className="espaco-paragrafo">
                O único “stub” que precisa ser implementado de forma não trivial é
                _sbrk(), para que as funções de alocação de memória dinâmica funcionem
                (malloc, realloc, free, etc.). Essa função pode ser bastante simples,
                considerando o linker script que estamos usando, que define o símbolo
                inicio_heap:
            </p>


            <img className="center-image" src={biblioteca_c_newlib_3} alt="biblioteca-c-newlib 3" />

            <p className="espaco-paragrafo">
                A implementação anterior não verifica se existe memória disponível:
                simplesmente movimenta o ponteiro brk para frente ou para trás, conforme a
                quantidade de bytes solicitada (parâmetro incr). À medida que o ponteiro brk se
                move para frente, mais memória é alocada para a heap (que cresce, aproximando-
                se do stack): uma função mais realista precisaria verificar, por exemplo, se houve colisão com o stack e retornar um valor de erro (valor negativo, geralmente -
                ENOMEM).
            </p>

            <p className="espaco-paragrafo">
                Outros “stubs” para a biblioteca newlib que são interessantes para serem
                implementados são _times() - para consultar algum tipo de base de tempo do
                sistema e assim possibilitar o uso das funções de data e hora - e _read() /
                _write() para os arquivos padrão do sistema (“stdin” e “stdout”) para, por
                exemplo, enviar a saída do “terminal” ou “console” através de um canal serial
                (UART ou USB), usando funções de alto nível como printf().
            </p>


            <img className="center-image" src={biblioteca_c_newlib_4} alt="biblioteca-c-newlib 4" />

            <p className="espaco-paragrafo">
                O “stub” _write() é responsável por enviar caracteres pelo canal serial,
                quando o arquivo de destino é “stdout” (“handle” ou “número de arquivo” igual a
                um). Por exemplo, na placa Evaluator-7T, uma função para enviar um caractere
                pela UART 0 poderia ser:
            </p>

            <img className="center-image" src={biblioteca_c_newlib_5} alt="biblioteca-c-newlib 5" />

            <p className="espaco-paragrafo">
                Assim, ao ser executada uma função como
            </p>

            <img className="center-image" src={biblioteca_c_newlib_6} alt="biblioteca-c-newlib 6" />

            <p className="espaco-paragrafo">
                O string formatado é enviado pela UART 0.
            </p>

        </div>
    );
};

export default BibliotecaCNewlib;

