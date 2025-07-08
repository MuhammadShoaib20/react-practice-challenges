import { useState } from "react";

const InputTracker = () => {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <input
        value={input}
        placeholder="write something"
        type="text"
        onChange={handleInput}
      />
      <p> Hi continue typing : {input}</p>
    </>
  );
};
export default InputTracker;
