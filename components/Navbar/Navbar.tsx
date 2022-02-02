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
} from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  useBusinessDispatch,
  useBusinessState,
} from "../../context/BusinessContext/BusinessContext";
import { useLazyQuery } from "@apollo/client";
import { BUSINESS_LIST_QUERY } from "./queries";
import { useUserState } from "../../context/UserContext";

const Navbar = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  const [businessSelectActive, setBusinessSelectActive] = useState(false);

  if (currentPath.startsWith("/login")) return <></>;
  if (currentPath.startsWith("/register")) return <></>;
  if (currentPath.startsWith("/welcome")) return <></>;
  if (currentPath.startsWith("/create-business")) return <></>;

  const businessState = useBusinessState();
  const businessDispatch = useBusinessDispatch();
  const userState = useUserState();

  const [businessName, setBusinessName] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  useEffect(() => {
    setBusinessName(businessState?.name || "");
    setLogoUrl(businessState?.logoUrl || "");
  });

  const [getBusinesses, businessQueryResult] =
    useLazyQuery(BUSINESS_LIST_QUERY);

  useEffect(() => {
    getBusinesses();
  }, [userState]);

  const businessList: { id: string; name: string; logoUrl: string }[] =
    businessQueryResult.data != undefined
      ? businessQueryResult.data.viewer.businesses
      : [];

  const filteredBusinessList = businessList.filter(
    ({ id }) => id !== businessState?.businessId
  );

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
              {filteredBusinessList.map(({ id, logoUrl, name }) => (
                <BusinessListItem
                  onClick={() =>
                    businessDispatch({
                      type: "setActiveBusiness",
                      payload: { name, businessId: id, logoUrl },
                    })
                  }
                >
                  <BusinessListItemLogo src={logoUrl} />
                  {name}
                </BusinessListItem>
              ))}
            </BusinessSelector>
          )}
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
