import React, { useState } from 'react'

const Result = ({userAnswers, contents, setIsSolveFinished, setCurrentQuestion}) => {

  const [score, setScore] = useState(0);

  const [switchButton, setSwitchButton] = useState(false);

  

  const handleResult = () => {
 
    let newScore = 0;

    contents.forEach((answerList, index) => {
        if (answerList.answer === userAnswers[index]) {
            newScore += 1;
        }
    })

    setScore(newScore);
    setSwitchButton(true);

  }

  const handleRestart = () => {

    setIsSolveFinished(false);
    setCurrentQuestion(0);

  }


 
  return (
    <div className='container-sm mt-5 text-center border p-5 rounded'>

        
        <h3 className='fs-2'>Your Answers: </h3>
        
        <div className='border bg-success rounded p-5 mt-2'>
            {userAnswers.map((answer, key) => {
                return <p key={key} className='fs-3 text-white'>{answer}</p>
            })}
        </div>

        <div>
            <button type='button' className='btn btn-primary fs-2 p-2 mt-5' onClick={handleResult} disabled={switchButton? true : false}>Get Result</button>
        </div>

        <h2 className='mt-2 fs-2'>{score} / {contents.length}</h2>

        <button type='button' onClick={handleRestart} className='btn btn-info mt-2'>Start Again</button>

    </div>
  )
}

export default Result
