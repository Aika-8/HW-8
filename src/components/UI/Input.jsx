import React from "react";
import styled from "styled-components";
const StylesInput = (variant) => {
  switch (variant) {
    case "login": {
      return {
        width: "350px",
        height: "40px",
        border: "1px solid darkgray",
      };
    }
  }
};
export const Input = ({ value, id, type, variant, onChange, ...rest }) => {
  return (
    <StyledInput
      value={value}
      id={id}
      type={type}
      variant={variant}
      onChange={onChange}
      {...rest}
    />
  );
};
const StyledInput = styled.input`
  width: 100%;
  height: 39px;
  border-radius: 10px;
  /* border: 1px solid darkgray; */
  background-color: #ffffff;
  padding: 0px 15px;
  &:focus {
    outline-color: #4d4e51;
  }
  ${(props) => StylesInput(props.variant)}
`;
