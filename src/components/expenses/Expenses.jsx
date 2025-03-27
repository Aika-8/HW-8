import React, { useState } from "react";
import { Card } from "../UI/Card";
import { Charts } from "../charts/Charts";
import { ExpensesList } from "./ExpensesList";
import { ExpenseFilter } from "../expense-filter/ExpenseFilter";

export const Expenses = ({ array = [], onDelete }) => {
  const [selectValue, setSelectValue] = useState("2025");
  const filtredExpenses = array.filter(
    (item) => item.date.getFullYear().toString() === selectValue
  );
  console.log(filtredExpenses);
  return (
    <Card>
      <ExpenseFilter
        value={selectValue}
        onChange={(event) => setSelectValue(event.target.value)}
      />
      <Charts expenses={array} />
      <ExpensesList products={filtredExpenses} onDelete={onDelete} />
    </Card>
  );
};
