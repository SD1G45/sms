import Image from "next/image";
import styled from "styled-components";
import Button from "../Button";
import Card from "../Card";

export const PrimaryNavbar = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundGray};
  padding: 15px 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BusinessInfoSection = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const BusinessSelector = styled(Card)`
  position: absolute;
  top: 80px;
  padding: 0;
`;

export const BusinessListItem = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.theme.colors.backgroundGray};
  }
`;

export const BusinessListItemLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const BusinessLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const BusinessName = styled.h1`
  font-size: 1.4rem;
  margin-left: 10px;
  font-weight: 400;
`;

export const ControlsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CreateButton = styled(Button)`
  border-radius: 30px;
  font-size: 0.8rem;
  padding: 5px;
  margin-right: 10px;
`;

export const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-color: #3d4255;
`;

export const Spacing = styled.div`
  width: 15px;
`;

export const SecondaryNavbarContainer = styled.div`
  width: 100%;
  padding: 0px 80px;
`;

export const SecondaryNavbar = styled.div`
  width: 100%;
  padding: 15px 0px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  display: flex;
`;

export const Item = styled.p<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? props.theme.colors.primary : "none"};
  color: ${(props) => (props.active ? "white" : props.theme.colors.textColor)};
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 0.8rem;
  cursor: pointer;
`;

export const StyledImage = styled(Image)`
  &:hover {
    opacity: 70%;
  }
  cursor: pointer;
`;
