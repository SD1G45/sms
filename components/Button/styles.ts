import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./types";

export const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  padding: 12px 14px;
  background-color: ${(props) => (props.invert ? "white" : "#4881F0")};
  border-radius: 18px;
  border: 2px solid ${(props) => (props.invert ? "#4881F0" : "white")};
  color: ${(props) => (props.invert ? "#4881F0" : "white")};
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    opacity: 70%;
  }
`;
