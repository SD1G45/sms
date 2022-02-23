import React, { useEffect } from "react";
import SideNav from "../../components/SideNav";
import SearchBar from "../../components/SearchBar";
import {
  StyledHeader,
  ContainerDiv,
  ColumnDiv,
  RowDiv,
  SearchDiv,
} from "../../page-styles/coupons/styles";
import { HeaderDiv } from "../../page-styles/keywords/create/styles";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { useRouter } from "next/router";
import { COUPON_QUERY } from "../../page-queries/coupons";
import { useLazyQuery } from "@apollo/client";
import { useBusinessState } from "../../context/BusinessContext/BusinessContext";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const createPath = router.asPath + "/create";
  const faqPath = router.asPath + "/faq";

  const list: string[] = ["Analytics", "Create New", "FAQ"];
  const routes: string[] = ["/coupons", createPath, faqPath];
  const headers: string[] = [
    "Name",
    "Date Created",
    "Date Modified",
    "Coupons created",
    "Coupons opened",
    "Coupons redeemed",
    "Open %",
    "Redeem %",
  ];
  const data: string[][] = [];

  const businessState = useBusinessState();
  const [getCoupons, couponsQueryResult] = useLazyQuery(COUPON_QUERY);
  useEffect(() => {
    getCoupons({
      variables: {
        businessId: businessState?.businessId,
      },
    });
  }, [getCoupons, businessState]);

  const coupons =
    couponsQueryResult.data != undefined ? couponsQueryResult.data.coupons : [];

  for (let i = 0; i < coupons.length; i++) {
    const curr = coupons[i];
    data.push([
      curr.name,
      "02/23/10",
      "02/23/21",
      curr.sentCount,
      curr.openCount,
      curr.redeemCount,
      `${Math.round((curr.openCount / (curr.sentCount || 1)) * 100) / 100}%`,
      `${Math.round((curr.redeemCount / (curr.sentCount || 1)) * 100) / 100}%`,
    ]);
  }

  const onClick = () => {
    router.push(createPath);
  };

  return (
    <ContainerDiv>
      <SideNav items={list} routes={routes} heading={"Coupons"} />
      <ColumnDiv>
        <RowDiv>
          <HeaderDiv>
            <StyledHeader>Coupon Analytics</StyledHeader>
          </HeaderDiv>
          <SearchDiv>
            <SearchBar value={""} onValueChange={() => {}} />
          </SearchDiv>
          <Button onClick={onClick}>Create new coupon</Button>
        </RowDiv>
        <Table headers={headers} data={data} />
      </ColumnDiv>
    </ContainerDiv>
  );
};

export default index;
