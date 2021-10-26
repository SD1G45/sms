import styled from "styled-components";
import { TextFieldProps } from "./types";

export const TextFieldContainer = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 50px;
`;

export const StyledTextField = styled.input<Omit<TextFieldProps, "label">>`
  padding: 12px;
  border: 1px solid
    ${(props) =>
      props.error ? props.theme.colors.error : props.theme.colors.lightGray};
  border-radius: 10px;
  width: 100%;
  margin-bottom: ${(props) => (props.error ? 8 : 0)}px;
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.error};
  font-size: 0.9rem;
  margin-left: 7px;
`;
