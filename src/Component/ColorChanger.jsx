import { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("black");

  return (
    <div>
      <h1 style={{ color: color }}>Change my Color</h1>
      <button onClick={() => setColor("Red")}>Red</button>
      <button onClick={() => setColor("Green")}>Green</button>
      <button onClick={() => setColor("Blue")}>Blue</button>
    </div>
  );
};
export default ColorChanger;
