import React, { useState } from 'react'

const Result = ({userAnswers, contents}) => {

 
  return (
    <div className='container-sm mt-5 text-center border p-5 rounded'>

        
        <h3 className='fs-2'>Your Answers: </h3>
        
        <div className='border bg-primary rounded p-5 mt-2'>
            {userAnswers.map((answer, key) => {
                return <p key={key} className='fs-3 text-white'>{answer}</p>
            })}
        </div>

        <div>
            <button type='button' className='btn btn-success fs-2 p-2 mt-5'>Get Result</button>
        </div>
        
        <h2>{score}</h2>

    </div>
  )
}

export default Result
