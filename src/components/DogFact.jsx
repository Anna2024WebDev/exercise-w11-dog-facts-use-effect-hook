// DogFact Component
export const DogFact = ({ dogFact }) => {

  console.log(dogFact);
  // Hint: Extract the 'body' from 'attributes' of the 'fact' prop

  // Hint: Render the 'cleanFact' if available, otherwise show a loading message
  return <div><p>{dogFact}</p></div>;
};

// Hint: To use this component, import it in your main App component and pass the 'fact' prop to it.
// Example: <DogFact fact={yourFactData} />
