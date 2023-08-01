import React from 'react';
import '../../../assets/styles/global.css';
import assembler_1 from './imgs/assembler_1.png';
import assembler_2 from './imgs/assembler_2.png';
import assembler_3 from './imgs/assembler_3.png';

const AssemblerGNU = () => {
    return (
        <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
            <h3>GNU assembler (as)</h3>
            <p className="espaco-paragrafo">
                O formato geral do comando do assembler é

            </p>
            <img className="center-image" src={assembler_1} alt="Assembler 1" />
            <p className="espaco-paragrafo">
                Quando se utiliza a compilação cruzada, é introduzido o prefixo
                correspondente à arquitetura, sistema operacional e ABI do sistema alvo, por
                exemplo arm-none-gnueabi-as.
            </p>
            <p className="espaco-paragrafo">
                Um ou mais arquivos-fonte devem ser especificados na linha de comando
                e serão processados em ordem. Os arquivos-fonte são arquivos texto com a
                extensão .s , .src , .a ou .asm , sendo recomendada a extensão .s .
            </p>
            <p className="espaco-paragrafo">
                O montador vai produzir como resultado um arquivo objeto binário
                realocável, que normalmente é processado pelo vinculador (“linker”). O nome do
                arquivo objeto pode ser especificado com a opção -o; caso essa opção não
                esteja presente, será gerado um arquivo de nome “a.out”. O assembler pode gerar
                também um arquivo texto contendo a listagem (opção -a), que pode ser
                bastante útil durante o processo de desenvolvimento.
            </p>
            <p className="espaco-paragrafo">
                Normalmente, o assembler não inclui informações para depuração
                (descrição dos símbolos, números de linha, etc.) no arquivo objeto produzido;
                essas informações são utilizadas, por exemplo, por depuradores e analisadores de
                código. Durante o processo de desenvolvimento é interessante incluir a opção -g
                na linha de comando para que essas informações sejam incluídas.
            </p>
            <img className="center-image" src={assembler_2} alt="Assembler 2" />

            <h3>  Formato dos arquivos-fonte
            </h3>
            <p className="espaco-paragrafo">
                Os arquivos-fonte do assembler contém mnemônicos de instruções e
                pseudo-instruções do processador alvo, nomes de registradores, diretivas,
                símbolos, expressões, comentários e informações para uso do linker. Um arquivo-
                fonte pode incluir outros arquivos com a diretiva
                .include e pode conter
                macros que são automaticamente expandidas durante o processo de montagem.
            </p>
            <p className="espaco-paragrafo">
                Vários estilos de comentários são suportados pelo gnu-as:
            </p>

            <img className="center-image" src={assembler_3} alt="Assembler 3" />
        </div >
    );
};

export default AssemblerGNU;
