import React from "react";
import {
  BusinessInfoSection,
  BusinessLogo,
  BusinessName,
  ControlsSection,
  CreateButton,
  Spacing,
  Icon,
  PrimaryNavbar,
  SecondaryNavbar,
  SecondaryNavbarContainer,
  Item,
} from "./styles";
import Button from "../Button";

const Navbar = () => {
  return (
    <>
      <PrimaryNavbar>
        <BusinessInfoSection>
          <BusinessLogo />
          <BusinessName>Chick-Fil-A</BusinessName>
        </BusinessInfoSection>
        <ControlsSection>
          <CreateButton invert>Create</CreateButton>
          <Icon />
          <Spacing />
          <Icon />
        </ControlsSection>
      </PrimaryNavbar>
      <SecondaryNavbarContainer>
        <SecondaryNavbar>
          <Item active={true}>Home</Item>
          <Item active={false}>Coupons</Item>
          <Item active={false}>Campaigns</Item>
          <Item active={false}>Keywords</Item>
          <Item active={false}>Customers</Item>
        </SecondaryNavbar>
      </SecondaryNavbarContainer>
    </>
  );
};

export default Navbar;
