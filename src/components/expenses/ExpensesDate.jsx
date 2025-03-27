import React from "react";
import styled from "styled-components";

export const ExpensesDate = ({date}) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("ru-Us", { month: "long" });
  const day = date.toLocaleString("ru-Us", { day: "2-digit" });
  return (
    <DivExpensesDate>
      <DivExpensesMonth>{month}</DivExpensesMonth>
      <DivExpensesYear>{year}</DivExpensesYear>
      <DivExpensesDay>{day}</DivExpensesDay>
    </DivExpensesDate>
  );
};
const DivExpensesDate = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  gap: 5px;
  justify-content: center;
`;
const DivExpensesMonth = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`;
const DivExpensesYear = styled.div`
  font-size: 0.75rem;
`;
const DivExpensesDay = styled.div`
  font-weight: 900;
  font-size: 1.5rem;
`;
