import React from 'react';
import salto_thumb_1 from './imgs/salto-thumb_1.png';
import salto_thumb_2 from './imgs/salto-thumb_2.png';
import '../../../assets/styles/global.css';

const InstrucoesSaltoThumb = () => {
    return (
        <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
            <h3>Instruções de salto</h3>
            <p className="espaco-paragrafo">
                Existem seis tipos de instruções thumb para a realização de saltos, que
                também implicam distâncias máximas diferentes até o endereço de destino:
                <ul className="alinha-item">
                    <li>
                        Saltos condicionais de curto alcance (no máximo 256 bytes para frente ou
                        para trás): instruções beq, bne, bgt, etc.;
                    </li>
                    <li>
                        Saltos incondicionais de “médio” alcance (no máximo 2 kiB para frente ou
                        para trás): instrução b;
                    </li>
                    <li>
                        Chamadas de sub-rotina de “longo” alcance (no máximo 4 MiB para frente
                        ou para trás). Para que esse alcance “longo” seja conseguido, é utilizada
                        uma sequência de duas instruções thumb, ou seja, ocupando 32 bits no
                        total: instrução bl;
                    </li>
                    <li>
                        Saltos com eventual mudança de conjunto de instrução, baseados em
                        registrador (qualquer posição da memória): bx e blx;
                    </li>
                    <li>
                        Interrupção de software (swi) para endereço fixo (0x08), mudando o
                        conjunto de instruções para “arm”;
                    </li>
                    <li>
                        Saltos baseados na instrução mov, a partir do valor de outro registrador
                        (qualquer posição da memória).
                    </li>
                </ul>
                <p className="espaco-paragrafo">
                </p>
                A tabela a seguir mostra os formatos das instruções de salto:
            </p>
            <img className="center-image" src={salto_thumb_1} alt="SaltoThumb 1" />
            <p className="espaco-paragrafo">
                O offset para as instruções de salto pode ter oito bits (saltos condicionais),
                onze bits (saltos incondicionais) ou vinte e dois bits (sub-rotinas), sempre com
                sinal; esse valor de offset é multiplicado por dois (as instruções thumb têm 16 bits)
                para o cálculo do endereço efetivo do salto.
            </p>
            <p className="espaco-paragrafo">
                A instrução bl (branch and link) precisa de duas instruções thumb
                consecutivas, a primeira com o bit “H” igual a “zero” e a segunda com o bit “H”
                igual a “um”. O registrador r14 (link register) é utilizado como rascunho para
                montar o offset para o contador de programa: na primeira instrução (H=0), o
                registrador r14 armazena os doze bits mais significativos do destino; a segunda
                instrução (H=1) atualiza r14 com os doze bits menos significativos e esse valor é
                então somado a r15.
            </p>
            <p className="espaco-paragrafo">
                A instrução bx (branch and exchange) carrega o contador do programa com
                o valor de qualquer outro registrador. Como o campo “Rm” possui apenas três
                bits, o bit “H” é usado para definir o bit mais significativo do índice do registrador: “zero” para os registradores “lo” (r0-r7) e “um” para os
                registradores “hi” (r8-r15). O conjunto de instruções, após a execução do salto, é
                definido pelo bit menos significativo do endereço de destino: se for “um”
                (endereço desalinhado), o modo continua sendo thumb; se for “zero” (endereço
                alinhado), o conjunto de instruções muda para ARM.
            </p>
            <p className="espaco-paragrafo">
                Os saltos condicionais são as únicas instruções thumb que verificam o
                estado dos flags “N”, “V”, “C” e “Z” do registrador cpsr. O campo de condição na
                instrução segue o mesmo padrão das condições das instruções do conjunto
                “arm”:
            </p>
            <img className="center-image" src={salto_thumb_2} alt="SaltoThumb 2" />
        </div>
    );
};

export default InstrucoesSaltoThumb;
