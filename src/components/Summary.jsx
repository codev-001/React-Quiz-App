import React from 'react'
import quizSummary from '../assets/quiz-complete.png';
import questions from '../questions';

export const Summary = ({userAnswer}) => {

    const skipped=userAnswer.filter((answer)=> answer == null);
    const correct=userAnswer.filter((answer,index)=> answer === questions[index].answers[0])


    const skippedPercentage=Math.round((skipped.length / userAnswer.length) * 100);
    const correctPercentage= Math.round((correct.length / userAnswer.length) * 100);
    const incorrectPercentage=100 - skippedPercentage - correctPercentage; 

   
   
  return (
    <div id='summary'>
            <img src={quizSummary} alt="quiz-summary" />
            <h2>Quiz Completed</h2>

            <div id="summary-stats">
                <p>
                    <span className='number'>{skippedPercentage}%</span>
                    <span className='text'>Skipped</span>
                </p>
                <p>
                    <span className='number'>{correctPercentage}%</span>
                    <span className='text'>Answered Correctly</span>
                </p>
                <p>
                    <span className='number'>{incorrectPercentage}%</span>
                    <span className='text'>Answered Incorrectly</span>
                </p> 
            </div>
            <ol>
                    {userAnswer.map((answer,index)=>{
                        
                        let cssClasses='user-answer'

                        if(answer == null){

                            cssClasses+=' skipped';

                        }
                        else if(answer === questions[index].answers[0]){
                            cssClasses+=' correct';
                        }else{
                            cssClasses+=' wrong';
                        }

                        return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                        <p className='question'>{questions[index].text}</p>
                        <p className={cssClasses}>{answer ?? 'skipped'}</p>
                        </li>
                        )

                    })}

                    
                </ol>
    </div>
  )
}
