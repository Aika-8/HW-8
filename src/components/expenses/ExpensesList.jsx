import React from "react";
import { ExpensesItem } from "./ExpensesItem";

export const ExpensesList = ({ products = [], onDelete }) => {
  return (
    <ul>
      {products.map((item) => (
        <ExpensesItem key={item.id} {...item} onDelete={onDelete} />
      ))}
    </ul>
  );
};
