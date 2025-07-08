import "./styles.css";
import Greeting from "./Component/Greeting";
import AgeDisplay from "./Component/AgeDisplay";
import InputTracker from "./Component/InputTracker";
import ToggleParagraph from "./Component/ToggleParagraph";
import MultipleButtons from "./Component/MultipleButtons";
import FruitList from "./Component/FruitList";
import EvenOdd from "./Component/EvenOdd";
import ColorChanger from "./Component/ColorChanger";
import Form from "./Component/Form";
import UserCard from "./Component/UserCard";

function App() {
  const ArrayFruits = ["Apple", "Banana", "Orange", "Graphs"];
  return (
    <div className="App">
      {/*01- Create a Greeting Component*/}
      <Greeting name="Shoaib" />
      {/*02 - Dynaimic Age Display*/}
      <AgeDisplay />
      {/*03 input tracker*/}
      <InputTracker />
      {/*04 toggle visibility*/}
      <ToggleParagraph />
      {/*05- Multiple Button, One State  */}
      <MultipleButtons />
      {/*06- List Of Fruit   */}
      <FruitList fruits={ArrayFruits} />
      {/*07 = Check number Even or Odd */}
      <EvenOdd />
      {/*08 = Color Changer */}
      <ColorChanger />
      {/*09- Simple Form  */}
      <Form />
      {/* 10 - Component Composition  */}
      <UserCard
        name="Muhammad Shoaib"
        email="msofficial.cs@gmail.com"
        bio="frontend developer "
      />
    </div>
  );
}
export default App;