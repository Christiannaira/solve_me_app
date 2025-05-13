import ApiTesting from "./components/ApiTesting";
import Quiz from "./components/Quiz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>

        <Router>

          <Routes>

            <Route path="/" element={<Quiz/>}/>
            <Route path="/api" element={<ApiTesting/>}/>

          </Routes>

        </Router>

        
    </>
  )
}

export default App
