import { useState } from "react";
import { AccordionProps } from "./types";
import AccordionItem from "./AccordionItem";
import { Accordion } from "./styles";

const AccordionMenu = ({ items }: { items: Array<AccordionProps> }) => {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  return (
    <Accordion>
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          data={item}
          isOpen={idx === currentIdx}
          btnOnClick={() => btnOnClick(idx)}
        />
      ))}
    </Accordion>
  );
};

export default AccordionMenu;
