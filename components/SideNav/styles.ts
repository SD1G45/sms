import styled from "styled-components";

export const StyledDiv = styled.div`
  margin-left: 10px;
  padding-top: 40px;
  margin-right: 10px;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
`;

export const Item = styled.td<{ active: boolean }>`
  border-left: 2.75px solid ${(props) => (props.active ? "#4881F0" : "#C4C4C4")};
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 10px;
  cursor: pointer;
  white-space: nowrap;
`;

export const Header = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 17.5px;
`;
