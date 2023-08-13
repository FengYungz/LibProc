import React, { useRef, useState } from 'react'
import JsonItems from './items.json'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
} from 'react-icons/fa'

import {BiBookBookmark} from 'react-icons/bi'

import SidebarItem from '../SidebarItem'

const Sidebar = ({active, changeState}: {changeState: (state:boolean) => void, active: boolean}) => {

  const closeSidebar = () => {
    changeState(false)
  }


// Logica do dropDown
const [isActive, setIsActive] = useState(false)
const [aulaSelect, setAulaSelect] = useState("")
const onclick = (aula: string) => {
  setIsActive(!isActive)
  setAulaSelect(aula)
}

console.log(isActive);

  return (
    <Container>
      <FaTimes onClick={closeSidebar} />  
      <Content>
<<<<<<< HEAD
      <SidebarItem Icon={FaHome} Text="Home" link="/" />
        {JsonItems.map(item=> (
          <><button key={item.title} onClick={ () => onclick(item.title)} className='menuTopicos'>{item.title}</button>
            {isActive && aulaSelect === item.title && (<nav
          className={`menu`}
        >
          {item.items.map(sideBarItem => (
            <SidebarItem Icon={BiBookBookmark} Text={sideBarItem.text} link={sideBarItem.link}/>
          ))}
        </nav>)}
          </>
        ))}
=======
        <SidebarItem Icon={FaHome} Text="Home" link="/" />
        <SidebarItem Icon={BiBookBookmark} Text="Arquitetura do Processador ARM" link="/topicos/arquitetura" />
        <SidebarItem Icon={BiBookBookmark} Text="O conjunto de instruções do Processador ARM" link="/topicos/conjuntoInstrucoes" />
        <SidebarItem Icon={BiBookBookmark} Text="Instruções de Salto" link="/topicos/salto" />
        <SidebarItem Icon={BiBookBookmark} Text="Instruções ALU" link="/topicos/alu" />
        <SidebarItem Icon={BiBookBookmark} Text="Instruções de acesso à memória" link="/topicos/acessoMemoria" />
        <SidebarItem Icon={BiBookBookmark} Text="Reinício, Exceções e Interrupções" link="/topicos/reinicioExcecoes" />
        <SidebarItem Icon={BiBookBookmark} Text="Coprocessadores" link="/topicos/coprocessadores" />
        <SidebarItem Icon={BiBookBookmark} Text="Conjunto de Instruções ThumbConjunto de Instruções Thumb" link="/topicos/thumb" />
        <SidebarItem Icon={BiBookBookmark} Text="Instruções de salto" link="/topicos/saltoThumb" />
        <SidebarItem Icon={BiBookBookmark} Text="Operações aritméticas" link="/topicos/aritmeticas" />
        <SidebarItem Icon={BiBookBookmark} Text="Instruções de acesso à memória (Load/Store)" link="/topicos/loadStore" />
        <SidebarItem Icon={BiBookBookmark} Text="Conjunto de instruções Thumb-2" link="/topicos/thumb2" />
        <SidebarItem Icon={BiBookBookmark} Text="Execução do conjunto de instruções Thumb" link="/topicos/execucaoThumb" />
        <SidebarItem Icon={BiBookBookmark} Text="O ambiente de desenvolvimento GNU" link="/topicos/ambienteGnu" />
        <SidebarItem Icon={BiBookBookmark} Text="GNU assembler (as)" link="/topicos/assembler" />
        <SidebarItem Icon={BiBookBookmark} Text="Símbolos" link="/topicos/simbolos" />
        <SidebarItem Icon={BiBookBookmark} Text="Expressões" link="/topicos/expressoes" />
        <SidebarItem Icon={BiBookBookmark} Text="Definição de Seções" link="/topicos/definicaoSecoes" />
        <SidebarItem Icon={BiBookBookmark} Text="Atribuição de Símbolos" link="/topicos/atribuicaoSimbolos" />
        <SidebarItem Icon={BiBookBookmark} Text="Introdução de dados" link="/topicos/introducaoDados" />
        <SidebarItem Icon={BiBookBookmark} Text="Código condicional" link="/topicos/codigoCondicional" />
        <SidebarItem Icon={BiBookBookmark} Text="Posicionar o endereço atual" link="/topicos/enderecoAtual" />
        <SidebarItem Icon={BiBookBookmark} Text="Macros e repetições" link="/topicos/macrosRepeticoes" />
        <SidebarItem Icon={BiBookBookmark} Text="GNU ld" link="/topicos/gnuld" />
        <SidebarItem Icon={BiBookBookmark} Text="O Depurador do Gnu (gdb)" link="/topicos/gdb" />
        <SidebarItem Icon={BiBookBookmark} Text="Execução e controle do processo" link="/topicos/execucaoProcesso" />
        <SidebarItem Icon={BiBookBookmark} Text="Breakpoints" link="/topicos/breakpoints" />
        <SidebarItem Icon={BiBookBookmark} Text="Variáveis e conteúdo da memória" link="/topicos/variaveisMemoria" />
        <SidebarItem Icon={BiBookBookmark} Text="Controle da interface do usuário" link="/topicos/interfaceUsuario" />
        <SidebarItem Icon={BiBookBookmark} Text="Placa de desenvolvimento Evaluator-7T" link="/topicos/placaDesenvolvimento" />
        <SidebarItem Icon={BiBookBookmark} Text="Portas de Entrada e Saída (GPIO)" link="/topicos/gpio" />
        <SidebarItem Icon={BiBookBookmark} Text="Gerenciador de Interrupções" link="/topicos/gerenciadorInterrupcoes" />
        <SidebarItem Icon={BiBookBookmark} Text="Temporizadores (timers)" link="/topicos/temporizadores" />
        <SidebarItem Icon={BiBookBookmark} Text="UARTs" link="/topicos/uarts" />
        <SidebarItem Icon={BiBookBookmark} Text="Implementação de funções em C" link="/topicos/implementacaoFuncoesC" />
        <SidebarItem Icon={BiBookBookmark} Text="C-Runtime" link="/topicos/cRuntime" />
        <SidebarItem Icon={BiBookBookmark} Text="Biblioteca C padrão" link="/topicos/bibliotecaC" />
        <SidebarItem Icon={BiBookBookmark} Text="Dados em C" link="/topicos/dadosC" />
        <SidebarItem Icon={BiBookBookmark} Text="Implementação de funções em C" link="/topicos/implementacaoFuncoesC" />
        <SidebarItem Icon={BiBookBookmark} Text="GNU C Compiler (gcc)" link="/topicos/gcc" />
        <SidebarItem Icon={BiBookBookmark} Text="Ambiente de desenvolvimento" link="/topicos/ambienteDesenvolvimento" />
        <SidebarItem Icon={BiBookBookmark} Text="Atributos de função no GCC" link="/topicos/atributosFuncao" />
        <SidebarItem Icon={BiBookBookmark} Text="Assembler inline" link="/topicos/assemblerInline" />
        <SidebarItem Icon={BiBookBookmark} Text="O runtime do gcc" link="/topicos/runtimeGcc" />
        <SidebarItem Icon={BiBookBookmark} Text="Biblioteca C padrão: newlib" link="/topicos/bibliotecaCNewlib" />
        <SidebarItem Icon={BiBookBookmark} Text="Raspberry Pi" link="/topicos/raspberryPi" />
        <SidebarItem Icon={BiBookBookmark} Text="Processo de inicialização (boot)" link="/topicos/processoInicializacao" />
        <SidebarItem Icon={BiBookBookmark} Text="Interfaces de depuração" link="/topicos/interfaceDepuracao" />
        <SidebarItem Icon={BiBookBookmark} Text="Arquitetura do SoC BCM3826" link="/topicos/arquiteturaSoc" />
        <SidebarItem Icon={BiBookBookmark} Text="O Coprocessador 15 e o Gerenciador de Memória (MMU)" link="/topicos/coprocessadorMmu" />
        <SidebarItem Icon={BiBookBookmark} Text="Periféricos" link="/topicos/perifericos" />
        <SidebarItem Icon={BiBookBookmark} Text="Interrupções" link="/topicos/interrupcoes" />
        <SidebarItem Icon={BiBookBookmark} Text="Periférico “auxiliar” e a Mini-UART" link="/topicos/perifericoAuxiliar" />
        <SidebarItem Icon={BiBookBookmark} Text="Core timer" link="/topicos/coreTimer" />

>>>>>>> a6925bdeb71d7aad64e84190233c6a7f698913f6
      </Content>
    </Container>
  )
}

export default Sidebar