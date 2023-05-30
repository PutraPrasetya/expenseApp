import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      id: 1,
      title: "Car Insurances",
      amount: 256.65,
      date: new Date(2022, 4, 15),
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

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expense={expenses} />
    </div>
  );
}

export default App;

