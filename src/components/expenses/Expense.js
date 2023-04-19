import React, { useState } from "react";

import Card from "../ui/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    console.log("expenses.js");
    setFilteredYear(selectedYear);
  };

  // const filterChangeHandler = (selectedYear) => {
  //   setFilteredYear(selectedYear);
  // };

const filteredExpenses = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === filteredYear;

})



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangedHandler}
        />

        <ExpensesChart expenses = {filteredExpenses}/>
        <ExpensesList items = {filteredExpenses}/>
      
      
      </Card>
    </div>
  );
};

export default Expenses;
