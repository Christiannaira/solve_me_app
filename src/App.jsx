import Quiz from "./components/Quiz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>

        <Router>

          <Routes>

            <Route path="/" element={<Quiz/>}/>

          </Routes>

        </Router>

        
    </>
  )
}

export default App
