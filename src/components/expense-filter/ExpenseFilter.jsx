import React from "react";
import styled from "styled-components";

export const ExpenseFilter = ({ value, onChange }) => {
  return (
    <ExpensesFilter>
      <FilterControls>
        <FilterLabel htmlFor="filterId">Фильтр по году</FilterLabel>
        <FilterSelect id="filterId" value={value} onChange={onChange}>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </FilterSelect>
      </FilterControls>
    </ExpensesFilter>
  );
};
const ExpensesFilter = styled.div`
  color: white;
  padding: 0 1rem;
`;
const FilterControls = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;
const FilterLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const FilterSelect = styled.select`
  font: inherit;
  padding: 0.5rem 2rem;
  font-weight: bold;
  border-radius: 6px;
`;
