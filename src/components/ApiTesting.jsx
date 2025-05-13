import { useEffect } from "react";
import axios from "axios";


const ApiTesting = () => {

  
    const options = {
    method: 'GET',
    url: 'https://500-quiz-api.p.rapidapi.com/api',
    headers: {
        'x-rapidapi-key': '1e8571aaf4msh6c0ad5a8f8c2affp1e9d7ejsnc63beb1b3a52',
        'x-rapidapi-host': '500-quiz-api.p.rapidapi.com'
    }
    };

    useEffect(() => {
        try {
	        const response = axios.request(options);
	        console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }, []);

  return (

    <div>
        
        
        
    </div>
  )
}

export default ApiTesting
