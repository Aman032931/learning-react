import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItem,setTodoItem] = useState([]);

  const addItem = (itemName, itemDueDate) => {
    // console.log(`New Item Added ${itemName} and Date is ${itemDueDate}`);
    const newTodoItems = [...todoItem, {name: itemName,
      dueDate: itemDueDate}];
    setTodoItem(newTodoItems);
  }
  
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItem.filter(item => item.name !== todoItemName)
    setTodoItem(newTodoItems);
    // console.log(`item Deleted: ${todoItemName}`);
    
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleAddBtn={addItem}/>
      {todoItem.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItem} onDeleteClick={handleDeleteItem}/>
    </center>
  );
}

export default App;
