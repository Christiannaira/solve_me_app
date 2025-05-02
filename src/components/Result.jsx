import React from 'react'

const Result = ({userAnswers}) => {
  return (
    <div>
        Result
        <br />
        {userAnswers[0]}
        {userAnswers[1]}
        {userAnswers[2]}

    </div>
  )
}

export default Result
