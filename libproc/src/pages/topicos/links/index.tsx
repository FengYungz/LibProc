import React from 'react';
import '../../../assets/styles/global.css';
import Header from "../../../components/Header/index";

const Links = () => {
  return (
    <>
    <Header />
    <div className="content-container">
      <h1>Recursos ARM</h1>
      <section>
        <h2>Livros</h2>
        <ul>
          <li>Furber, S. -- ARM System-on-Chip Architecture</li>
        </ul>
      </section>
      <section>
        <h2>Sites</h2>
        <ul>
          <li>
            Visualização das instruções do ARM -{' '}
            <a href="https://www.wise-ware.com.br/aulas/arm/" target="_blank" rel="noopener noreferrer">
              https://www.wise-ware.com.br/aulas/arm/
            </a>
          </li>
          <li>
            Emulador ARM online -{' '}
            <a href="https://cpulator.01xz.net/?sys=arm" target="_blank" rel="noopener noreferrer">
              https://cpulator.01xz.net/?sys=arm
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Documentação ARM</h2>
        <ul>
          <li>
            Manual do ARMv7 --{' '}
            <a href="https://www.wise-ware.com.br/aulas/poli/ARM.pdf" target="_blank" rel="noopener noreferrer">
              https://www.wise-ware.com.br/aulas/poli/ARM.pdf
            </a>
          </li>
          <li>
            Arquitetura ARM --{' '}
            <a href="https://documentation-service.arm.com/static/5f8dacc8f86e16515cdb865a" target="_blank" rel="noopener noreferrer">
              https://documentation-service.arm.com/static/5f8dacc8f86e16515cdb865a
            </a>
          </li>
          <li>
            Conjunto de instruções --{' '}
            <a href="https://iitd-plos.github.io/col718/ref/arm-instructionset.pdf" target="_blank" rel="noopener noreferrer">
              https://iitd-plos.github.io/col718/ref/arm-instructionset.pdf
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Documentação GNU</h2>
        <ul>
          <li>
            Assembler --{' '}
            <a href="https://sourceware.org/binutils/docs-2.40/as.pdf" target="_blank" rel="noopener noreferrer">
              https://sourceware.org/binutils/docs-2.40/as.pdf
            </a>
          </li>
          <li>
            Linker/loader --{' '}
            <a href="https://sourceware.org/binutils/docs-2.40/ld.pdf" target="_blank" rel="noopener noreferrer">
              https://sourceware.org/binutils/docs-2.40/ld.pdf
            </a>
          </li>
          <li>
            Binary Utilities --{' '}
            <a href="https://sourceware.org/binutils/docs-2.40/binutils.pdf" target="_blank" rel="noopener noreferrer">
              https://sourceware.org/binutils/docs-2.40/binutils.pdf
            </a>
          </li>
          <li>
            GCC --{' '}
            <a href="https://gcc.gnu.org/onlinedocs/gcc-12.2.0/gcc.pdf" target="_blank" rel="noopener noreferrer">
              https://gcc.gnu.org/onlinedocs/gcc-12.2.0/gcc.pdf
            </a>
          </li>
          <li>
            GDB --{' '}
            <a href="https://sourceware.org/gdb/current/onlinedocs/gdb.pdf" target="_blank" rel="noopener noreferrer">
              https://sourceware.org/gdb/current/onlinedocs/gdb.pdf
            </a>
          </li>
        </ul>
      </section>
      {/* <section>
        <h2>Arquivos para baixar</h2>
        <ul>
          <li>
            <a
              href={process.env.PUBLIC_URL + '/topicos/links/instrucoes_arm.pdf'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instruções ARM-32 (PDF)
            </a>
          </li>
          <li>
            <a
              href={process.env.PUBLIC_URL + '/topicos/links/instrucoes_thumb.pdf'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instruções Thumb-16 (PDF)
            </a>
          </li>
          <li>
            <a
              href={process.env.PUBLIC_URL + '/topicos/links/manual_arm.pdf'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Manual do ARM (PDF)
            </a>
          </li>
          <li>
            <a
              href={process.env.PUBLIC_URL + '/topicos/links/perifericos_arm.pdf'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Periféricos Broadcom (PDF)
            </a>
          </li>
          <li>
            <a
              href={process.env.PUBLIC_URL + '/topicos/links/anexo_arm.pdf'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Anexo Broadcom (PDF)
            </a>
          </li>
        </ul>
      </section> */}
    </div>
    </>
  );
};

export default Links;
