import React from "react";
import styled from "styled-components";
import { SliderProps } from "./types";

const sliderThumbStyles = (props: any) => `
  width: 25px;
  height: 25px;
  background: ${props.theme.colors.primary};
  border-radius: 50%;
  cursor: pointer;
  -webkit-transition: .2s;
  transition: opacity .2s;
`;

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: #888;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  .value {
    flex: 1;
    font-size: 2rem;
  }
  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;
    background: #efefef;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${(props) => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${(props) => sliderThumbStyles(props)}
    }
  }
`;

const Slider: React.FC<SliderProps> = ({ value, onChange }) => {
  return (
    <Styles>
      <input
        type="range"
        min={1}
        max={5}
        step={0.001}
        aria-labelledby="continuous-slider"
        value={value}
        className="slider"
        onChange={onChange}
      />
    </Styles>
  );
};

export default Slider;
