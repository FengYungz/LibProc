import React from 'react';
import '../../../assets/styles/global.css';
import processo_inicializacao_1 from './imgs/processo-inicializacao_1.png';
import Header from "../../../components/Header/index";
import Footer from '../footer';

interface Index{
  index: number;
}

const index:Index = {index:33};

const ProcessoInicializacao = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <h3>
                    Processo de inicialização (boot)
                </h3>

                <p>
                    Os processadores BCM283x possuem um software monitor gravado
                    internamente em memória não volátil, que é permanentemente executado pela
                    GPU (processador Videocore). Ao alimentar a placa, esse software funciona como
                    um bootloader, acessando o cartão SD (memória secundária) em busca da imagem
                    do sistema operacional: uma vez encontrado o sistema operacional, o bootloader o
                    carrega na memória RAM em um endereço fixo, juntamente com o arquivo de
                    descrição do hardware (no formato “device-tree”). Durante todo esse processo, a
                    CPU permanece no estado de reset. Uma vez finalizada a carga do sistema, a CPU
                    é liberada e direcionada a executar a partir do primeiro endereço de memória
                    onde o sistema foi carregado.
                </p>

                <p>
                    Como não é possível interferir nesse processo de inicialização, vamos
                    criar aplicações com o mesmo formato executável que é esperado pelo bootloader
                    e substituir a imagem do sistema operacional por esses arquivos. Assim que
                    exista um programa em execução no Raspberry Pi, poderemos utilizar a interface
                    J-TAG para controlar o processador, e depurar ou carregar outros programas
                    diretamente na memória RAM, evitando a repetição do processo de “boot”.
                </p>

                <p>
                    O cartão SD deve conter pelo menos uma partição inicializável no
                    formato VFAT (Windows 95), contendo os arquivos bootcode.bin,
                    fixup.dat,config.txt, start.elf, além do arquivo executável
                    contendo a aplicação (geralmente nomeado como kernel.img ). O arquivo config.txt
                    vai conter a configuração inicial para o bootloader realizar a
                    carga e a inicialização da aplicação:
                </p>


                <img className="center-image" src={processo_inicializacao_1} alt="processoInicializacao 1" />

                <p>
                    Os arquivos binários executáveis são carregados para a memória byte a
                    byte , portanto devemos traduzi-los do formato ELF para um formato “cru”
                    (“raw”), por exemplo com o utilitário
                    arm-none-eabi-objcpy . O endereço
                    0x8000 é tradicionalmente utilizado para carregar o Linux; esse endereço poderia
                    ser zero, o que simplifica a instalação de um vetor de interrupções. No caso do
                    endereço de carga não ser o zero, será necessário ao programa copiar as
                    primeiras posições de memória (vetor de interrupções) do endereço inicial para
                    o endereço físico zero.
                </p>

                <p>
                    Uma vez carregado na memória, a CPU salta para o primeiro endereço
                    definido para o kernel (0x8000, no nosso exemplo) e passará a executar a nossa
                    aplicação.
                </p>
            </div>
            <Footer {...index} />
        </>
    );
};

export default ProcessoInicializacao;
