import styled from "styled-components";
import Button from "../../components/Button";
import Chevron from "../../components/Accordion/Chevron";

export const StyledChevron = styled(Chevron)`{
	border-style: solid;
	border-width: 0.25em 0.25em 0 0;
	content: '';
	display: inline-block;
	height: 0.45em;
	left: 0.15em;
	position: relative;
	top: 0.15em;

	vertical-align: top;
	width: 0.45em;
  transform: ${(props) => (props.rotated ? "rotate(90deg)" : "rotate(0deg)")};
`;

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
