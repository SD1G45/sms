import React from 'react';
import { StyledSpinner, SpinnerWrapper } from './styles';
import { SpinnerProps } from './types';

const Spinner: React.FC<SpinnerProps> = ({ size, sizeUnit, color }) => (
  <SpinnerWrapper size={size} sizeUnit={sizeUnit} color={color}>
    <StyledSpinner size={size} sizeUnit={sizeUnit} color={color}/>
  </SpinnerWrapper>
)

export default Spinner;