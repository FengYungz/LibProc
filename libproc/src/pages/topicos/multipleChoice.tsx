import { useState } from 'react';
import styled from 'styled-components';

const QuestionBox = styled.div`
  border-style: solid;
  border-radius: 5px;
  border-width: 2px;
  border-color: brown;
  padding: 10px;
  margin-bottom: 10px;
`;

const AnswerBox=styled.div<{$show?:boolean; $rightAnswer?:boolean;}>`
  background-color: ${props => props.$show && props.$rightAnswer ? "rgba(0,128,0,0.5)" : props.$show && !props.$rightAnswer ? "rgba(165,42,42,0.5)" : "transparent"};

  border-radius: 5px;
  padding: 5px;
  margin-top: 5px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  cursor: pointer;
  input[type="radio"] {
    margin-right: 10px;
  }
`;

const ShowButton=styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-top: 5px;
  border-radius: 3px;
  background: brown;
  color: white;
  font-family: 'Roboto Condensed', sans-serif;
`;

function MultipleChoiceQuestion({ question, options, answer, correctMessage, incorrectMessage }:{question:string; options:string[]; answer:number; correctMessage:string; incorrectMessage:string}) {
  const [selectedOption, setSelectedOption] = useState(-1);
  const [show, setShow] = useState(false);

  const handleOptionChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(parseInt(event.target.value,10));
  };

  const showOrHide = () => setShow(!show);

  return (
    <div>
      <QuestionBox>
        <h4>Exercício</h4>
        <p>Teste seu conhecimento:</p>
        <p>{question}</p>
        <div>
          {options.map((option:string, index:number) => (
            <AnswerBox $show={show && (index==answer || index==selectedOption)} $rightAnswer={index == answer}>
              <Option key={index}>
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="options"
                  value={index}
                  checked={selectedOption === index}
                  onChange={handleOptionChange}
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </Option>
            </AnswerBox>
          ))}
        </div>
      </QuestionBox>
      {(show && selectedOption==answer) ? <AnswerBox $show $rightAnswer><h4>Correto!</h4><p>{correctMessage}</p></AnswerBox> : (show && selectedOption != answer) ? <AnswerBox $show $rightAnswer={false}><h4>Incorreto. :(</h4><p>{incorrectMessage}</p></AnswerBox> : null}
      <ShowButton onClick={showOrHide}>{show ? "Ocultar resposta" : "Mostrar resposta"}</ShowButton>
    </div>
  );
}

export default MultipleChoiceQuestion;
