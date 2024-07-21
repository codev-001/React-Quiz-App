import React, { useEffect, useState } from 'react'

export const Progress = ({timeOut,onTimeOut,mode}) => {

    const [remainingTime, setRemainingTime] = useState(timeOut)


    useEffect(()=>{
        console.log('timmerere')

        const timer=setTimeout(()=>onTimeOut(), timeOut)
         
        return ()=>{
            clearTimeout(timer)
        }
    },[timeOut,onTimeOut])
    
    useEffect(()=>{
        console.log('interneval')
        const interval=setInterval(()=>{
            setRemainingTime((prevTime) => prevTime - 100);
        },100)

        return ()=>{
            clearInterval(interval)
        }
      
    },[])
    
    return (
   
        <progress max={timeOut} value={remainingTime} className={mode}/>
    
  )
}
