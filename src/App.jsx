// Import required  hooks
import { useState, useEffect } from 'react'
import { DogFact } from "./components/DogFact";

const BASE_URL = "https://dogapi.dog/api/v2/facts";

export const App = () => {
  // Hint: Initialize state for storing the dog fact
  const [dogFact, setDogFact] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDogFact = async () => {
      try {
        const response = await fetch(BASE_URL);
        const result = await response.json();
        setDogFact(result.data[0].attributes.body);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDogFact()
  }, [])



  // Hint: Create a function to fetch the dog fact

  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts

  return (
    <div className="App">
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && <DogFact dogFact={dogFact} />}
    </div>
  );
};
