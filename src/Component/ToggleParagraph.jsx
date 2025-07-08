import { useState } from "react";

const ToggleParagraph = () => {
  const [isVisible, setIsVisible] = useState(false);

  const HandleToggle = () => {
    setIsVisible(!isVisible); // handle true / false
  };

  return (
    <>
      <button onClick={HandleToggle}>{isVisible ? "Hide" : "Show"}</button>

      {isVisible && <p>"This is secret message"</p>}
    </>
  );
};
export default ToggleParagraph;
