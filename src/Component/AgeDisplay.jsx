import { useState } from "react";

const AgeDisplay = () => {
  const [age, setAge] = useState(20);

  const IncreaseAge = () => {
    setAge(age + 1);
  };

  return (
    <>
      <h1>You are now {age} year old </h1>
      <button onClick={IncreaseAge}>Click and Increase age</button>
    </>
  );
};
export default AgeDisplay;
