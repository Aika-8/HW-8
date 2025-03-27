import React from "react";
import styled from "styled-components";

const StylesButton = (variant) => {
  switch (variant) {
    case "send": {
      return {
        width: "350px",
        height: "40px",
        fontSize: "15px",
        background: "darkblue",
        borderRadius: "8px",
        textTransform: "uppercase",
      };
    }
    case "addingNewExpense": {
      return {
        width: "160px",
        height: "51px",
        backgroundColor: "#4a026b",
        color: "#ffff",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "100%",
        letterSpacing: "0%",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "0.3s ease-out",
        "&:hover": {
          backgroundColor: "#600a87",
          boxShadow: "2px 1px 15px #3b055ee3",
        },
        "&:active": {
          backgroundColor: "#520b73",
          animation: "${scale} 0.3s",
        },
      };
    }
    case "delete": {
      return {
        fontSize: "1rem",
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#40005d",
        border: "1px solid white",
        padding: "0.7rem 1rem",
        borderRadius: "12px",
      };
    }
    case "getUsers": {
      return {
        fontSize: "1rem",
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#40005d",
        border: "1px solid white",
        padding: "0.7rem 1rem",
        borderRadius: "12px",
        "&:hover": {
          backgroundColor: "#600a87",
          boxShadow: "2px 1px 15px #3b055ee3",
        },
        "&:active": {
          backgroundColor: "#520b73",
          animation: "${scale} 0.3s",
        },
      };
    }
    default:
      return null;
  }
};
export const Button = ({ type, variant, onClick, children, ...rest }) => {
  return (
    <StyledButton type={type} variant={variant} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};
const StyledButton = styled.button`
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  ${(props) => StylesButton(props.variant)}
`;
