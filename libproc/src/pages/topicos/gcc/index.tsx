import React from 'react';
import '../../../assets/styles/global.css';
import gcc_1 from './imgs/gcc_1.png';
import gcc_2 from './imgs/gcc_2.png';
import Header from "../../../components/Header/index";

const GNUCompiler = () => {
    return (
        <>
            <Header />
            <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
                <h3>GNU C Compiler (gcc)</h3>
                <p className="espaco-paragrafo">
                    O formato geral do comando do compilador C é
                </p>

                <img className="center-image" src={gcc_1} alt="gcc 1" />

                <p className="espaco-paragrafo">
                    Quando se utiliza a compilação cruzada, é introduzido o prefixo
                    correspondente à arquitetura, sistema operacional e ABI do sistema alvo, por
                    exemplo arm-none-gnueabi-gcc.
                </p>

                <p className="espaco-paragrafo">
                    Um ou mais arquivos-fonte devem ser especificados na linha de comando
                    e serão processados em ordem. O programa gcc reconhece arquivos em C ( .c ,
                    .i ), arquivos em assembler ( .s ) e arquivos objeto binários realocáveis
                    ( .o ,
                    .a ). Os arquivos contendo código-fonte na linguagem C são
                    processados diretamente pelo gcc (eventualmente envolvendo o
                    preprocessador, cpp); arquivos em assembler são tratados pelo programa as e os
                    arquivos objeto diretamente pelo programa ld. Esses programas são chamados
                    automaticamente pelo compilador, conforme a necessidade.
                </p>
                <p className="espaco-paragrafo">
                    A saída do compilador depende das opções especificadas na linha de
                    comando:
                </p>

                <ul className="alinha-item">
                    <li>
                        No caso de nenhuma opção de formato de saída esteja presente, o
                        compilador vai executar o linker e produzir um arquivo executável único;
                        se o nome para o arquivo de saída não tiver sido especificado, através da
                        opção -o, o compilador vai gerar um arquivo com o nome
                        a.out (a
                        “saída do assembler”);
                    </li>
                    <li>
                        Caso a opção -S esteja presente, o compilador vai produzir um arquivo
                        texto com a tradução no programa em assembler ( .s ), sem chamar o
                        gnu-as. Se não for especificado um nome para o arquivo de saída, o
                        arquivo produzido terá o mesmo nome que o arquivo-fonte, com a
                        extensão .s ;
                    </li>
                    <li>
                        Caso a opção -c esteja presente, o compilador vai produzir um arquivo
                        objeto realocável ( .o ) para ser posteriormente vinculado a uma
                        biblioteca ou a um arquivo executável pelo linker. Se não for especificado
                        um nome para o arquivo de saída, o arquivo produzido terá o mesmo
                        nome que o arquivo-fonte, com a extensão .o .
                    </li>
                </ul>

                <p className="espaco-paragrafo">
                    Normalmente, informações de depuração (descrição dos símbolos,
                    números de linha, etc.) não são incluídas nos arquivos produzidos; essas
                    informações são utilizadas, por exemplo, por depuradores e analisadores de
                    código. Utilize a opção -g na linha de comando para que essas informações
                    sejam incluídas.
                </p>

                <img className="center-image" src={gcc_2} alt="gcc 2" />
            </div>
        </>
    );
};

export default GNUCompiler;

