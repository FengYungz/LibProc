import React from 'react';
import {useState} from 'react';


function Quiz({quest, ans}:{quest:string; ans:string}){
  const [answer, setAnswer] = useState(false);
  const showOrHide = () => setAnswer(!answer);
  return(
    <div>
        <h4>Exercício</h4>
        <p>{quest}</p>
        <div>
          <button onClick={showOrHide}>{answer ? "Ocultar resposta" : "Mostrar resposta"}</button>
          {answer ? <p>{ans}</p> : null}
        </div>
      </div>
  );
}

export default Quiz;