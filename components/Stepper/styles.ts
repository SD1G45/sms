import styled from "styled-components";
import { StepProps } from "./types";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Step = styled.button<StepProps>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? props.theme.colors.primary : "white"};
  color: ${(props) => (props.active ? "white" : props.theme.colors.primary)};
  border: ${(props) =>
    props.active ? "none" : "1px solid " + props.theme.colors.primary};
`;

export const Line = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: ${(props) => props.theme.colors.lightGray};
  margin: 0px 8px;
`;

export const StepTitle = styled.p`
  font-size: 16px;
  margin-left: 8px;
`;
