import React from 'react'
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

  return (
    <Container /*sidebar={active}*/>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" link="/" />
        <SidebarItem Icon={BiBookBookmark} Text="AcessoMemoria" link="/topicos/acessoMemoria" />
        <SidebarItem Icon={BiBookBookmark} Text="Arquitetura" link="/topicos/arquitetura" />
        <SidebarItem Icon={BiBookBookmark} Text="ConjuntoInstrucoes" link="/topicos/conjuntoInstrucoes" />
        <SidebarItem Icon={BiBookBookmark} Text="InstrucoesSalto" link="/topicos/salto" />
        <SidebarItem Icon={BiBookBookmark} Text="InstrucoesALU" link="/topicos/alu" />
        <SidebarItem Icon={BiBookBookmark} Text="ReinicioExcecoes" link="/topicos/reinicioExcecoes" />
        <SidebarItem Icon={BiBookBookmark} Text="Coprocessadores" link="/topicos/coprocessadores" />
        <SidebarItem Icon={BiBookBookmark} Text="ConjuntoInstrucoesThumb" link="/topicos/thumb" />
        <SidebarItem Icon={BiBookBookmark} Text="InstrucoesSaltoThumb" link="/topicos/saltoThumb" />
        <SidebarItem Icon={BiBookBookmark} Text="OperacoesAritmeticas" link="/topicos/aritmeticas" />
        <SidebarItem Icon={BiBookBookmark} Text="InstrucoesAcessoMemoria" link="/topicos/loadStore" />
        <SidebarItem Icon={BiBookBookmark} Text="ConjuntoInstrucoesThumb2" link="/topicos/thumb2" />
        <SidebarItem Icon={BiBookBookmark} Text="ExecucaoConjuntoInstrucoesThumb" link="/topicos/execucaoThumb" />
        <SidebarItem Icon={BiBookBookmark} Text="AmbienteGNU" link="/topicos/ambienteGnu" />
        <SidebarItem Icon={BiBookBookmark} Text="AssemblerGNU" link="/topicos/assembler" />
        <SidebarItem Icon={BiBookBookmark} Text="Simbolos" link="/topicos/simbolos" />
        <SidebarItem Icon={BiBookBookmark} Text="Expressoes" link="/topicos/expressoes" />
        <SidebarItem Icon={BiBookBookmark} Text="DefinicaoSecoes" link="/topicos/definicaoSecoes" />
        <SidebarItem Icon={BiBookBookmark} Text="AtribuicaoSimbolos" link="/topicos/atribuicaoSimbolos" />
        <SidebarItem Icon={BiBookBookmark} Text="IntroducaoDados" link="/topicos/introducaoDados" />
        <SidebarItem Icon={BiBookBookmark} Text="CodigoCondicional" link="/topicos/codigoCondicional" />
        <SidebarItem Icon={BiBookBookmark} Text="PosicionarEnderecoAtual" link="/topicos/enderecoAtual" />
        <SidebarItem Icon={BiBookBookmark} Text="MacrosRepeticoes" link="/topicos/macrosRepeticoes" />
        <SidebarItem Icon={BiBookBookmark} Text="GNULD" link="/topicos/gnuld" />
        <SidebarItem Icon={BiBookBookmark} Text="DepuradorGNU" link="/topicos/gdb" />
        <SidebarItem Icon={BiBookBookmark} Text="ExecucaoControleProcesso" link="/topicos/execucaoProcesso" />
        <SidebarItem Icon={BiBookBookmark} Text="Breakpoints" link="/topicos/breakpoints" />
        <SidebarItem Icon={BiBookBookmark} Text="VariaveisConteudoMemoria" link="/topicos/variaveisMemoria" />
        <SidebarItem Icon={BiBookBookmark} Text="ControleInterfaceUsuario" link="/topicos/interfaceUsuario" />
        <SidebarItem Icon={BiBookBookmark} Text="PlacaDesenvolvimento" link="/topicos/placaDesenvolvimento" />
        <SidebarItem Icon={BiBookBookmark} Text="PortasEntradaSaidaGPIO" link="/topicos/gpio" />
        <SidebarItem Icon={BiBookBookmark} Text="GerenciadorInterrupcoes" link="/topicos/gerenciadorInterrupcoes" />
        <SidebarItem Icon={BiBookBookmark} Text="Temporizadores" link="/topicos/temporizadores" />
        <SidebarItem Icon={BiBookBookmark} Text="UARTs" link="/topicos/uarts" />
        <SidebarItem Icon={BiBookBookmark} Text="ImplementacaoLinguagemC" link="/topicos/implementacaoFuncoesC" />
        <SidebarItem Icon={BiBookBookmark} Text="CRuntime" link="/topicos/cRuntime" />
        <SidebarItem Icon={BiBookBookmark} Text="BibliotecaC" link="/topicos/bibliotecaC" />
        <SidebarItem Icon={BiBookBookmark} Text="DadosC" link="/topicos/dadosC" />
        <SidebarItem Icon={BiBookBookmark} Text="ImplementacaoFuncoesC" link="/topicos/implementacaoFuncoesC" />
        <SidebarItem Icon={BiBookBookmark} Text="GNUCompiler" link="/topicos/gcc" />
        <SidebarItem Icon={BiBookBookmark} Text="AmbienteDesenvolvimento" link="/topicos/ambienteDesenvolvimento" />
        <SidebarItem Icon={BiBookBookmark} Text="AtributosFuncaoGCC" link="/topicos/atributosFuncao" />
        <SidebarItem Icon={BiBookBookmark} Text="AssemblerInline" link="/topicos/assemblerInline" />
        <SidebarItem Icon={BiBookBookmark} Text="RuntimeGCC" link="/topicos/runtimeGcc" />
        <SidebarItem Icon={BiBookBookmark} Text="BibliotecaCNewlib" link="/topicos/bibliotecaCNewlib" />
      </Content>
    </Container>
  )
}

export default Sidebar