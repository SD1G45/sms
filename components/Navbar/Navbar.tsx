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
  BusinessSelector,
  BusinessListItem,
  BusinessListItemLogo,
  StyledImage,
} from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  useBusinessDispatch,
  useBusinessState,
} from "../../context/BusinessContext/BusinessContext";
import { useLazyQuery } from "@apollo/client";
import { BUSINESS_LIST_QUERY } from "./queries";
import { useUserState } from "../../context/UserContext";
import LogoutButton from "../LogoutButton";
import { StyledLink } from "../../page-styles/settings/styles";

import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  const [businessSelectActive, setBusinessSelectActive] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [logoUrl, setLogoUrl] = useState("");

  const businessState = useBusinessState();
  const businessDispatch = useBusinessDispatch();
  const userState = useUserState();

  useEffect(() => {
    setBusinessName(businessState?.name || "");
    setLogoUrl(businessState?.logoUrl || "");
  });

  const [getBusinesses, businessQueryResult] =
    useLazyQuery(BUSINESS_LIST_QUERY);

  useEffect(() => {
    getBusinesses();
  }, [userState]);

  const businessList: {
    id: string;
    name: string;
    logoUrl: string;
    phoneNumber: string;
  }[] =
    businessQueryResult.data != undefined &&
    businessQueryResult.data.viewer != undefined
      ? businessQueryResult.data.viewer.businesses
      : [];

  if (businessList.length > 0 && businessState?.businessId == null) {
    businessDispatch({
      type: "setActiveBusiness",
      payload: {
        businessId: businessList[0].id,
        name: businessList[0].name,
        logoUrl: businessList[0].logoUrl,
        phoneNumber: businessList[0].phoneNumber,
      },
    });
  }

  const filteredBusinessList = businessList.filter(
    ({ id }) => id !== businessState?.businessId
  );

  if (currentPath.startsWith("/welcome")) return <></>;

  if (currentPath.startsWith("/business/create")) return <></>;

  if (currentPath.startsWith("/business/join")) return <></>;

  if (currentPath.startsWith("/reward")) return <></>;
  if (currentPath.startsWith("/customer-info")) return <></>;

  // Navbar if not Logged in
  if (
    currentPath.startsWith("/us") ||
    currentPath.startsWith("/login") ||
    currentPath.startsWith("/register")
  )
    return (
      <>
        <PrimaryNavbar>
          <BusinessInfoSection>
            <Link href="/us">
              <Image
                width={40}
                height={40}
                src={"/icons/pyramid-transparent.png"}
              />
            </Link>
            <BusinessName>Trism</BusinessName>
          </BusinessInfoSection>
          <ControlsSection>
            {" "}
            <Link href="/us#why-trism">
              <StyledLink>Why Trism?</StyledLink>
            </Link>
            <Spacing />
            <Spacing />
            <Spacing />
            <Link href="/us#how-it-works">
              <StyledLink>How it works</StyledLink>
            </Link>
            <Spacing />
            <Spacing />
            <Spacing />
            <Link href="/us#contact">
              <StyledLink>Contact Us</StyledLink>
            </Link>
          </ControlsSection>
          <ControlsSection>
            <Link href="/register">
              <StyledLink>Register</StyledLink>
            </Link>
            <Spacing />

            <Spacing />

            <LogoutButton variant="header" text="Login" />
          </ControlsSection>
        </PrimaryNavbar>
      </>
    );

  // Primary Navbar for users who are logged in
  return (
    <>
      <PrimaryNavbar>
        <BusinessInfoSection
          onClick={() => setBusinessSelectActive(!businessSelectActive)}
        >
          <BusinessLogo src={logoUrl || ""} />
          <BusinessName>{businessName}</BusinessName>
          {businessSelectActive && (
            <BusinessSelector>
              {filteredBusinessList.map(
                ({ id, logoUrl, name, phoneNumber }) => (
                  <BusinessListItem
                    onClick={() =>
                      businessDispatch({
                        type: "setActiveBusiness",
                        payload: {
                          name,
                          businessId: id,
                          logoUrl,
                          phoneNumber: phoneNumber,
                        },
                      })
                    }
                  >
                    <BusinessListItemLogo src={logoUrl} />
                    {name}
                  </BusinessListItem>
                )
              )}
            </BusinessSelector>
          )}
        </BusinessInfoSection>
        <ControlsSection>
          <Link href="/">
            <StyledImage src="/icons/home.svg" width={130} height={130} />
          </Link>
          <Spacing />
          <Link href="/settings">
            <StyledImage src="/icons/settings.svg" width={50} height={50} />
          </Link>
          <Spacing />

          <Spacing />

          <LogoutButton variant="header" />
        </ControlsSection>
      </PrimaryNavbar>
      {!currentPath.startsWith("/settings") &&
        !currentPath.startsWith("/us") &&
        !currentPath.startsWith("/business") &&
        !currentPath.startsWith("/billing") && (
          <SecondaryNavbarContainer>
            <SecondaryNavbar>
              <Link href="/" passHref>
                <Item id="home" active={currentPath === "/"}>
                  Home
                </Item>
              </Link>
              <Link href="/coupons" passHref>
                <Item id="coupons" active={currentPath.startsWith("/coupons")}>
                  Coupons
                </Item>
              </Link>
              <Link href="/campaigns" passHref>
                <Item
                  id="campaigns"
                  active={currentPath.startsWith("/campaigns")}
                >
                  Campaigns
                </Item>
              </Link>
              <Link href="/keywords" passHref>
                <Item
                  id="keywords"
                  active={currentPath.startsWith("/keywords")}
                >
                  Keywords
                </Item>
              </Link>
              <Link href="/customers" passHref>
                <Item
                  id="customers"
                  active={currentPath.startsWith("/customers")}
                >
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
