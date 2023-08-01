import React from 'react';
import '../../../assets/styles/global.css';
import atributos_funcao_1 from './imgs/atributos-funcao_1.png';
import atributos_funcao_2 from './imgs/atributos-funcao_2.png';
import atributos_funcao_3 from './imgs/atributos-funcao_3.png';

const AtributosFuncaoGCC = () => {
    return (
        <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
            <h3>Atributos de função no GCC</h3>
            <p className="espaco-paragrafo">
                O compilador C do GCC permite marcar funções com atributos especiais,
                que permitem maior controle sobre o prólogo e epílogo. Os atributos são
                definidos com uma notação especial (não portável):
            </p>

            <img className="center-image" src={atributos_funcao_1} alt="atributos-funcao 1" />

            <img className="center-image" src={atributos_funcao_2} alt="atributos-funcao 2" />

            <p className="espaco-paragrafo">
                Por exemplo, o código a seguir define a função timer() como um serviço
                de interrupção para o evento “IRQ”. Veja que não são recebidos parâmetros,
                todos os registradores usados são salvos e a instrução de retorno é diferente:
            </p>

            <img className="center-image" src={atributos_funcao_3} alt="atributos-funcao 3" />
        </div>
    );
};

export default AtributosFuncaoGCC;

