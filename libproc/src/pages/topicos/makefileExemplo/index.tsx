import React from 'react';
import '../../../assets/styles/global.css';
import makefile_exemplo_1 from './imgs/makefile-exemplo_1.png';
import Header from "../../../components/Header/index";

const MakefileExemplo = () => {
    return (
        <>
            <Header />
            <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
                <h3>Makefile Exemplo</h3>
                
                <p>
                    Para acessar a interface J-TAG vamos empregar o software OpenOCD, com
                    um arquivo de configuração específico para a versão correta do Raspberry Pi e da
                    interface (ou “transporte”) a utilizar (placa Segger J-Link). Para acessar a
                    interface UART usaremos um conversor USB/Serial e qualquer software de
                    emulação de terminal (por exemplo, screen).
                </p>

                <img className="center-image" src={makefile_exemplo_1} alt="makefileExemplo 1" />

                <p>
                    A interface de depuração com o gdb suporta conexões com os quatro
                    núcleos independentemente. O primeiro núcleo responde na porta “3333”, o
                    segundo na porta “3334” e assim por diante.
                </p>
            </div>
        </>
    );
};

export default MakefileExemplo;
