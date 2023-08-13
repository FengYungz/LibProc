import React, { useState } from 'react';
import Arquitetura from './topics/arquitetura';
import ConjuntoInstrucoes from './topics/conjunto-instrucoes';
import InstrucoesSalto from './topics/salto';
import InstrucoesALU from './topics/alu';
import AcessoMemoria from './topics/acesso-memoria';
import ReinicioExcecoes from './topics/reinicio-excecoes';
import Coprocessadores from './topics/coprocessadores';
import ConjuntoInstrucoesThumb from './topics/thumb';
import InstrucoesSaltoThumb from './topics/salto-thumb';
import OperacoesAritmeticas from './topics/aritmeticas';
import InstrucoesAcessoMemoria from './topics/load-store';
import ConjuntoInstrucoesThumb2 from './topics/thumb2';
import ExecucaoConjuntoInstrucoesThumb from './topics/execucao-thumb';
import AmbienteGNU from './topics/ambiente-gnu';
import AssemblerGNU from './topics/assembler';
import Simbolos from './topics/simbolos';
import Expressoes from './topics/expressoes';
import DefinicaoSecoes from './topics/definicao-secoes';
import AtribuicaoSimbolos from './topics/atribuicao-simbolos';
import IntroducaoDados from './topics/introducao-dados';
import CodigoCondicional from './topics/codigo-condicional';
import PosicionarEnderecoAtual from './topics/endereco-atual';
import MacrosRepeticoes from './topics/macros-repeticoes';
import GNULD from './topics/gnu-ld';
import DepuradorGNU from './topics/gdb';
import ExecucaoControleProcesso from './topics/execucao-processo';
import Breakpoints from './topics/breakpoints';
import VariaveisConteudoMemoria from './topics/variaveis-memoria';
import ControleInterfaceUsuario from './topics/interface-usuario';
import PlacaDesenvolvimento from './topics/placa-desenvolvimento';
import PortasEntradaSaidaGPIO from './topics/gpio';
import GerenciadorInterrupcoes from './topics/gerenciador-interrupcoes';
import Temporizadores from './topics/temporizadores';
import UARTs from './topics/uarts';
import ImplementacaoLinguagemC from './topics/implementacao-linguagem-c';
import CRuntime from './topics/c-runtime';
import BibliotecaC from './topics/biblioteca-c';
import DadosC from './topics/dados-c';
import ImplementacaoFuncoesC from './topics/implementacao-funcoes-c';
import GNUCompiler from './topics/gcc';
import AmbienteDesenvolvimento from './topics/ambiente-desenvolvimento';
import AtributosFuncaoGCC from './topics/atributos-funcao';
import AssemblerInline from './topics/assembler-inline';
import RuntimeGCC from './topics/runtime-gcc';
import BibliotecaCNewlib from './topics/biblioteca-c-newlib';

type ConteudoPorId = {
  [key: string]: React.ReactElement;
};

type ItemSumario = {
  id: string;
  label: string;
};

