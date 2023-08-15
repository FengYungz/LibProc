import React from 'react';
import '../../../assets/styles/global.css';
import interface_depuracao_1 from './imgs/interface-depuracao_1.png';
import Header from "../../../components/Header/index";
import Footer from '../footer';

interface Index{
  index: number;
}

const index:Index = {index:34};

const InterfaceDepuracao = () => {
    return (
        <>
            <Header />
            <div className="content-container">
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
            </div>
            <Footer {...index} />
        </>
    );
};

export default InterfaceDepuracao;
