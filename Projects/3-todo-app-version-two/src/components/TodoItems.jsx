import styles from './TodoItems.module.css';
import TodoItem from "./TodoItem";

function TodoItems({ todoItems }) {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item)=> <TodoItem todoDate={item.dueDate} todoName={item.name} />)}
        
      </div>
    </>
  );
}

export default TodoItems;
