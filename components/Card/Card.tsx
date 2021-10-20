import React from "react";
import { StyledCard } from "./styles";
import { CardProps } from "./types";

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children }, ref) => {
    return (
      <StyledCard className={className} ref={ref}>
        {children}
      </StyledCard>
    );
  }
);

Card.displayName = "Card";
export default Card;
