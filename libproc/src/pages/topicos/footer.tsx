import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/global.css';
import styled from 'styled-components';

const Button = styled.button`
    font-size: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    background: green;
    font-family: 'Roboto Condensed', sans-serif;
    cursor: pointer;
`;

const RightLink = styled(Link)`
  margin-left: auto;
`;

const Foot = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f4f4f4;
`;

function Footer({index}:{index:number}){
    const rotas = ["/topicos/arquitetura","/topicos/conjuntoInstrucoes","/topicos/salto","/topicos/alu","/topicos/acessoMemoria","/topicos/ambienteGnu","/topicos/assembler","/topicos/formatoArquivosFonte","/topicos/gnuLd","/topicos/gdb","/topicos/execucaoProcessoAgregado","/topicos/reinicioExcecoes","/topicos/coprocessadores","/topicos/placaDesenvolvimento","/topicos/gpio","/topicos/gerenciadorInterrupcoes","/topicos/temporizadores","/topicos/uarts","/topicos/implementacaoLinguagemC","/topicos/cRuntime","/topicos/bibliotecaC","/topicos/dadosC","/topicos/implementacaoFuncoesC","/topicos/gccAgregado","/topicos/atributosFuncaoAgregado","/topicos/bibliotecaCNewlib","/topicos/thumb","/topicos/saltoThumb","/topicos/aritmeticas","/topicos/loadStore","/topicos/thumb2","/topicos/execucaoThumb","/topicos/raspberryPi","/topicos/processoInicializacao","/topicos/interfaceDepuracao","/topicos/makefileExemplo","/topicos/arquiteturaSoc","/topicos/coprocessadorMmu","/topicos/perifericos","/topicos/gpios","/topicos/interrupcoes","/topicos/perifericoAuxiliar","/topicos/coreTimer"];
    return(
        <Foot>
        {(index>0)?<Link to={rotas[index-1]}><Button>{'<'} Página anterior</Button></Link>:null}
        {(index<rotas.length-1)?<RightLink to={rotas[index+1]}><Button>Próxima página {'>'}</Button></RightLink>:null}
        </Foot>
    );
}

export default Footer;