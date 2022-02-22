import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  height: 100vh;
  max-width: 800px;
  padding: 40px 40px;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 25px;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Middle = styled.div``;

export const Bottom = styled.div``;

export const Name = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

export const Description = styled.div`
  font-size: 1rem;
  margin-bottom: 40px;
`;

export const RedeemButton = styled.button<{
  backgroundColor: string;
  disabled: boolean;
}>`
  background-color: ${(props) => props.backgroundColor};
  width: 130px;
  height: 130px;
  border-radius: 50%;
  color: white;
  margin-bottom: 40px;
  opacity: ${(props) => (props.disabled ? 0.2 : 1)};
`;
