import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Plane ticket", amount: 294.67, date: new Date(2021, 6, 11) },
    { title: "Car Insurance", amount: 224.35, date: new Date(2021, 3, 30) },
    { title: "Food", amount: 2934.33, date: new Date(2021, 2, 22) },
    { title: "Bus ticket", amount: 94.6, date: new Date(2021, 2, 31) },
  ];

  const handleAddExpense = expense => {
    console.log('In App.js')
    console.log(expenses)
  }

  return (
    <div>
      <NewExpense onExpenseAdded = {handleAddExpense}/>
      <Expenses expenses = {expenses} />
    </div>
  );
}

export default App;
