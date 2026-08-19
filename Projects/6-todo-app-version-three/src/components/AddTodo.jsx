import { useState, useRef } from "react";
import styles from "./AddTodo.module.css";
import { MdAddComment } from "react-icons/md";

function AddTodo({ handleAddBtn }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const noOfUpdates = useRef(0);


  const handleNameChange = (e) => {
    setTodoName(e.target.value);
    noOfUpdates.current += 1;
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
    console.log(`consoleOF: ${noOfUpdates.current}`);
  };

  const handleAddBtnClicked = (e) => { 
    e.preventDefault();

    handleAddBtn(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddBtnClicked}>
        
        <div className="col-6">
          <input
            className={`${styles["input-tag"]}`}
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <MdAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
