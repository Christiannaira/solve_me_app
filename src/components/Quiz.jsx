import React, { useState } from 'react';
import Result from './Result';


const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const[userAnswers, setUserAnswers] = useState([]);
    const[isSolveFinished, setIsSolveFinished] = useState(false);

    const answerList = [null, null, null];

    const contents = [
        {question: "What is the main purpose of React?",
         options: ["To style web pages", "To connect to databases", "To build user interfaces", "To manage server-side logic"],
         answer: "To build user interfaces"
        },
        {question: "Which of the following is used to pass data from one component to another in React?",
        options: ["state", "setState", "props", "render"],
        answer: "props"
           },
        {question: "What is the correct syntax to create a functional component in React?",
        options: ["class MyComponent extends React.Component {}", "function MyComponent() { return <div />; }", "React.createComponent(MyComponent)", "new React.Component(MyComponent)"],
        answer: "function MyComponent() { return <div />; }"
        },
    ]


    const next = () => {

        if (currentQuestion === (contents.length - 1)) {
            setIsSolveFinished(true);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }

    }

    const prev = () => {

        setCurrentQuestion(currentQuestion - 1);

    }

    const handleOption = (option) => {

        if (currentQuestion === (contents.length - 1)) {
            setIsSolveFinished(true);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }

        console.log(userAnswers);
    }

    if (isSolveFinished) {
        return <Result/>;
    }


  return (
    <div className='quiz_main container-sm border mt-5 rounded text-center p-5'>

      <h1>Solve Me App</h1>

      <div className='quiz_main_content mt-5'>

        <h2>{contents[currentQuestion].question}</h2>
        
        <div className='option_main_content d-flex flex-column'>

            {contents[currentQuestion].options.map((option, key) => {
                return <button key={key} className='btn btn-success m-1 p-2' type='button' onClick={() => {
                    handleOption(option);
                }}>{option}</button>
            })}

        </div>

        <div className="content_navigation mt-5 d-flex justify-content-between">
            <button type='button' className='btn btn-primary' onClick={prev} disabled={currentQuestion === 0}>Prev</button>
            <button type='button' className='btn btn-primary' onClick={next}>Next</button>
        </div>



      </div>
     
    </div>
  )
}

export default Quiz
