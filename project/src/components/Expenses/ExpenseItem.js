import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, date, amount }) => {

  let changedTitle = 'Updated!'
  const handleClick = () => {
    // concept of state
    changedTitle = 'new' // this does not work
    console.log(changedTitle); // this works
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={handleClick}>Click me!</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
