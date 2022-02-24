import { useEffect, useRef, useState } from "react";
import { getRefValue } from "../../lib/hooks";
import { AccordionProps } from "./types";

import { Chevron, Content, ItemContainer, ListItem, Title } from "./styles";

const AccordionItem = ({
  data,
  isOpen,
  btnOnClick,
}: {
  data: AccordionProps;
  isOpen: boolean;
  btnOnClick: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = getRefValue(contentRef);

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <ListItem>
      <Title>{data.title}</Title>
      <Chevron onClick={btnOnClick} active={isOpen}></Chevron>
      <ItemContainer style={{ height }}>
        <Content ref={contentRef}>{data.content}</Content>
      </ItemContainer>
    </ListItem>
  );
};

export default AccordionItem;
