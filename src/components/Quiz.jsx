import React, { useState } from 'react';

const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const contents = [
        {question: "What is the main purpose of React?",
         options: ["To style web pages", "To connect to databases", "To build user interfaces", "To manage server-side logic"],
         answer: "To build user interfaces"
        },
        {question: "Which of the following is used to pass data from one component to another in React?",
        options: ["state", "setState", "props", "render"],
        answer: "props"
           },
    ]

  return (
    <div className='quiz_main container border mt-5 rounded text-center p-5'>

      <h1>Solve Me App</h1>

      <div className='quiz_main_content mt-5'>

        <h2>{contents[currentQuestion].question}</h2>
        
        <div className='option_main_content d-flex flex-column'>

            {contents[currentQuestion].options.map((option, key) => {
                return <button key={key} className='btn btn-primary m-1 p-2' type='button'>{option}</button>
            })}

        </div>



      </div>
     
    </div>
  )
}

export default Quiz
