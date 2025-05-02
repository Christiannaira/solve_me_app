import React from 'react';

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

const Quiz = () => {
  return (
    <div>
      {contents[0].question}
    </div>
  )
}

export default Quiz
