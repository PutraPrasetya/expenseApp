import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // one state method
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // });

  const titleCHangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // one state method
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // });

    // one state method (safest way)
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // one state method
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // one state method
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setShow(0);
  };

  //Hide-Show Logic
  const [show, setShow] = useState(false);

  const closeHandler = () => {
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setShow(false);
  };

  const addExpensesHandler = () => {
    setShow(true);
  };

  if (!show) { 
    return <button onClick={addExpensesHandler}>Add More Expense</button>
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
    <div className="new-expense__control">
      <label>Title</label>
      <input type="text" value={enteredTitle} onChange={titleCHangeHandler} />
    </div>
    <div className="new-expense__control">
      <label>Amount</label>
      <input
        type="number"
        min="0.01"
        step="0.01"
        value={enteredAmount}
        onChange={amountChangeHandler}
      />
    </div>
    <div className="new-expense__control">
      <label>Date</label>
      <input
        type="date"
        min="2019-01-01"
        max="2025-12-31"
        value={enteredDate}
        onChange={dateChangeHandler}
      />
    </div>
  </div>
  <div className="new-expense__action">
    <button onClick={closeHandler}>Cancel</button>
    <button type="submit">Save</button>
  </div>
    </form>
  );
};

export default ExpenseForm;
