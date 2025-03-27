import React, { use, useState } from "react";
import { Button } from "./UI/Button";
import styled from "styled-components";
import { Users } from "../Users/Users";

export const Header = ({ onPageChange }) => {
  const [showUsers, setShowUsers] = useState(false);
  const handleUsers = () => {
    setShowUsers((prev) => !prev);
  };
  return (
    <>
      {showUsers ? (
        
        <Users onShowUsers={handleUsers}/>
      ) : (
        <StyledHeader>
          <DivHeader>
            <h1>Expense-Tracker</h1>
            <Button variant={"getUsers"} onClick={() => onPageChange("users")}>
              Get users
            </Button>
          </DivHeader>
        </StyledHeader>
      )}
    </>
  );
};
const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  background-color: #f8dfff;
`;
const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  width: 97%;
  height: 65px;
  background-color: #a892ee;
  box-shadow: 1px 1px 1.5px 1.7px rgb(175, 174, 174);
`;
