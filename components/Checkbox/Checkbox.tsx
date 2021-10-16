import React from "react";
import styled from "styled-components";
import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from "./styles";

const Checkbox: React.FC<any> = ({ label, className, checked, ...other }) => (
  <label>
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...other} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
    <span style={{ marginLeft: 8 }}>{label}</span>
  </label>
);

export default Checkbox;
