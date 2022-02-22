import styled from "styled-components";
import { CouponPreviewProps } from "./types";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h2`
  font-size: 1rem;
  margin-bottom: 30px;
`;

export const Phone = styled.div`
  height: 700px;
  border-radius: 20px;
  width: 350px;
  border: 2px solid ${(props) => props.theme.colors.lightGray};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
`;

export const Notch = styled.div`
  position: absolute;
  top: -2px;
  left: 100px;
  width: 150px;
  height: 20px;
  background-color: white;
  border-radius: 0 0 10px 10px;
  border: 2px solid ${(props) => props.theme.colors.lightGray};
  border-top: 0;
`;

export const BusinessLogo = styled.img<
  Pick<CouponPreviewProps, "primaryColor">
>`
  border-radius: 100%;
  width: 100px;
  height: 100px;
  border: 4px solid ${(props) => props.primaryColor};
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 40px;
  text-align: center;
`;

export const RedeemButton = styled.button<
  Pick<CouponPreviewProps, "primaryColor">
>`
  width: 150px;
  height: 150px;
  color: white;
  background-color: ${(props) => props.primaryColor};
  border-radius: 100%;
`;
