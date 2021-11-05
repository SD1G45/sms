import styled from "styled-components";

export const FirstColumn = styled.div`
  height: 100vh;
  width: 260px;
`;
export const Column = styled.div`
  height: 100vh;

  width: 250px;
  border-left: 1px dashed #ccc;
`;

export const TiltedDiv = styled.div`
  height: 100vh;
  width: 230vw;
  position: absolute;
  bottom: 80vh;
  left: -60vw;

  background-color: #f7f8ff;
  transform: rotate(165deg);
  z-index: -2;
`;
export const StyledBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: -1;
`;
