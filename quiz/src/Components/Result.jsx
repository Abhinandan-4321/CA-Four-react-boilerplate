import React from 'react'

function Result(props) {

 

  return (
    <div className='result-container'>
        <h2 id="heading-final">Final Results</h2>
        <h3 id="score-card">{props.correct} out of 5 correct- ({props.score}%)</h3>
        <button onClick={props.restart}>Restart Game</button>
    </div>
  )
}

export default Result
