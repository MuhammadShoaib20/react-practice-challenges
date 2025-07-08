import { useState } from "react";

const MultipleButtons = () => {
  const [number, setNumber] = useState(0);

  const IncreaseNumber = () => {
    setNumber(number + 1); // increase number
  };
  const DecreaseNumber = () => {
    setNumber(number - 1); // decreae number
  };

  return (
    <div style={{ textAlign: "center" }}>
      <p>Now your luckyNumber is {number}</p>
      <button onClick={IncreaseNumber} disabled={number >= 20}>
        Increase Number
      </button>
      <button onClick={DecreaseNumber} disabled={number <= 0}>
        Decrease Number
      </button>
      <button onClick={() => setNumber(0)}> Reset </button>
    </div>
  );
};
export default MultipleButtons;
