import React, { useState } from "react";
import { Button } from "../UI/Button";
import { FormInput } from "../UI/FormInput";
import styled from "styled-components";
export const ExpenseForm = ({ onShow, onNewExpense }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "" && +amount !== "" && date !== "") {
      const newExpense = {
        id: Date.now().toString(),
        title: title,
        amount: amount,
        date: new Date(date),
      };
      onNewExpense(newExpense);
    } else {
      alert("Can't be empty!");
    }
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
      <StyledSection>
        <LeftDiv>
          <FormInput
            labelText="Заголовок"
            inputType="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormInput
            labelText="Датировать"
            inputType="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </LeftDiv>
        <RightDiv>
          <FormInput
            labelText="Количество"
            inputType="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <DivBtn>
            <Button variant={"addingNewExpense"} type="button" onClick={onShow}>
              Отмена
            </Button>
            <Button variant={"addingNewExpense"} type="submit">
              Добавить расходы
            </Button>
          </DivBtn>
        </RightDiv>
      </StyledSection>
    </form>
    </>
  );
};
const StyledSection = styled.section`
  display: flex;
  gap: 20px;
`;
const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
const DivBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;
