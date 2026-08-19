import { useState } from "react";
import "./App.css";
import ErrorMsg from "./components/ErrorMsg";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = ["Dal", "Vegetables", "Rice", "Fruits", "Milk", "Mohi"];
  // Ternary Operator
  // let emptyMsg = foodItems.length === 0? <h3>I am still hungry.</h3>:null;
  // let textToShow = "Food item entered by user";
  // const [textToShow, setTextToShow] = useState("Food item entered by user");

  const [foodItems, setFoodItems] = useState([
    "Dal",
    "Bhat",
    "Aachar"
  ]);

  const onKeyDown = (e) => {
    if(event.key === 'Enter'){
      let newFoodItem = e.target.value;
      e.target.value = "";
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems);
      console.log("Food value entered is "+ newFoodItem);
    }
    // console.log(e);
    // // textToShow = e.target.value;
    // setTextToShow(e.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMsg items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
    </>
  );
}

export default App;
