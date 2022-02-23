import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import SingleCardPage from "../components/SingleCardPage";
import Image from "next/image";

import {
  ContainerDiv,
  ColumnDiv,
  RowDiv,
  StyledCard,
  BorderDiv,
  ChartDiv,
  StyledHeader,
} from "../page-styles/dashboard/styles";
import Link from "next/link";
import { useBusinessState } from "../context/BusinessContext/BusinessContext";
import dynamic from "next/dynamic";
import sampleData from "../sampleData/sampleData";
import BillingCycleColumn from "../components/BillingCycleColumn";

const LineChart = dynamic(() => import("../components/LineChart"), {
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
            <ChartDiv>
              <LineChart
                title="Coupons"
                data={couponData}
                height={300}
                flexure={1}
              />
            </ChartDiv>
            <ChartDiv>
              <LineChart
                title="Customers"
                data={customersData}
                height={300}
                flexure={1}
              />
            </ChartDiv>
            <BillingCycleColumn
              spentAmount="$1,180.00"
              salesAmount="$175.00"
              billingCycle="10/07/21 - 10/31/21"
              billingCycleRoute="/billing"
            />
          </BorderDiv>
        </ContainerDiv>
      </>
    );
  };

  // Temporary fix - just for demo
  const AnalyticsMonthly = () => {
    return (
      <>
        <ContainerDiv>
          <StyledHeader>This Month</StyledHeader>
        </ContainerDiv>
        <ContainerDiv>
          <BorderDiv>
            <ChartDiv>
              <LineChart
                title="Coupons"
                data={couponData}
                height={300}
                flexure={1}
              />
            </ChartDiv>
            <ChartDiv>
              <LineChart
                title="Customers"
                data={customersData}
                height={300}
                flexure={1}
              />
            </ChartDiv>
            <BillingCycleColumn
              spentAmount="$12,325.10"
              salesAmount="$1952.00"
              billingCycle="10/07/21 - 10/31/21"
              billingCycleRoute="/billing"
            />
          </BorderDiv>
        </ContainerDiv>
      </>
    );
  };
  return (
    <>
      <Analytics />
      <AnalyticsMonthly />

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
