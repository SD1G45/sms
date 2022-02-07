import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import SingleCardPage from "../../components/SingleCardPage";
import Image from "next/image";

import {
  ContainerDiv,
  ColumnDiv,
  RowDiv,
  StyledCard,
  BorderDiv,
  LeftChartDiv,
  RightChartDiv,
  StyledHeader,
  SalesColumnDiv,
  SalesDivider
} from "../../page-styles/dashboard/styles";
import Link from "next/link";
import { useBusinessState } from "../../context/BusinessContext/BusinessContext";
import dynamic from "next/dynamic";
import sampleData from "../../sampleData/sampleData";
import BillingCycleInfo from "../../components/BillingCycleInfo";

const LineChart = dynamic(() => import("../../components/LineChart"), {
  ssr: false,
});

const couponData = sampleData.couponData();
const customersData = sampleData.customersData();

const Dashboard = () => {
  const businessState = useBusinessState();
  const [businessName, setBusinessName] = useState("");
  useEffect(() => {
    setBusinessName(businessState?.name || "");
    console.log(businessName);
  });

  const Analytics = () => {
    return (
      <>
        <ContainerDiv>
          <StyledHeader>Today</StyledHeader>
        </ContainerDiv>
        <ContainerDiv>
          <BorderDiv>
            <LeftChartDiv> 
              <LineChart
                title="Coupons"
                data={couponData}
                height={300}
                flexure={1}
              />
            </LeftChartDiv>
            <RightChartDiv>
              <LineChart
                title="Customers"
                data={customersData}
                height={300}
                flexure={1}
              />
            </RightChartDiv>
            <SalesColumnDiv>
              <BillingCycleInfo
                title="Amount Spent"
                viewLinkText="View current billing cycle"
                amount="$1,180.00"
                subtitle="Billing cycle: 10/07/21 - 10/31/21"
              />
              <SalesDivider/>
              <BillingCycleInfo
                title="Estimated Sales"
                viewLinkText="View billing cycle"
                amount="$175.00"
                subtitle="*Estimation only*"
              />
            </SalesColumnDiv>
          </BorderDiv>
        </ContainerDiv>
      </>
    );
  }

  return (
    <>
      <Analytics/>
      <Analytics/>

      <ContainerDiv>
        <ColumnDiv>
          <RowDiv>
            <StyledCard>
              <StyledHeader>Campaigns</StyledHeader>
              <Link href="/campaigns">
                <Image
                  src="/Dashboard_icons/campaign.svg"
                  width={250}
                  height={250}
                />
              </Link>
            </StyledCard>
          </RowDiv>
          <RowDiv>
            <StyledCard>
              <StyledHeader>Coupons</StyledHeader>
              <Link href="/coupons">
                <Image
                  src="/Dashboard_icons/coupon.svg"
                  width={250}
                  height={250}
                />
              </Link>
            </StyledCard>
          </RowDiv>
        </ColumnDiv>
        <ColumnDiv style={{ margin: "auto" }}>
          <RowDiv>
            <StyledCard>
              <StyledHeader>Customers</StyledHeader>
              <Link href="/customers">
                <Image
                  src="/Dashboard_icons/customer.svg"
                  width={250}
                  height={250}
                />
              </Link>
            </StyledCard>
          </RowDiv>
          <RowDiv>
            <StyledCard>
              <StyledHeader>Keywords</StyledHeader>
              <Link href="/keywords">
                <Image
                  src="/Dashboard_icons/keyword.svg"
                  width={250}
                  height={250}
                />
              </Link>
            </StyledCard>
          </RowDiv>
        </ColumnDiv>
      </ContainerDiv>
    </>
  );
};

export default Dashboard;
