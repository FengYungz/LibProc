import React from 'react';
import '../../../assets/styles/global.css';

const Perifericos = () => {
    return (
        <div className="font-roboto-condensed" style={{ lineHeight: '1.5' }}>
            <h3>
                Periféricos
            </h3>

            <p>
                Os periféricos do SoC são configurados e controlados por “registradores”
                que são mapeados na memória do sistema. O endereço inicial na memória física a
                partir do qual os registradores de configuração dos periféricos são mapeados é
                denominado PERIPH_BASE e seu valor depende do modelo:

            </p>

            <p>
                <ul className="alinha-item">
                    <li> PERIPH_BASE é 0x3f000000 no Raspberry Pi modelos 2 e 3.
                    </li>
                    <li> PERIPH_BASE é 0x20000000 no Raspberry Pi modelos 0 e 1.
                    </li>
                </ul>
            </p>

        </div>
    );
};

export default Perifericos;
