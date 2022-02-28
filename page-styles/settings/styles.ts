import styled from "styled-components";
import Button from "../../components/Button";
import { GridBoxProps } from "./types";

export const GridContainer = styled.div`
  display: flex;
  align-items: stretch;
`;

export const Box = styled.div<GridBoxProps>`
  border: 2px solid #bec8d2;
  // border-left: ${(props) => (props.left ? "none" : "2px solid #BEC8D2")}
  padding: 15px;

  width: 350px;
  height: 250px;
`;

export const BoxHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;
export const CardHeading = styled.h1`
  font-size: 2.2rem;
  color: #4881f0;
  margin-bottom: 20px;
  text-align: left;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  padding-top: 1px;
  padding-bottom: 12px;
  color: gray;
`;

export const StyledButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  color: #4881f0;
  background-color: white;
  text-align: left;
  margin-left: -15px;
  height: 10px;
`;

export const LinkDiv = styled.div`
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  padding-bottom: 7px;
`;

export const StyledLink = styled(Label)`
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;
