import React from "react";
import styled from "styled-components";
import { ChartBar } from "./ChartBar";

export const Charts = ({ expenses }) => {
  const maximumPrice = 5000;
  const month = [
    {
      label: "январь",
      currentPrice: 0,
    },
    {
      label: "февраль",
      currentPrice: 0,
    },
    {
      label: "март",
      currentPrice: 0,
    },
    {
      label: "апрель",
      currentPrice: 0,
    },
    {
      label: "май",
      currentPrice: 0,
    },
    {
      label: "июнь",
      currentPrice: 0,
    },
    {
      label: "июль",
      currentPrice: 0,
    },
    {
      label: "август",
      currentPrice: 0,
    },
    {
      label: "сентябрь",
      currentPrice: 0,
    },
    {
      label: "октябрь",
      currentPrice: 0,
    },
    {
      label: "ноябрь",
      currentPrice: 0,
    },
    {
      label: "декабрь",
      currentPrice: 0,
    },
  ];
  expenses.forEach((item) => {
    const filteredPrice = item.date.getMonth();
    month[filteredPrice].currentPrice += item.amount;
  });
  return (
    <ChartDiv>
      {month.map((item) => (
        <ChartBar key={item.label} {...item} maximumPrice={maximumPrice} />
      ))}
      <ChartBar />
    </ChartDiv>
  );
};
const ChartDiv = styled.div`
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-between;
  height: 151px;
  padding: 1rem;
`;
