import React from 'react';
import '../../../assets/styles/global.css';
import ambiente_gnu_1 from './imgs/ambiente-gnu_1.png';
import ambiente_gnu_2 from './imgs/ambiente-gnu_2.png';
import ambiente_gnu_3 from './imgs/ambiente-gnu_3.png';
import ambiente_gnu_4 from './imgs/ambiente-gnu_4.png';
import ambiente_gnu_5 from './imgs/ambiente-gnu_5.png';
import ambiente_gnu_6 from './imgs/ambiente-gnu_6.png';

const AmbienteGNU = () => {
    return (
        <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
            <h3>
                Instalação do ambiente de desenvolvimento
            </h3>
            <p className="espaco-paragrafo">
                Os pacotes de software que vamos utilizar são:
                <ul className="alinha-item">
                    <li>
                        binutils-arm-none-eabi
                    </li>
                    <li>
                        gcc-arm-none-eabi
                    </li>
                    <li>
                        gdb-multiarch
                    </li>
                    <li>
                        qemu-system-arm
                    </li>
                    <li>
                        make
                    </li>
                </ul>
            </p>
            <img className="center-image" src={ambiente_gnu_1} alt="AmbienteGNU 1" />
            <p className="espaco-paragrafo">
                Os softwares estão previamente instalados nos computadores do
                laboratório. Para instalá-los em seu computador, normalmente basta usar a
                ferramenta de instalação (apt no caso do Debian e do Ubuntu, pacman no
                ArchLinux, etc.), uma vez que a maioria dos repositórios já inclui essas
                ferramentas previamente compiladas para instalação. Esses são os nomes dos
                pacotes no repositório Debian, pode ser que em outras distribuições eles tenham
                outros nomes.
            </p>
            <h3>O ambiente de desenvolvimento GNU</h3>
            <p className="espaco-paragrafo">
                O projeto “GNU” – que é a abreviação recursiva de “Gnu is Not Unix” –
                começou na década de 80 com o trabalho de Richard Stallman: seu objetivo era a
                criação de um Sistema Operacional completo, totalmente gratuito e sem
                nenhuma restrição de uso (free-software e open-source), baseado no Unix. Já que o
                próprio nome “Unix” era disputado como marca registrada, o sistema
                operacional foi chamado sarcasticamente de “not Unix”.
            </p>
            <p className="espaco-paragrafo">
                Um dos primeiros impasses para o novo sistema viria a ser o seu próprio
                ambiente de desenvolvimento: não fazia sentido usar montadores, compiladores
                e vinculadores (linkers) comerciais – cuja licença era fechada – para o
                desenvolvimento de um software aberto. Qualquer usuário que pretendesse
                reconstruir o sistema a partir de seu código-fonte precisaria adquirir legalmente
                uma licença desses softwares, o que violaria diretamente a filosofia original.
            </p>
            <p className="espaco-paragrafo">
                Sendo assim, Stallman e sua equipe começaram a desenvolver suas
                próprias ferramentas, entre as quais um montador (as), vinculador (ld),
                arquivador (ar), compilador C e suas respectivas bibliotecas (gcc), depurador
                (gdb) e até um editor de texto (emacs). Hoje em dia essas ferramentas já foram
                adaptadas para praticamente todas as arquiteturas e sistemas operacionais,
                permitem compilar diversas linguagens de alto nível (de fato, “gcc” passou a ser
                a abreviatura de “gnu compiler collection”) e foram utilizadas para o
                desenvolvimento de vários sistemas operacionais, entre eles o FreeBSD, Darwin
                (MacOS), Linux além, é claro, do próprio Hurd (que é o núcleo do sistema
                operacional Gnu).
            </p>
            <p className="espaco-paragrafo">
                De um modo geral, esses softwares produzem e analisam código para a
                mesma arquitetura que os estão executando: em um computador AMD-64 vão
                gerar e analisar instruções características do conjunto de instruções dessa
                arquitetura. No entanto, a linguagem de máquina de destino é arbitrária e
                poderia, eventualmente, corresponder a uma arquitetura diferente da arquitetura
                da máquina que executa esses programas: vamos chamar a máquina que executa
                o ambiente de desenvolvimento de hospedeira (“host”) e a máquina que executará
                as instruções produzidas de alvo (“target”). No caso em que as arquiteturas
                hospedeira e alvo são a mesma, esse processo é chamado de desenvolvimento
                nativo; quando são arquiteturas diferentes, chamaremos de desenvolvimento
                cruzado.
            </p>
            <p className="espaco-paragrafo">
                No caso particular do gcc e programas associados, desenvolvimentos
                cruzados são sempre tornados explícitos por uma nomenclatura especial dos
                aplicativos: o seu prefixo. Assim, o programa chamado “as” sempre produz
                código para a mesma arquitetura da máquina hospedeira (assembly nativo); um
                programa (diferente), cujo nome será algo como “mips-linux-gnueabi-as”,
                vai produzir código para ser executado por uma arquitetura MIPS. A parte
                “mips-linux-gnueabi-” é chamada de prefixo e sempre vai identificar a produção
                de código para uma arquitetura diferente da arquitetura da máquina hospedeira.
            </p>
            <h3>
                O Emulador de Arquiteturas (QEMU)
            </h3>
            <p className="espaco-paragrafo">
                O software Quick Emulator ou QEMU foi desenvolvido como software livre
                por Fabrice Bellard6. Sua principal função é imitar ou emular a execução de
                instruções de diferentes processadores, independentemente da máquina que o
                executa (denominada máquina hospedeira ou host), através de tradução binária:
                processo no qual uma ou mais instruções de máquina do computador hospedeiro
                são usadas para produzir um efeito equivalente ao da execução de uma instrução
                de uma arquitetura diferente (ou eventualmente da mesma arquitetura, mas em
                uma máquina virtual independente). O Quick Emulator também é utilizado para a
                criação de máquinas virtuais, emulando o funcionamento de um hardware
                eventualmente diferente do equipamento real.

            </p>
            <p className="espaco-paragrafo">
                De forma equivalente ao objetivo dos prefixos do Gnu, são os sufixos que
                identificam a arquitetura emulada por QEMU. Por exemplo, o programa de nome
                “qemu-arm” vai emular a execução de código que deve conter instruções do
                processador ARM, mesmo que a máquina local não tenha um processador
                compatível. Entre as arquiteturas que podem ser emuladas pelo qemu estão Intel
                x86, AMD-64, ARM, ARM-64, MIPS, MIPS-64, PowerPC, Sparc, e várias outras.
            </p>
            <p className="espaco-paragrafo">
                O modelo geral de desenvolvimento que vamos utilizar inicialmente
                envolve compilar ou montar programas contendo instruções do processador
                ARM usando o ambiente de desenvolvimento cruzado (arm-none-gnueabi-
                gcc) e executá-los nos computadores de arquitetura Intel com o emulador qemu
                (qemu-system-arm); vamos observar o comportamento da execução emulada
                através do depurador Gnu, gdb (gdb-multiarch). Para isso, os processos do
                emulador qemu e do depurador vão se conectar por um socket: comandos podem
                ser enviados do depurador para o emulador, que serão respondidos,
                eventualmente interrompendo a execução do programa emulado para a análise
                dos valores dos registradores, memória, etc.
            </p>
            <p className="espaco-paragrafo">
                O emulador qemu-system-arm cria uma máquina virtual com recursos
                de hardware que podem ser definidos na sua linha de comando. No nosso caso,
                precisamos apenas de um mínimo de recursos.
            </p>
            <p className="espaco-paragrafo">
                No exemplo a seguir, criamos uma máquina virtual genérica (tipo “virt” com a opção
                -M ) e carregamos o código objeto do arquivo kernel.elf
                (como se fosse o Sistema Operacional). A opção -s permite ativar a depuração
                através da porta tcp/ip 1234, com a qual podemos conectar com o depurador
                (gdb), o que fizemos através do comando target extended-remote :
            </p>
            <img className="center-image" src={ambiente_gnu_2} alt="AmbienteGNU 2" />
            <p className="espaco-paragrafo">
                Você pode usar um
                Makefile
                como o seguinte para automatizar o
                processo de desenvolvimento:
            </p>
            <img className="center-image" src={ambiente_gnu_3} alt="AmbienteGNU 3" />
            <p className="espaco-paragrafo">
                O linker precisa do arquivo kernel.ld (“linker script”, usando a opção
                -T ) para especificar o mapa de memória da máquina virtual. A máquina “virt” é bastante simples, e para nós só interessa que a memória RAM começa no
                endereço 0x40000000. O arquivo kernel.ld pode ser, simplesmente:
            </p>
            <img className="center-image" src={ambiente_gnu_4} alt="AmbienteGNU 4" />
            <p className="espaco-paragrafo">
                Com o Makefile anterior, você pode executar os alvos:
                <ul className="alinha-item">
                    <li>
                        make – monta os fontes com o gnu-as e gera o arquivo binário
                        executável de saída (kernel.elf, no exemplo) com o gnu-ld. Gera
                        também um arquivo de mapa do linker (kernel.map);
                    </li>
                    <li>
                        make qemu – monta o executável de saída e carrega kernel.elf com
                        a máquina virtual qemu (caso ainda não esteja em execução)
                    </li>
                    <li>
                        make gdb – monta o executável de saída e executa o gdb junto com os
                        comandos “set architecture” e “target” (a máquina virtual qemu precisa
                        estar em execução), recarregando kernel.elf;
                    </li>
                    <li>
                        make clean – apaga todos os arquivos intermediários (para forçar a
                        remontagem do zero).
                    </li>
                </ul>
            </p>
            <h4>
                Um exemplo completo
            </h4>
            <p className="espaco-paragrafo">
                Use o arquivo fonte seguinte, no mesmo diretório do Makefile e do
                kernel.ld. Altere a primeira linha do Makefile para incluir o nome do arquivo
                (teste.s).
            </p>
            <img className="center-image" src={ambiente_gnu_5} alt="AmbienteGNU 5" />
            <p className="espaco-paragrafo">
                Ao executar os comandos com o make, você deve obter algo do tipo:
            </p>
            <img className="center-image" src={ambiente_gnu_6} alt="AmbienteGNU 6" />
        </div>
    );
};

export default AmbienteGNU;
