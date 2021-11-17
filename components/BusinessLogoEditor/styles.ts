import styled from "styled-components";
import Button from "../Button";
import Image from "next/image";

export const Container = styled.div`
  background: white;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px 10px 0 0;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export const SaveButton = styled(Button)`
  padding: 5px 10px;
  margin-top: 20px;
`;

export const UploadButton = styled(SaveButton)`
  border: 2px solid ${(props) => props.theme.colors.primary};
  margin-bottom: 10px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 1.3rem;
  margin-top: 5px;
`;

export const CloseButon = styled(Image)`
  width: 30px;
  height: 30px;
  justify-content: center;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`;
