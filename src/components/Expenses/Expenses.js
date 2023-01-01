import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css"
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
    const expenses = props.expenses;

    function renderExpenseItem (i) {
        return (
        <ExpenseItem
            title={expenses[i].title}
            amount={expenses[i].amount}
            date={expenses[i].date}
          ></ExpenseItem>
          );
    }

    const [selectedYear, setSelectedYear] = useState(year)

    const handleDropdownChanged = (year) => {
        setSelectedYear(year)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onDropdownSelected = {handleDropdownChanged}/>
                {renderExpenseItem(0)}
                {renderExpenseItem(1)}
                {renderExpenseItem(2)}
                {renderExpenseItem(3)}
            </Card>
        </div>
    );
}

export default Expenses