import React from "react";
import { StyledCard } from "./styles";

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
