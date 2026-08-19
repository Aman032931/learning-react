import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItem = [
    {
      name: "Buy Milk",
      dueDate: "8/11/2026",
    },
    {
      name: "Go to College",
      dueDate: "8/11/2026",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    }
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItem} />
    </center>
  );
}

export default App;
