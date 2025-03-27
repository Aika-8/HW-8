import React from "react";
import styled from "styled-components";

export const Card = ({ children }) => {
  return <DivWrapperCard>{children}</DivWrapperCard>;
};
const DivWrapperCard = styled.div`
  width: 100%;
  padding: 16px 28px;
  background-color: #1f1f1f;
  border-radius: 12px;
`;
