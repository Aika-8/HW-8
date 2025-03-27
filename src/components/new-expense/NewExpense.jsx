import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { ExpenseForm } from "./ExpenseForm";
import { Expenses } from "../expenses/Expenses";
import { Header } from "../Header";

export const NewExpense = ({ onPageChange }) => {
  const [state, setState] = useState(false);
  const showHandler = () => {
    setState((prev) => !prev);
  };

  const [expenses, setExpenses] = useState([]);
  const getNewExpense = (newObject) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, newObject];
      return updatedExpenses;
    });
  };
  const handleDelete = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };
  return (
    <>
      {state && <Header onPageChange={onPageChange}/>}
      <ContentWrapper>
        {state ? (
          <>
            <DivWrapper>
              <ExpenseForm onShow={showHandler} onNewExpense={getNewExpense} />
            </DivWrapper>
            <ExpensesWrapper>
              <Expenses array={expenses} onDelete={handleDelete} />
            </ExpensesWrapper>
          </>
        ) : (
          <DivBtn>
            <Button
              variant={"addingNewExpense"}
              style={{ width: "228px" }}
              onClick={showHandler}
            >
              Добавить новый расход
            </Button>
          </DivBtn>
        )}
      </ContentWrapper>
    </>
  );
};
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px; 
`;

const ExpensesWrapper = styled.div`
  width: 800px;
  height: 500px;
  overflow-y: auto;
  background-color: #1f1f1f;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
const DivBtn = styled.section`
  width: 780px;
  height: 200px;
  background-color: #ad9be9;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 250px;
`;
const DivWrapper = styled.div`
  width: 780px;
  height: auto;
  padding: 20px;
  background-color: #ad9be9;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
