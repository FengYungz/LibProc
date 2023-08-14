import React from 'react';
import '../../../assets/styles/global.css';
import runtime_gcc_1 from './imgs/runtime-gcc_1.png';
import Header from "../../../components/Header/index";

const RuntimeGCC = () => {
    return (
        <>
            <Header />
            <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
                <h3>O runtime do gcc</h3>
                <p className="espaco-paragrafo">
                    As funções do runtime do gcc estão definidas no arquivo
                    libgcc.a ,
                    que é instalado juntamente com o compilador. Como estamos usando o linker
                    (gnu-ld) separadamente, precisamos informar a ele o nome (opção
                    -l ) e a localização (opção -L ) dessa biblioteca. A biblioteca libgcc.a normalmente é
                    instalada no diretório /usr/lib/gcc/arm-none-eabi/&lt; versão do gcc &gt;.
                </p>
                <p className="espaco-paragrafo">
                    Um exemplo de comando do linker para incluir o runtime é:
                </p>

                <img className="center-image" src={runtime_gcc_1} alt="runTimeGCC 1" />
            </div>
        </>
    );
};

export default RuntimeGCC;

