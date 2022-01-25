import React, { useEffect, useState } from "react";
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
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useBusinessState } from "../../context/BusinessContext/BusinessContext";

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  if (currentPath.startsWith("/login")) return <></>;
  if (currentPath.startsWith("/register")) return <></>;
  if (currentPath.startsWith("/welcome")) return <></>;
  if (currentPath.startsWith("/create-business")) return <></>;

  const businessState = useBusinessState();
  const [businessName, setBusinessName] = useState("");
  useEffect(() => {
    setBusinessName(businessState?.name || "");
    console.log(businessName);
  });

  return (
    <>
      <PrimaryNavbar>
        <BusinessInfoSection>
          <BusinessLogo />
          <BusinessName>{businessName}</BusinessName>
        </BusinessInfoSection>
        <ControlsSection>
          <CreateButton invert>Create</CreateButton>
          <Link href="/settings">
            <Image src="/icons/settings.svg" width={50} height={50} />
          </Link>
          <Spacing />
          <Image src="/icons/profile.svg" width={70} height={50} />
        </ControlsSection>
      </PrimaryNavbar>
      {!currentPath.startsWith("/settings") &&
        !currentPath.startsWith("/billing") && (
          <SecondaryNavbarContainer>
            <SecondaryNavbar>
              <Link href="/dashboard" passHref>
                <Item active={currentPath === "/dashboard"}>Home</Item>
              </Link>
              <Link href="/coupons" passHref>
                <Item active={currentPath.startsWith("/coupons")}>Coupons</Item>
              </Link>
              <Link href="/campaigns" passHref>
                <Item active={currentPath.startsWith("/campaigns")}>
                  Campaigns
                </Item>
              </Link>
              <Link href="/keywords" passHref>
                <Item active={currentPath.startsWith("/keywords")}>
                  Keywords
                </Item>
              </Link>
              <Link href="/customers" passHref>
                <Item active={currentPath.startsWith("/customers")}>
                  Customers
                </Item>
              </Link>
            </SecondaryNavbar>
          </SecondaryNavbarContainer>
        )}
    </>
  );
};

export default Navbar;
