import React from 'react';
import '../../../assets/styles/global.css';
import runtime_gcc_1 from './imgs/runtime-gcc_1.png';
import runtime_gcc_quest from './imgs/runtimeGccQuest.png';
import Header from "../../../components/Header/index";
import Quiz from "../quiz";
import styled from 'styled-components';

const QuestImg = styled.img`
  max-width: 50%;
  height: auto;
  display: block;
  margin: 0 auto;
  `;

interface Question{
  quest: any;
  ans: any;
}

const Question1: Question = {quest: <div><p>Explique o código da imagem:</p><QuestImg src={runtime_gcc_quest} alt="asmCode"/></div>, ans: <div><p>O código em C define uma função em assembly que faz as seguintes operações:</p><p>c = a-b (subs %0,%1,%2)</p><p>if(c {'<'} 0): c = -c (rsbmi %0,%0,#0)</p><p>A variável c é também a variável de retorno, portanto deve estar associada a um registrador possível de alterar (=r).</p><p>O último parâmetro cc é passado como um clobber apenas para indicar que o código assembly pode alterar as flags do condicional.</p><p>Para uma explicação mais detalhada, confira a resolução da <a href="https://www.wise-ware.com.br/pcs3732/d/156-questoes-em-sala/39">Questão 18</a> no fórum da disciplina.</p></div>};


const RuntimeGCC = () => {
    return (
        <>
            <Header />
            <div className="content-container">
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
                <p className="espaco-paragrafo"></p>
                <div>
                <Quiz {...Question1}/>
                </div>
            </div>
        </>
    );
};

export default RuntimeGCC;

