import React from "react";

export interface SliderProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
