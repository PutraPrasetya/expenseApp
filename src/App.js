import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expense = [
    {
      id: 1,
      title: "Car Insurances",
      amount: 256.65,
      date: new Date(2023, 4, 15),
    },
    {
      id: 2,
      title: "Biznet",
      amount: 300,
      date: new Date(2023, 6, 8),
    },
    {
      id: 3,
      title: "Switch Online",
      amount: 100.2,
      date: new Date(2023, 7, 4),
    },
    {
      id: 4,
      title: "Youtube",
      amount: 50.5,
      date: new Date(2023, 8, 12),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expense={expense} />
    </div>
  );
}

export default App;

