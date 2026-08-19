import styles from "./Item.module.css";
const Item = ({ foodItem , bought, handleBuyButton }) => {

 

  return (
    <>
      <li className ={`${styles["kg-item"]} list-group-item ${bought && "active"}`}>
        <span className={styles["tag-span"]}>
          {foodItem}
        </span>
        <button onClick={handleBuyButton}
        className={`${styles.btn}  btn btn-info`}
        >Buy</button>
      </li>
    </>
  );
};

export default Item;
