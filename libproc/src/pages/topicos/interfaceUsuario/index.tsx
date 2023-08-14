import React from 'react';
import '../../../assets/styles/global.css';
import interface_usuario_1 from './imgs/interface-usuario_1.png';
import interface_usuario_2 from './imgs/interface-usuario_2.png';
import Quiz from "../quiz";
import Header from "../../../components/Header/index";

interface Question{
  quest: string;
  ans: any;
}

const Question1: Question = {quest: "Defina o que fazem os comandos \'break f1+5\', \'continue 10\', \'p/t $cpsr\', \'p/x i\' e \'x/100bx 0x8000\'.", ans: <div><p>break f1+5: Define um ponto de interrupção (breakpoint) 5 linhas após o início da função "f1".</p><p>continue 10: Continua a execução do programa por 10 interrupções (breakpoints), e em seguida para. Se não fosse especificado o número, continuaria até a próxima interrupção, ou até pressionar Ctrl+C.</p><p>p/t $cpsr: Imprime o valor (p) presente no registrador CPSR, no formato binário (t).</p><p>p/x i: Imprime o valor (p) da variável "i" no formato hexadecimal (x).</p><p>x/100bx 0x8000: Imprime (x) os próximos 100 bytes de memória (100b) no formato hexadecimal (x) a partir do endereço 0x8000.</p><p>Para explicações maiores e mais exemplos de comandos do gdb consulte a <a href="https://www.wise-ware.com.br/pcs3732/d/156-questoes-em-sala/13">resposta à questão 25</a> no fórum.</p></div>};


const ControleInterfaceUsuario = () => {
    return (
        <>
            <Header />
            <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
                <h3>Controle da interface do usuário</h3>
                <p className="espaco-paragrafo">
                    <h4>Layout</h4>
                    <p className="espaco-paragrafo">O programa gdb pode exibir várias informações simultaneamente,
                        dependendo do suporte do terminal utilizado pelo usuário. Caso o terminal
                        permita, informações do depurador podem ser exibidas em diferentes “janelas”
                        no mesmo terminal.</p>
                    <ul className="alinha-item">
                        <li>
                            O comando “layout” permite definir o modelo de exibição do estado do
                            depurador ao usuário:
                            <li>
                                “layout src” – mostra o código-fonte juntamente com a linha de
                                comando do depurador;
                            </li>
                            <li>
                                “layout asm” – mostra o programa executável em assembler
                                juntamente com a linha de comando do depurador;
                            </li>
                            <li>
                                “layout regs” – mostra o contexto do processador (registradores).
                            </li>
                        </li>
                    </ul>
                </p>
                <img className="center-image" src={interface_usuario_1} alt="interfaceUsuario 1" />
                <img className="center-image" src={interface_usuario_2} alt="interfaceUsuario 2" />
                <p className="espaco-paragrafo"></p>
                <div>
                <Quiz {...Question1}/>
                </div>
            </div>
        </>
    );
};

export default ControleInterfaceUsuario;

