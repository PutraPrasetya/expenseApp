import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car Insurances",
    amount: 256.65,
    date: new Date(2021, 4, 15),
  },
  {
    id: 2,
    title: "Biznet",
    amount: 300,
    date: new Date(2021, 6, 8),
  },
  {
    id: 3,
    title: "Switch Online",
    amount: 100.2,
    date: new Date(2020, 7, 4),
  },
  {
    id: 4,
    title: "Youtube",
    amount: 50.5,
    date: new Date(2019, 8, 12),
  },
];

const App = () => {
  //expenses memiliki nilai yg ada di dummy_expenses
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expense={expenses} />
    </div>
  );
}

export default App;

