import styled from "styled-components";
import { TextAreaProps } from "./types";

export const LabelContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  display: block;
  padding-bottom: 7px;
`;

export const StyledLink = styled(Label)`
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;

export const StyledTextArea = styled.textarea<Omit<TextAreaProps, "label">>`
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
