import React from 'react';
import '../../../assets/styles/global.css';
import interface_usuario_1 from './imgs/interface-usuario_1.png';
import interface_usuario_2 from './imgs/interface-usuario_2.png';

const ControleInterfaceUsuario = () => {
    return (
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
        </div>
    );
};

export default ControleInterfaceUsuario;

