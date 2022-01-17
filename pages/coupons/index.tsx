import React from "react";
import SideNav from "../../components/SideNav";
import SearchBar from "../../components/SearchBar";
import { StyledHeader, ContainerDiv, ColumnDiv, RowDiv, SearchDiv } from "../../page-styles/coupons/styles";
import Button from "../../components/Button";
import Table from "../../components/Table";

const index = () => {
  const list: string[] = ["Analytics", "Create new", "FAQ"];
  const headers: string[] = ["Name", "Date Created", "Date Modified", "Coupons created", "Coupons opened", "Coupons redeemed", "Open %", "Redeem %"];
  const data: string[] = ["BOGO Fries", "10/10/10", "10/20/21", "4321", "2001", "103", "46%", "2.3%"];
  return <ContainerDiv>
    <SideNav items={list} index={1} heading={"Coupons"}/>
    <ColumnDiv>
      <RowDiv>
        <StyledHeader>Coupon Analytics</StyledHeader>
        <SearchDiv>
          <SearchBar value={""} onValueChange={() => {}}/>
        </SearchDiv>
        <Button>Create new coupon</Button>
      </RowDiv>
      <Table headers={headers} data={data}/>
      </ColumnDiv>
    </ContainerDiv>;
};

export default index;
