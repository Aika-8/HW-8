import React from "react";
import { ExpensesDate } from "./ExpensesDate";
import styled from "styled-components";
import { Button } from "../UI/Button";

export const ExpensesItem = ({ title, amount, date, id,  onDelete }) => {
  return (
    <LiExpensesItem>
      <DivTextDate>
        <ExpensesDate date={date} />
        <StyledH2>{title}</StyledH2>
      </DivTextDate>
      <DivAmountDelete>
        <ItemDescription>
          <ItemPrice>${amount}</ItemPrice>
        </ItemDescription>
        <Button variant={"delete"} onClick={() => onDelete(id)}>
          Delete
        </Button>
      </DivAmountDelete>
    </LiExpensesItem>
  );
};
const LiExpensesItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: 0.5rem 1rem;
  margin: 1rem 0.5rem;
  border-radius: 12px;
  background-color: #4b4b4b;
`;
const DivTextDate = styled.div`
  display: flex;
  align-items: center;
`;
const StyledH2 = styled.h2`
  color: #3a3a3a;
  font-size: 18px;
  flex: 1;
  margin: 0 1rem;
  color: white;
`;
const DivAmountDelete = styled.div`
  display: flex;
  gap: 10px;
`;
const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;
`;
const ItemPrice = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.7rem 1rem;
  border-radius: 12px;
`;
