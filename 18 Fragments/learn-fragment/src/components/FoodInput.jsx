import styles from "./FoodInput.module.css";
export default function FoodInput({handleKeyDown}){
  
  


  return(
    <>
      <input type="text" placeholder="Enter Food Item here " className={styles.foodInput} onKeyDown={handleKeyDown}></input>
      
    </>
  )
}