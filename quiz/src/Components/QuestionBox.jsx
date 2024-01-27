import { useState } from 'react'
import React from 'react'
import '../App.css'
import Questions from '../Question'
import Result from './Result'   



function QuestionBox() {
    // setting states
    const[currentQues, setCurrentQues] = useState(0)
    const[score, setScore] = useState(0)
    const[correctAns, setCorrectAns] = useState(0)
    const[isHighlighted, setIshighlighted] = useState(false)


    // handling event when the user click any option
    const handleAnswerInput = (isCorrect) => {

        if (isCorrect) {
            setScore((prevScore) => prevScore + 20);
            setCorrectAns((prevCorrectAns) => prevCorrectAns + 1);
        }    
        setCurrentQues((prevQues) => prevQues + 1);
    }



    // Event handlers when the user highlights the question
    const handleHighLight = () => {
        setIshighlighted(true)
    }


    const handleRemove = () => {
        setIshighlighted(false)
    }

    const restartGame = () => {
        setScore(0);
        setCorrectAns(0)
        setCurrentQues(0)
    }

    // condition if the current state reaches above 4 passing in score and correct answers as props
    if (currentQues > 4) {
        return(
       <Result score={score} correct={correctAns} restart={restartGame}/>)
    }

  
    return (
    <div className = "box">
        <div className="quesandnum">
            <h2 style={{color:"white"}}>Question {currentQues + 1} of 5</h2>
            <p style = {{color: isHighlighted?"red":"black"}} className = "question">{Questions[currentQues].text}</p>
        </div>

        <div className='btn-container'>
            {Questions[currentQues].options.map((ans, i)=>{
            return (
            <button className = "btn" onClick = {()=>handleAnswerInput(ans.isCorrect)}key = {i}>{ans.text}</button>)
            })}
        </div>
        
        <div className='highlight-btns'>
            <button className='hbtn' onClick={handleHighLight}>Highlight</button>
            <button className="hbtn"onClick={handleRemove}>Remove Highlight</button>
        </div>

    </div>
  )

}

export default QuestionBox
