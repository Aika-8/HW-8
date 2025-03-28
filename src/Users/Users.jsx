import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setUsers(result);
      console.log(result);
    } catch (error) {
      throw new Error("Ошибка при загрузке пользователей!", error);
    }
  };
  useEffect(() => {
    let controler = new AbortController();
    getUsers(controler);
    return () => {
      controler.abort();
      console.log("aborted");
    };
  }, []);
  return (
    <UsersContainer>
      <h1>Список пользователей</h1>
      <StyledDivLi>
        {users.map((user) => (
          <StyledLi key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Company: {user.company.name}</p>
          </StyledLi>
        ))}
      </StyledDivLi>
    </UsersContainer>
  );
};
const UsersContainer = styled.div`
  width: 97%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #ffffff;
  margin: 20px;
  padding: 20px 0px;
`;
const StyledDivLi = styled.div`
  width: 94%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #f8dfff;
  box-shadow: 1px 1px 1.5px 1.7px rgb(175, 174, 174);
`;
const StyledLi = styled.li`
  list-style: none;
  margin: 20px 20px;
  padding: 10px 10px;
  box-shadow: 1px 1px 1.5px 1.7px rgb(175, 174, 174);
`;
