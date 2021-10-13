import styled from "styled-components";

interface Props {
  invert: boolean;
}

export const StyledButton = styled.button<Props>`
  width: 100%;
  padding: 20px;
  background-color: ${(props) => (props.invert ? "white" : "#4881F0")};
  border-radius: 25px;
  border: 2px solid ${(props) => (props.invert ? "#4881F0" : "white")};
  color: ${(props) => (props.invert ? "#4881F0" : "white")};

  &:hover {
    opacity: 70%;
  }
`;
