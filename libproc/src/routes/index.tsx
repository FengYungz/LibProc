import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/home/';
import AcessoMemoria from '../pages/topicos/acessoMemoria';
import Arquitetura from '../pages/topicos/arquitetura';
import ConjuntoInstrucoes from '../pages/topicos/conjuntoInstrucoes';
import InstrucoesSalto from '../pages/topicos/salto';
import InstrucoesALU from '../pages/topicos/alu';
import ReinicioExcecoes from '../pages/topicos/reinicioExcecoes';
import Coprocessadores from '../pages/topicos/coprocessadores';
import ConjuntoInstrucoesThumb from '../pages/topicos/thumb';
import InstrucoesSaltoThumb from '../pages/topicos/saltoThumb';
import OperacoesAritmeticas from '../pages/topicos/aritmeticas';
import InstrucoesAcessoMemoria from '../pages/topicos/loadStore';
import ConjuntoInstrucoesThumb2 from '../pages/topicos/thumb2';
import ExecucaoConjuntoInstrucoesThumb from '../pages/topicos/execucaoThumb';
import AmbienteGNU from '../pages/topicos/ambienteGnu';
import AssemblerGNU from '../pages/topicos/assembler';
import Simbolos from '../pages/topicos/simbolos';
import Expressoes from '../pages/topicos/expressoes';
import DefinicaoSecoes from '../pages/topicos/definicaoSecoes';
import AtribuicaoSimbolos from '../pages/topicos/atribuicaoSimbolos';
import IntroducaoDados from '../pages/topicos/introducaoDados';
import CodigoCondicional from '../pages/topicos/codigoCondicional';
import PosicionarEnderecoAtual from '../pages/topicos/enderecoAtual';
import MacrosRepeticoes from '../pages/topicos/macrosRepeticoes';
import GNULD from '../pages/topicos/gnuld';
import DepuradorGNU from '../pages/topicos/gdb';
import ExecucaoControleProcesso from '../pages/topicos/execucaoProcesso';
import Breakpoints from '../pages/topicos/breakpoints';
import VariaveisConteudoMemoria from '../pages/topicos/variaveisMemoria';
import ControleInterfaceUsuario from '../pages/topicos/interfaceUsuario';
import PlacaDesenvolvimento from '../pages/topicos/placaDesenvolvimento';
import PortasEntradaSaidaGPIO from '../pages/topicos/gpio';
import GerenciadorInterrupcoes from '../pages/topicos/gerenciadorInterrupcoes';
import Temporizadores from '../pages/topicos/temporizadores';
import UARTs from '../pages/topicos/uarts';
import ImplementacaoLinguagemC from '../pages/topicos/implementacaoFuncoesC';
import CRuntime from '../pages/topicos/cRuntime';
import BibliotecaC from '../pages/topicos/bibliotecaC';
import DadosC from '../pages/topicos/dadosC';
import ImplementacaoFuncoesC from '../pages/topicos/implementacaoFuncoesC';
import GNUCompiler from '../pages/topicos/gcc';
import AmbienteDesenvolvimento from '../pages/topicos/ambienteDesenvolvimento';
import AtributosFuncaoGCC from '../pages/topicos/atributosFuncao';
import AssemblerInline from '../pages/topicos/assemblerInline';
import RuntimeGCC from '../pages/topicos/runtimeGcc';
import BibliotecaCNewlib from '../pages/topicos/bibliotecaCNewlib';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/topicos/acessoMemoria' element={<AcessoMemoria />} />
                <Route path='/topicos/arquitetura' element={<Arquitetura />} />
                <Route path='/topicos/conjuntoInstrucoes' element={<ConjuntoInstrucoes />} />
                <Route path='/topicos/salto' element={<InstrucoesSalto />} />
                <Route path='/topicos/alu' element={<InstrucoesALU />} />
                <Route path='/topicos/reinicioExcecoes' element={<ReinicioExcecoes />} />
                <Route path='/topicos/coprocessadores' element={<Coprocessadores />} />
                <Route path='/topicos/thumb' element={<ConjuntoInstrucoesThumb />} />
                <Route path='/topicos/saltoThumb' element={<InstrucoesSaltoThumb />} />
                <Route path='/topicos/aritmeticas' element={<OperacoesAritmeticas />} />
                <Route path='/topicos/loadStore' element={<InstrucoesAcessoMemoria />} />
                <Route path='/topicos/thumb2' element={<ConjuntoInstrucoesThumb2 />} />
                <Route path='/topicos/execucaoThumb' element={<ExecucaoConjuntoInstrucoesThumb />} />
                <Route path='/topicos/ambienteGnu' element={<AmbienteGNU />} />
                <Route path='/topicos/assembler' element={<AssemblerGNU />} />
                <Route path='/topicos/simbolos' element={<Simbolos />} />
                <Route path='/topicos/expressoes' element={<Expressoes />} />
                <Route path='/topicos/definicaoSecoes' element={<DefinicaoSecoes />} />
                <Route path='/topicos/atribuicaoSimbolos' element={<AtribuicaoSimbolos />} />
                <Route path='/topicos/introducaoDados' element={<IntroducaoDados />} />
                <Route path='/topicos/codigoCondicional' element={<CodigoCondicional />} />
                <Route path='/topicos/enderecoAtual' element={<PosicionarEnderecoAtual />} />
                <Route path='/topicos/macrosRepeticoes' element={<MacrosRepeticoes />} />
                <Route path='/topicos/gnuld' element={<GNULD />} />
                <Route path='/topicos/gdb' element={<DepuradorGNU />} />
                <Route path='/topicos/execucaoProcesso' element={<ExecucaoControleProcesso />} />
                <Route path='/topicos/breakpoints' element={<Breakpoints />} />
                <Route path='/topicos/variaveisMemoria' element={<VariaveisConteudoMemoria />} />
                <Route path='/topicos/interfaceUsuario' element={<ControleInterfaceUsuario />} />
                <Route path='/topicos/placaDesenvolvimento' element={<PlacaDesenvolvimento />} />
                <Route path='/topicos/gpio' element={<PortasEntradaSaidaGPIO />} />
                <Route path='/topicos/gerenciadorInterrupcoes' element={<GerenciadorInterrupcoes />} />
                <Route path='/topicos/temporizadores' element={<Temporizadores />} />
                <Route path='/topicos/uarts' element={<UARTs />} />
                <Route path='/topicos/implementacaoFuncoesC' element={<ImplementacaoLinguagemC />} />
                <Route path='/topicos/cRuntime' element={<CRuntime />} />
                <Route path='/topicos/bibliotecaC' element={<BibliotecaC />} />
                <Route path='/topicos/dadosC' element={<DadosC />} />
                <Route path='/topicos/implementacaoFuncoesC' element={<ImplementacaoFuncoesC />} />
                <Route path='/topicos/gcc' element={<GNUCompiler />} />
                <Route path='/topicos/ambienteDesenvolvimento' element={<AmbienteDesenvolvimento />} />
                <Route path='/topicos/atributosFuncao' element={<AtributosFuncaoGCC />} />
                <Route path='/topicos/assemblerInline' element={<AssemblerInline />} />
                <Route path='/topicos/runtimeGcc' element={<RuntimeGCC />} />
                <Route path='/topicos/bibliotecaCNewlib' element={<BibliotecaCNewlib />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;