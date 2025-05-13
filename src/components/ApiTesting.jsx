import { useEffect, useState } from "react";
import axios from "axios";

const ApiTesting = () => {

  const [data, setData] = useState(null);

  useEffect(() => {

    const fetchQuiz = async () => {

      try {
        const options = {
          method: 'GET',
          url: 'https://500-quiz-api.p.rapidapi.com/api?limit=5',
          headers: {
            'x-rapidapi-key': '1e8571aaf4msh6c0ad5a8f8c2affp1e9d7ejsnc63beb1b3a52',
            'x-rapidapi-host': '500-quiz-api.p.rapidapi.com'
          }
        };

        const response = await axios.request(options);

        setData(response.data);
        

      } catch (error) {
        console.error("API error:", error);
      }

    };

    fetchQuiz(); 
    

  }, []);

  try {
    console.log(data[1]);
  } catch(error) {
    console.log(error);
  }

  return (
    <div>
      <h2>Check console for quiz data</h2>
    </div>
  );
};

export default ApiTesting;