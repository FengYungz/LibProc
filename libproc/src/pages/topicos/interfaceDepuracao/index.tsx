import React from 'react';
import '../../../assets/styles/global.css';
import interface_depuracao_1 from './imgs/interface-depuracao_1.png';
import interface_depuracao_2 from './imgs/interface-depuracao_2.png';

const InterfaceDepuracao = () => {
    return (
        <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
            <h3>
                Interfaces de depuração
            </h3>

            <p>
                Vamos utilizar as interfaces J-TAG e UART para interagir com as
                aplicações ARM que criarmos. Alguns dos pinos do conector de expansão são
                usados para interligar a placa Raspberry Pi ao computador hospedeiro através
                dessas interfaces, conforme a figura a seguir.
            </p>

            <img className="center-image" src={interface_depuracao_1} alt="interfaceDepuracao 1" />
            <p>
                Observe que todos os sinais presentes no conector de expansão são de
                nível elétrico 3.3 V e a placa pode ser danificada caso tensões mais altas
                apareçam nos pinos.
            </p>

            <p>
                Para acessar a interface J-TAG vamos empregar o software OpenOCD, com
                um arquivo de configuração específico para a versão correta do Raspberry Pi e da
                interface (ou “transporte”) a utilizar (placa Segger J-Link). Para acessar a
                interface UART usaremos um conversor USB/Serial e qualquer software de
                emulação de terminal (por exemplo, screen).
            </p>

            <img className="center-image" src={interface_depuracao_2} alt="interfaceDepuracao 2" />

            <p>
                A interface de depuração com o gdb suporta conexões com os quatro
                núcleos independentemente. O primeiro núcleo responde na porta “3333”, o
                segundo na porta “3334” e assim por diante.
            </p>

        </div>
    );
};

export default InterfaceDepuracao;