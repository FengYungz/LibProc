import React from 'react';
import salto_1 from './imgs/salto_1.png';
import '../../../assets/styles/global.css';
import Quiz from '../quiz';
import Header from "../../../components/Header/index";
import Footer from '../footer';

interface Index{
  index: number;
}

const index:Index = {index:2};

interface Question{
  quest: string;
  ans: any;
}

const Question1: Question = {quest: "Como se poderia saltar para um endereço da memória que não esteja ao alcance dos 32 MiB ao redor do endereço em r15?", ans: <div><p>É possível realizar saltos maiores do que o limite de PC +/- 32MiB através da atribuição de valores direto ao registrador R15(PC) com uma instrução 'MOV PC, R1', por exemplo, no qual R1 possui um valor para o qual se deseja pular.</p><p>Que ter uma visão mais aprofundada sobre o assunto? Consulte a discussão <a href="https://www.wise-ware.com.br/pcs3732/d/15-saltos-longos"> Saltos Longos</a> no fórum da disciplina.</p></div>};


const InstrucoesSalto = () => {
  return (
    <>
      <Header />
      <div className="content-container">
        <h3>Instruções de Salto</h3>
        <p>
          As instruções de salto alteram o valor do contador de programa (R15),
          modificando, portanto, o fluxo de execução do programa. Os saltos podem ou não
          armazenar o endereço de retorno (instrução “branch and link” ou bl): neste caso,
          o valor do registrador R15 é copiado no registrador R14 (link register) antes de sua
          atualização. Dessa forma, a sub-rotina chamada pode posteriormente retornar ao
          programa chamador.</p>
          <p className="espaco-paragrafo">Normalmente, a execução de um salto provoca o esvaziamento do pipeline;
          a partir da versão 4, a arquitetura ARM inclui algoritmos para previsão de
          desvios. O formato das instruções de salto é apresentado a seguir:
        </p>
        <img className="center-image" src={salto_1} alt="Salto 1" />
        <p className="espaco-paragrafo"></p>
        <p>
          O campo de código de condição é o mesmo descrito na seção anterior.</p>
          <p>Saltos incondicionais devem ter o campo de condição igual a “1110”. O valor do bit
          “L” (bit 24) define se o endereço de retorno deve ser salvo (instrução branch and
          link: bl) ou não (instrução branch: b).Saltos condicionais
          e incondicionais</p>
          <p className="espaco-paragrafo">Os saltos executados pelas instruções b e bl são sempre relativos: o
          endereço de destino do salto é calculado a partir da posição atual do contador de
          programa. Para determinar o endereço de destino, o valor do offset contido na
          instrução é multiplicado por quatro e somado ao valor corrente do registrador
          R15. Como o campo de offset possui 24 bits com sinal, até 32 Mi posições de
          memória para frente (offset positivo) e para trás (offset negativo) do contador de
          programa podem ser alvo de um salto.
        </p>
        <div>
          <Quiz {...Question1}/>
        </div>
      </div>
      <Footer {...index}/>
    </>
  );
};

export default InstrucoesSalto;
