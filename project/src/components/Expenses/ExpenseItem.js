import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, date, amount }) => {
  // first variable => current state | secund, function to update the first variable
  const [newTitle, setNewTitle] = useState(title);

  const handleClick = () => {
    // concept of state
    setNewTitle('Updated')
    console.log(newTitle); // this works
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={handleClick}>Click me!</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
