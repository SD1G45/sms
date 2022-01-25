import styled, { keyframes } from 'styled-components';
import { SpinnerProps } from './types';

const motion = () => keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  width: ${(props: SpinnerProps) => `${props.size}${props.sizeUnit}`};
  height: ${(props: SpinnerProps) => `${props.size}${props.sizeUnit}`};
`;

export const StyledSpinner = styled.div`
  box-sizing: border-box;
  display: block;
  width: ${(props: SpinnerProps) => `${props.size}${props.sizeUnit}`};
  height: ${(props: SpinnerProps) => `${props.size}${props.sizeUnit}`};
  border: 3px solid ${p => p.color};
  border-radius: 50%;
  animation: ${motion()} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${(props: SpinnerProps) => props.color} transparent transparent transparent;

  :nth-child(1) {
    animation-delay: -0.45s;
  }
  :nth-child(2) {
    animation-delay: -0.3s;
  }
  :nth-child(3) {
    animation-delay: -0.15s;
  }
`;