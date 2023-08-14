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
import FormatoArquivosFonte from '../pages/topicos/formatoArquivosFonte';
import GNULD from '../pages/topicos/gnuld';
import DepuradorGNU from '../pages/topicos/gdb';
import PlacaDesenvolvimento from '../pages/topicos/placaDesenvolvimento';
import PortasEntradaSaidaGPIO from '../pages/topicos/gpio';
import GerenciadorInterrupcoes from '../pages/topicos/gerenciadorInterrupcoes';
import Temporizadores from '../pages/topicos/temporizadores';
import UARTs from '../pages/topicos/uarts';
import ImplementacaoLinguagemC from '../pages/topicos/implementacaoLinguagemC';
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
import RaspberryPi from '../pages/topicos/raspberryPi';
import ProcessoInicializacao from '../pages/topicos/processoInicializacao';
import InterfaceDepuracao from '../pages/topicos/interfaceDepuracao';
import MakefileExemplo from '../pages/topicos/makefileExemplo';
import ArquiteturaSoc from '../pages/topicos/arquiteturaSoc';
import CoprocessadorMmu from '../pages/topicos/coprocessadorMmu';
import Perifericos from '../pages/topicos/perifericos';
import GPIOs from '../pages/topicos/gpios';
import Interrupcoes from '../pages/topicos/interrupcoes';
import PerifericosAuxiliar from '../pages/topicos/perifericoAuxiliar';
import CoreTimer from '../pages/topicos/coreTimer';
import ExecucaoProcessoAgregado from '../pages/topicos/execucaoProcessoAgregado';
import Links from '../pages/topicos/links';

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
                <Route path='/topicos/formatoArquivosFonte' element={<FormatoArquivosFonte />} />
                <Route path='/topicos/gnuld' element={<GNULD />} />
                <Route path='/topicos/gdb' element={<DepuradorGNU />} />
                <Route path='/topicos/execucaoProcessoAgregado' element={<ExecucaoProcessoAgregado />} />
                <Route path='/topicos/placaDesenvolvimento' element={<PlacaDesenvolvimento />} />
                <Route path='/topicos/gpio' element={<PortasEntradaSaidaGPIO />} />
                <Route path='/topicos/gerenciadorInterrupcoes' element={<GerenciadorInterrupcoes />} />
                <Route path='/topicos/temporizadores' element={<Temporizadores />} />
                <Route path='/topicos/uarts' element={<UARTs />} />
                <Route path='/topicos/implementacaoLinguagemC' element={<ImplementacaoLinguagemC />} />
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
                <Route path='/topicos/raspberryPi' element={<RaspberryPi />} />
                <Route path='/topicos/processoInicializacao' element={<ProcessoInicializacao />} />
                <Route path='/topicos/interfaceDepuracao' element={<InterfaceDepuracao />} />
                <Route path='/topicos/makefileExemplo' element={<MakefileExemplo />} />
                <Route path='/topicos/arquiteturaSoc' element={<ArquiteturaSoc />} />
                <Route path='/topicos/coprocessadorMmu' element={<CoprocessadorMmu />} />
                <Route path='/topicos/perifericos' element={<Perifericos />} />
                <Route path='/topicos/gpios' element={<GPIOs />} />
                <Route path='/topicos/interrupcoes' element={<Interrupcoes />} />
                <Route path='/topicos/perifericoAuxiliar' element={<PerifericosAuxiliar />} />
                <Route path='/topicos/coreTimer' element={<CoreTimer />} />
                <Route path='/topicos/links' element={<Links />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;