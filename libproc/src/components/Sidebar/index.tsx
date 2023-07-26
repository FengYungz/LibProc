import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({active, changeState}: {changeState: (state:boolean) => void, active: boolean}) => {

  const closeSidebar = () => {
    changeState(false)
  }

  return (
    <Container /*sidebar={active}*/>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" link="/" />
        <SidebarItem Icon={FaEnvelope} Text="AcessoMemoria" link="/topicos/acessoMemoria" />
        <SidebarItem Icon={FaEnvelope} Text="Arquitetura" link="/topicos/arquitetura" />
        <SidebarItem Icon={FaEnvelope} Text="ConjuntoInstrucoes" link="/topicos/conjuntoInstrucoes" />
        <SidebarItem Icon={FaEnvelope} Text="InstrucoesSalto" link="/topicos/salto" />
        <SidebarItem Icon={FaEnvelope} Text="InstrucoesALU" link="/topicos/alu" />
        <SidebarItem Icon={FaEnvelope} Text="ReinicioExcecoes" link="/topicos/reinicioExcecoes" />
        <SidebarItem Icon={FaEnvelope} Text="Coprocessadores" link="/topicos/coprocessadores" />
        <SidebarItem Icon={FaEnvelope} Text="ConjuntoInstrucoesThumb" link="/topicos/thumb" />
        <SidebarItem Icon={FaEnvelope} Text="InstrucoesSaltoThumb" link="/topicos/saltoThumb" />
        <SidebarItem Icon={FaEnvelope} Text="OperacoesAritmeticas" link="/topicos/aritmeticas" />
        <SidebarItem Icon={FaEnvelope} Text="InstrucoesAcessoMemoria" link="/topicos/loadStore" />
        <SidebarItem Icon={FaEnvelope} Text="ConjuntoInstrucoesThumb2" link="/topicos/thumb2" />
        <SidebarItem Icon={FaEnvelope} Text="ExecucaoConjuntoInstrucoesThumb" link="/topicos/execucaoThumb" />
        <SidebarItem Icon={FaEnvelope} Text="AmbienteGNU" link="/topicos/ambienteGnu" />
        <SidebarItem Icon={FaEnvelope} Text="AssemblerGNU" link="/topicos/assembler" />
        <SidebarItem Icon={FaEnvelope} Text="Simbolos" link="/topicos/simbolos" />
        <SidebarItem Icon={FaEnvelope} Text="Expressoes" link="/topicos/expressoes" />
        <SidebarItem Icon={FaEnvelope} Text="DefinicaoSecoes" link="/topicos/definicaoSecoes" />
        <SidebarItem Icon={FaEnvelope} Text="AtribuicaoSimbolos" link="/topicos/atribuicaoSimbolos" />
        <SidebarItem Icon={FaEnvelope} Text="IntroducaoDados" link="/topicos/introducaoDados" />
        <SidebarItem Icon={FaEnvelope} Text="CodigoCondicional" link="/topicos/codigoCondicional" />
        <SidebarItem Icon={FaEnvelope} Text="PosicionarEnderecoAtual" link="/topicos/enderecoAtual" />
        <SidebarItem Icon={FaEnvelope} Text="MacrosRepeticoes" link="/topicos/macrosRepeticoes" />
        <SidebarItem Icon={FaEnvelope} Text="GNULD" link="/topicos/gnuld" />
        <SidebarItem Icon={FaEnvelope} Text="DepuradorGNU" link="/topicos/gdb" />
        <SidebarItem Icon={FaEnvelope} Text="ExecucaoControleProcesso" link="/topicos/execucaoProcesso" />
        <SidebarItem Icon={FaEnvelope} Text="Breakpoints" link="/topicos/breakpoints" />
        <SidebarItem Icon={FaEnvelope} Text="VariaveisConteudoMemoria" link="/topicos/variaveisMemoria" />
        <SidebarItem Icon={FaEnvelope} Text="ControleInterfaceUsuario" link="/topicos/interfaceUsuario" />
        <SidebarItem Icon={FaEnvelope} Text="PlacaDesenvolvimento" link="/topicos/placaDesenvolvimento" />
        <SidebarItem Icon={FaEnvelope} Text="PortasEntradaSaidaGPIO" link="/topicos/gpio" />
        <SidebarItem Icon={FaEnvelope} Text="GerenciadorInterrupcoes" link="/topicos/gerenciadorInterrupcoes" />
        <SidebarItem Icon={FaEnvelope} Text="Temporizadores" link="/topicos/temporizadores" />
        <SidebarItem Icon={FaEnvelope} Text="UARTs" link="/topicos/uarts" />
        <SidebarItem Icon={FaEnvelope} Text="ImplementacaoLinguagemC" link="/topicos/implementacaoFuncoesC" />
        <SidebarItem Icon={FaEnvelope} Text="CRuntime" link="/topicos/cRuntime" />
        <SidebarItem Icon={FaEnvelope} Text="BibliotecaC" link="/topicos/bibliotecaC" />
        <SidebarItem Icon={FaEnvelope} Text="DadosC" link="/topicos/dadosC" />
        <SidebarItem Icon={FaEnvelope} Text="ImplementacaoFuncoesC" link="/topicos/implementacaoFuncoesC" />
        <SidebarItem Icon={FaEnvelope} Text="GNUCompiler" link="/topicos/gcc" />
        <SidebarItem Icon={FaEnvelope} Text="AmbienteDesenvolvimento" link="/topicos/ambienteDesenvolvimento" />
        <SidebarItem Icon={FaEnvelope} Text="AtributosFuncaoGCC" link="/topicos/atributosFuncao" />
        <SidebarItem Icon={FaEnvelope} Text="AssemblerInline" link="/topicos/assemblerInline" />
        <SidebarItem Icon={FaEnvelope} Text="RuntimeGCC" link="/topicos/runtimeGcc" />
        <SidebarItem Icon={FaEnvelope} Text="BibliotecaCNewlib" link="/topicos/bibliotecaCNewlib" />
      </Content>
    </Container>
  )
}

export default Sidebar