const Sumario = () => {
  const items: ItemSumario[] = [
    { id: 'arquitetura', label: 'Arquitetura do processador ARM' },
    { id: 'conjunto-instrucoes', label: 'O conjunto de instruções do Processador ARM' },
    { id: 'salto', label: 'Instruções de Salto' },
    { id: 'alu', label: 'Instruções ALU' },
    { id: 'acesso-memoria', label: 'Instruções de acesso à memória' },
    { id: 'reinicio-excecoes', label: 'Reinício, Exceções e Interrupções' },
    { id: 'coprocessadores', label: 'Coprocessadores' },
    { id: 'thumb', label: 'Conjunto de instruções Thumb' },
    { id: 'salto-thumb', label: 'Instruções de salto' },
    { id: 'aritmeticas', label: 'Operações aritméticas' },
    { id: 'load-store', label: 'Instruções de acesso à memória (Load/Store)' },
    { id: 'thumb2', label: 'Conjunto de instruções Thumb-2' },
    { id: 'execucao-thumb', label: 'Execução do conjunto de instruções Thumb' },
    { id: 'ambiente-gnu', label: 'O ambiente de desenvolvimento GNU' },
    { id: 'assembler', label: 'GNU assembler (as)' },
    { id: 'simbolos', label: 'Símbolos' },
    { id: 'expressoes', label: 'Expressões' },
    { id: 'definicao-secoes', label: 'Definição de Seções' },
    { id: 'atribuicao-simbolos', label: 'Atribuição de Símbolos' },
    { id: 'introducao-dados', label: 'Introdução de dados' },
    { id: 'codigo-condicional', label: 'Código condicional' },
    { id: 'endereco-atual', label: 'Posicionar o endereço atual' },
    { id: 'macros-repeticoes', label: 'Macros e repetições' },
    { id: 'gnu-ld', label: 'GNU ld' },
    { id: 'gdb', label: 'O Depurador do Gnu (gdb)' },
    { id: 'execucao-processo', label: 'Execução e controle do processo' },
    { id: 'breakpoints', label: 'Breakpoints' },
    { id: 'variaveis-memoria', label: 'Variáveis e conteúdo da memória' },
    { id: 'interface-usuario', label: 'Controle da interface do usuário' },
    { id: 'placa-desenvolvimento', label: 'Placa de desenvolvimento Evaluator-7T' },
    { id: 'gpio', label: 'Portas de Entrada e Saída (GPIO)' },
    { id: 'gerenciador-interrupcoes', label: 'Gerenciador de Interrupções' },
    { id: 'temporizadores', label: 'Temporizadores (timers)' },
    { id: 'uarts', label: 'UARTs' },
    { id: 'implementacao-linguagem-c', label: 'Implementação da Linguagem C' },
    { id: 'c-runtime', label: 'C-Runtime' },
    { id: 'biblioteca-c', label: 'Biblioteca C padrão' },
    { id: 'dados-c', label: 'Dados em C' },
    { id: 'implementacao-funcoes-c', label: 'Implementação de funções em C' },
    { id: 'gcc', label: 'GNU C Compiler (gcc)' },
    { id: 'ambiente-desenvolvimento', label: 'Ambiente de desenvolvimento' },
    { id: 'atributos-funcao', label: 'Atributos de função no GCC' },
    { id: 'assembler-inline', label: 'Assembler inline' },
    { id: 'runtime-gcc', label: 'O runtime do gcc' },
    { id: 'biblioteca-c-newlib', label: 'Biblioteca C padrão: newlib' }
  ];

  const [conteudoVisivel, setConteudoVisivel] = useState<{ [key: string]: boolean }>({});

  const handleItemClick = (id: string) => {
    setConteudoVisivel((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const conteudoPorId: ConteudoPorId = {
    'arquitetura': <Arquitetura />,
    'conjunto-instrucoes': <ConjuntoInstrucoes />,
    'salto': <InstrucoesSalto />,
    'alu': <InstrucoesALU />,
    'acesso-memoria': <AcessoMemoria />,
    'reinicio-excecoes': <ReinicioExcecoes />,
    'coprocessadores': <Coprocessadores />,
    'thumb': <ConjuntoInstrucoesThumb />,
    'salto-thumb': <InstrucoesSaltoThumb />,
    'aritmeticas': <OperacoesAritmeticas />,
    'load-store': <InstrucoesAcessoMemoria />,
    'thumb2': <ConjuntoInstrucoesThumb2 />,
    'execucao-thumb': <ExecucaoConjuntoInstrucoesThumb />,
    'ambiente-gnu': <AmbienteGNU />,
    'assembler': <AssemblerGNU />,
    'simbolos': <Simbolos />,
    'expressoes': <Expressoes />,
    'definicao-secoes': <DefinicaoSecoes />,
    'atribuicao-simbolos': <AtribuicaoSimbolos />,
    'introducao-dados': <IntroducaoDados />,
    'codigo-condicional': <CodigoCondicional />,
    'endereco-atual': <PosicionarEnderecoAtual />,
    'macros-repeticoes': <MacrosRepeticoes />,
    'gnu-ld': <GNULD />,
    'gdb': <DepuradorGNU />,
    'execucao-processo': <ExecucaoControleProcesso />,
    'breakpoints': <Breakpoints />,
    'variaveis-memoria': <VariaveisConteudoMemoria />,
    'interface-usuario': <ControleInterfaceUsuario />,
    'placa-desenvolvimento': <PlacaDesenvolvimento />,
    'gpio': <PortasEntradaSaidaGPIO />,
    'gerenciador-interrupcoes': <GerenciadorInterrupcoes />,
    'temporizadores': <Temporizadores />,
    'uarts': <UARTs />,
    'implementacao-linguagem-c': <ImplementacaoLinguagemC />,
    'c-runtime': <CRuntime />,
    'biblioteca-c': <BibliotecaC />,
    'dados-c': <DadosC />,
    'implementacao-funcoes-c': <ImplementacaoFuncoesC />,
    'gcc': <GNUCompiler />,
    'ambiente-desenvolvimento': <AmbienteDesenvolvimento />,
    'atributos-funcao': <AtributosFuncaoGCC />,
    'assembler-inline': <AssemblerInline />,
    'runtime-gcc': <RuntimeGCC />,
    'biblioteca-c-newlib': <BibliotecaCNewlib />
  };

  return (
    <div>
      <h2>Sumário</h2>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} onClick={() => handleItemClick(item.id)}>
              {item.label}
            </a>
            {conteudoVisivel[item.id] && conteudoPorId[item.id]}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Sumario;