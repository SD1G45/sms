import styled from "styled-components";
import Button from "../../components/Button";

export const GridContainer = styled.div`
  display: flex;
  align-items: stretch;
`;

export const Box = styled.div`
  border: 2px solid black;
  padding: 15px;
  margin: 20px;
  width: 350px;
  height: 250px;
`;

export const BoxHeading = styled.h2`
  font-size: 1rem;
`;
export const CardHeading = styled.h1`
  font-size: 1.5rem;
  margin-left: 20px;
  // text-align: left;
`;

export const Description = styled.p`
  font-size: 0.9rem;
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
