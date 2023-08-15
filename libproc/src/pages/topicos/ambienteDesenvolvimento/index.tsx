import React from 'react';
import '../../../assets/styles/global.css';
import ambiente_desenvolvimento_1 from './imgs/ambiente-desenvolvimento_1.png';
import ambiente_desenvolvimento_2 from './imgs/ambiente-desenvolvimento_2.png';
import ambiente_desenvolvimento_3 from './imgs/ambiente-desenvolvimento_3.png';
import Quiz from "../quiz";

interface Question{
  quest: string;
  ans: any;
}

const Question1: Question = {quest: "Identifique as opções de GCC presentes no alvo de compilação de arquivos em C no Makefile e suas funções.", ans: <div><p>As opções de comando gcc presentes no Makefile são -march=, que serve para identificar a arquitetura alvo, no caso armv4;</p><p>-g, que serve para adicionar ao arquivo objeto informações para depuração;</p><p>-c, que é justamente a indicação de que o compilador deve transformar o arquivo .c em um arquivo objeto;</p><p>E por fim, -o, que serve para nomear o arquivo objeto de saída.</p></div>};


const AmbienteDesenvolvimento = () => {
    return (
        <>
            <div className="content-container">
                <h3>Ambiente de desenvolvimento</h3>
                <p className="espaco-paragrafo">

                Além dos programas utilizados anteriormente, vamos agora também
                compilar programas escritos na linguagem C, utilizando o compilador arm-
                none-eabi-gcc. Vamos utilizar o Makefile a seguir, que permite incluir tanto
                fontes em assembler (.s) quanto em C (.c). Você pode acrescentar os demais alvos
                que precisar (“ocd”, “qemu”, “gdb”, etc.), copiando dos Makefiles anteriores.
                </p>

                <p className="espaco-paragrafo">

                <img className="center-image" src={ambiente_desenvolvimento_1} alt="ambienteDesenvolvimento 1" />
                </p>
                <p className="espaco-paragrafo">
                Quando iniciarmos um programa em C a partir da função main()
                precisamos implementar algumas das funções do runtime, por exemplo para
                iniciar a pilha e zerar as variáveis que foram declaradas no segmento BSS.
                Faremos isso no arquivo startup.s:
                </p>

                <p className="espaco-paragrafo">
                <img className="center-image" src={ambiente_desenvolvimento_2} alt="ambienteDesenvolvimento 2" />

                </p>
                <p className="espaco-paragrafo">
                Devemos criar o segmento .bss e vamos alocar espaço para a pilha e o
                heap no nosso linker script (kernel.ld):
                </p>

                <p className="espaco-paragrafo">
                <img className="center-image" src={ambiente_desenvolvimento_3} alt="ambienteDesenvolvimento 3" />
                </p>
                <p className="espaco-paragrafo">
                    Observe que alguns símbolos declarados dentro do linker script são
                    utilizados pela função start em startup.s.
                </p>
                <div>
                <Quiz {...Question1}/>
                </div>

            </div>
        </>
    );
};

export default AmbienteDesenvolvimento;

