import styled from "styled-components";
import Button from "../../components/Button";

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  color: #444;
  cursor: pointer;
  padding: 18px;
  // display: flex;
  align-items: center;
  border: none;
  border-radius: 0%;
  outline: none;
  border: 2px solid white;
  margin-left: auto;

  transition: background-color 0.6s ease;
`;
export const ButtonDiv = styled.div`
  align-items: center;
  max-width: 500px;
  display: flex;
`;

export const StyledTitle = styled.p`
  color: white;
  text-align: left;
`;

export const AccordionContent = styled.div`
  background-color: white;
  overflow: auto;
  transition: max-height 0.6s ease;
`;

export const AccordionText = styled.div`
  padding: 18px;
`;
