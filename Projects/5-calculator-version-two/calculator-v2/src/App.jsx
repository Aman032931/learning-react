import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onBtnClick = (buttonText) => {
    if(buttonText=== 'C'){
      setCalVal("");
    } else if (buttonText === '='){
      const result = eval(calVal);
      setCalVal(result);
    } else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    } 
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display calVal={calVal}></Display>
        <ButtonContainer onBtnClick={onBtnClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
