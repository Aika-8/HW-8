import React from "react";
import { Input } from "./Input";
import styled from "styled-components";

export const FormInput = ({ value, id, labelText, inputType, onChange }) => {
  return (
    <DivFormInput>
      <label htmlFor={id}>{labelText}</label>
      <Input value={value} id={id} type={inputType} onChange={onChange} />
    </DivFormInput>
  );
};
const DivFormInput = styled.div`
  width: 340px;
  height: 64px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
