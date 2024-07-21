import React, { useCallback, useState } from 'react';
import {Questionss} from './Questionss.jsx';
import questions from '../questions.js';
import { Summary } from './Summary.jsx';

export const Quiz = () => {
    const [userAnswer, setUserAnswer] = useState([]);

    const questionIndex = userAnswer.length ;
    const quizIsComplete= questionIndex === questions.length;
    const handleSelectAnswer = useCallback(function handleSelectAnswer
        (
        selectedAnswer
        ){
        setUserAnswer((prevAns) => {
            return [...prevAns, selectedAnswer];
        });

    },[])

    const handleSkipAnswer=useCallback(
        ()=>handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    if (quizIsComplete) {
        return <Summary userAnswer={userAnswer}/>
    }

    
  
    return (
        <div id='quiz'>
           <Questionss 
           key={questionIndex}
           index={questionIndex}
           handleSkipAnswer={handleSkipAnswer}
           handleSelectAnswer={handleSelectAnswer}
           />
        </div>
    )
}
