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
    <div>
      <h2>{contents[currentQuestion].question}</h2>
    </div>
  )
}

export default Quiz
