import React, { useRef } from 'react'


export const Answers = ({answers,selectedAnswer,answerState,handleSelectAnswer}) => {
    const shuffleAnswer=useRef();
  
    if(!shuffleAnswer.current){
        shuffleAnswer.current=[...answers];
        shuffleAnswer.current.sort(()=> Math.random() - 0.5)
    }
    return (
    <ul id='answers'>
                    {shuffleAnswer.current.map((answer) => {
                        const isSelected=selectedAnswer === answer
                        let cssClasses='';

                        if(answerState == 'answered' && isSelected){
                            cssClasses+='selected';
                        }
                        if((answerState == 'correct' || answerState == 'wrong') && isSelected){
                            cssClasses+=answerState;
                        }
                        return <li key={answer} className='answer'>
                            <button onClick={() => handleSelectAnswer(answer)} className={cssClasses} disabled={answerState !== ''}>{answer}</button>
                        </li>
                    })
                    }
                </ul>
  )
}
