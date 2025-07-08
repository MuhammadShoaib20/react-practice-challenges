import React from "react";

const FruitList = (props) => {
  return (
    <div className="App">
      <h1>List Of Fruits</h1>
      <ul>
        {props.fruits.map((fruits, index) => (
          <li key={index}>{fruits}</li>
        ))}
      </ul>
    </div>
  );
};
export default FruitList;
