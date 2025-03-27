import React, { useState } from "react";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";
import styled from "styled-components";

export const Login = ({ onShowTodo }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setError("Please fill in all fields");
    } else {
      setError("");
      onShowTodo();
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        variant={"login"}
        type={"email"}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        variant={"login"}
        type={"password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <ErrorText>{error}</ErrorText>}
      <Button variant="send" type="submit">
        send
      </Button>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 30px 0px;
`;
const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  font-weight: 600;
`;
