import React from 'react';
import '../../../assets/styles/global.css';
import gnu_ld_1 from './imgs/gnu-ld_1.png';
import Header from "../../../components/Header/index";

const GNULD = () => {
    return (
        <>
            <Header />
            <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
                <h3>GNU ld</h3>
                <p className="espaco-paragrafo">
                    <h4>Comando</h4>
                    ld [opções] [arquivos-objeto]
                    <ul className="alinha-item">
                        <li>
                            Prefixo: depende do processador, sistema operacional e ABI desejado
                            (compilação cruzada), por exemplo, arm-none-gnueabi-ld
                        </li>
                        <li>
                            A ordem dos arquivos objeto na linha de comando, incluindo os arquivos
                            de biblioteca, é importante;
                        </li>
                        <li>
                            Opção -o [arquivo-executável] – especifica arquivo de saída;
                        </li>
                        <li>
                            Opção -T [script] – especifica o arquivo com o script para o linker;
                        </li>
                        <li>
                            Opção -l [biblioteca] – inclui funções de uma biblioteca (estática
                            ou dinâmica);
                        </li>
                        <li>
                            Opção -L [diretório] – especifica diretório para procurar as
                            bibliotecas;
                        </li>
                        <li>
                            Opção -M – exibir mapa do linker em stdout. A opção -M=[arquivo]
                            gera o mapa em um arquivo.
                        </li>
                    </ul>
                </p>
                <img className="center-image" src={gnu_ld_1} alt="GNULD 1" />
                <p className="espaco-paragrafo">
                    <ul className="alinha-item">
                        <li>
                            A sintaxe dos scripts é semelhante àquela do assembler;
                        </li>
                        <li>
                            Os scripts padrão estão em /lib/[arquitetura]/ldscripts
                        </li>

                    </ul>
                </p>


                <h4>objdump</h4>objdump
                <p className="espaco-paragrafo">
                    <ul className="alinha-item">
                        <li>
                            Opção -d – mostrar o código assembler;
                        </li>
                        <li>
                            Opção -f – cabeçalho de arquivo (formato ELF);
                        </li>
                        <li>
                            Opção -g – informações para o depurador;
                        </li>
                        <li>
                            Opção -h – cabeçalhos das seções;
                        </li>
                        <li>
                            Opção -t – listar símbolos;
                        </li>
                        <li>
                            Opção -T – listar símbolos dinâmicos;
                        </li>
                        <li>
                            Opção -r – informação sobre realocação.
                        </li>
                    </ul>
                </p>
            </div>
        </>
    );
};

export default GNULD;
