import { useState } from "react";

const EvenOdd = () => {
  const [number, setNumber] = useState("");
  const handlenum = (e) => {
    setNumber(e.target.value);
  };

  const isValid = number !== "" && !isNaN(number);
  const result = isValid ? (number % 2 === 0 ? "Even" : "Odd") : "";

  return (
    <div className="App">
      <input
        type="text"
        value={number}
        placeholder="Check Even or Odd"
        onChange={handlenum}
      />
      <p>{isValid ? `result: ${result}` : ""}</p>
    </div>
  );
};
export default EvenOdd;
