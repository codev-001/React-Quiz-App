import React, { useState } from 'react'
import { Answers } from './Answers.jsx'
import { Progress } from './Progress.jsx'
import questions from '../questions.js'

export const Questionss = ({index,handleSelectAnswer,handleSkipAnswer}) => {

  const [answer,setAnswer]= useState({
    selectedAnswer:'',
    isCorrect:null
  })

  let timer=10000;

  if(answer.selectedAnswer){
    timer=2000;
  }
  if(answer.isCorrect !== null){
    timer=1000;
  }

  function handleSelectClick(answer){
    setAnswer({
      selectedAnswer:answer,
      isCorrect:null
    })

    setTimeout(() => {
      setAnswer({
        selectedAnswer:answer,
        isCorrect:questions[index].answers[0] === answer
      })

      setTimeout(()=>{
        handleSelectAnswer(answer)
      },1000)
    }, 2000);
  }

  let answerState='';

  if(answer.selectedAnswer && answer.isCorrect != null){
    answerState=answer.isCorrect ? 'correct' : 'wrong';
  }else if(answer.selectedAnswer){
    answerState='answered';
  }

  return (
    <div id='question'>
    <Progress key={timer} timeOut={timer} onTimeOut={answer.selectedAnswer == '' ? handleSkipAnswer : null} mode={answerState} />
    <h2>{questions[index].text}</h2>
    <Answers 
    answers={questions[index].answers} 
    selectedAnswer={answer.selectedAnswer}
    handleSelectAnswer={handleSelectClick}
    answerState={answerState} />
</div>  )
}
