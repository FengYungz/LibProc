import React from 'react';
import '../../../assets/styles/global.css';
import raspberry_pi_1 from './imgs/raspberry-pi_1.png';
import Header from "../../../components/Header/index";

const RaspberryPi = () => {
    return (
        <>
            <Header />
            <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
                <h3>
                    Raspberry Pi
                </h3>

                <p>
                    Em 2009 foi fundada no Reino Unido a Raspberry Pi Foundation, uma
                    organização sem fins lucrativos que, à semelhança da iniciativa do “BBC-Micro”
                    na década de 80, tem por objetivo a promoção do estudo de Ciência básica da
                    Computação nas escolas. Uma das metas é colocar os estudantes novamente em
                    contato com o “hardware” – manuseando placas e componentes eletrônicos,
                    como acontecia nas décadas de 80 e 90, com os computadores que também
                    tinham nomes de frutas.
                </p>

                <p>
                    Os “raspberry pi” são computadores de placa única (single board computer
                    ou SBC) de baixo custo baseados em unidades de processamento altamente
                    integradas (SoC), produzidas pela Broadcom com exclusividade para a Raspberry
                    Pi Foundation.
                </p>


                <img className="center-image" src={raspberry_pi_1} alt="raspberryPi 1" />

                <p>
                    As placas possuem as funcionalidades de um computador pessoal,
                    incluindo saídas para monitor (HDMI), áudio e vídeo analógicos e entrada para
                    câmera (CSI); também incluem conectividade USB e ethernet (algumas placas
                    possuem wifi e Bluetooth). Sua memória DRAM é embutida na placa e não pode ser
                    expandida; a memória secundária é implementada por um cartão SD (que
                    substitui o “hard-disk” do computador).
                </p>

                <p>
                    O SoC inclui os núcleos de arquitetura ARM, um processador vetorial
                    gráfico (Videocore da Broadcom) e diversos periféricos integrados: interface
                    HDMI, aceleradores de compressão/descompressão de mídia, CODECs, interface
                    de áudio I2S e PCM, controlador de interface USB, controlador de DMA (com 15
                    canais), interfaces seriais (SDIO, UART, SPI e I2C) e gerenciamento de I/O (54
                    pinos “GPIO” configuráveis). As interfaces de rede são implementadas por
                    componentes adicionais nas placas, externamente ao SoC: ethernet (transceiver
                    controlado via USB), wifi (transceiver controlado via SDIO) e bluetooth (transceiver
                    controlado via serial UART).
                </p>

                <p>
                    As placas Raspberry Pi normalmente executam o sistema operacional
                    Linux e podem instalar software proveniente de repositórios convencionais
                    (debian, ubuntu, gentoo, etc.). No laboratório, não iremos utilizar o Linux, mas
                    vamos executar as aplicações diretamente sobre o hardware (“bare metal”).
                </p>
            </div>
        </>
    );
};

export default RaspberryPi;
