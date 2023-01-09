import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div>
        <h2 className="expense-item__description">Car Insurance</h2>
        <div className="expense-item__price">$294.90</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
