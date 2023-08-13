import React from 'react';
import {useState} from 'react';
import '../../assets/styles/global.css';
import styled from 'styled-components';

const QuizBox = styled.div`
  border-style: solid;
  border-radius: 5px;
  border-width: 2px;
  border-color: brown;
  padding: 5px;
  `;

const AnswerBox=styled.div`
  border-radius: 5px;
  background-color: rgba(0,128,0,0.5);
  padding: 5px;
  margin-top: 5px;
`;

const ShowButton=styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-top: 5px;
  border-radius: 3px;
  background: rgba(165,42,42,0.5);
  font-family: 'Roboto Condensed', sans-serif;
`;

function Quiz({quest, ans}:{quest:string; ans:string}){

  const [answer, setAnswer] = useState(false);
  const showOrHide = () => setAnswer(!answer);

  return(
    <div>
      <h4>Para pensar...</h4>
      <p>Você consegue formular uma resposta para essa questão?</p>
      <QuizBox>
        <p className="espaco-paragrafo">{quest}</p>
      </QuizBox>
      <div>
        {answer ? <AnswerBox><p className="espaco-paragrafo">{ans}</p></AnswerBox> : null}
        <ShowButton onClick={showOrHide}>{answer ? "Ocultar resposta" : "Mostrar resposta"}</ShowButton>
      </div>
    </div>
  );
}

export default Quiz;