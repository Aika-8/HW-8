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
      throw new Error();
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
      {users.map((user) => (
        <li key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
          <p>Company: {user.company.name}</p>
        </li>
      ))}
    </UsersContainer>
  );
};
const UsersContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 20px;
`;
