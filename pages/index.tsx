import React, { useEffect, useMemo, useState } from "react";
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
import { useLazyQuery } from "@apollo/client";
import { COUPONS_QUERY } from "../page-queries/keywords/create";

const LineChart = dynamic(() => import("../components/LineChart"), {
  ssr: false,
});

const customersData = sampleData.customersData();

const Dashboard = () => {
  const businessState = useBusinessState();
  const [businessName, setBusinessName] = useState("");
  useEffect(() => {
    setBusinessName(businessState?.name || "");
  });

  const [getCoupons, couponsQueryResult] = useLazyQuery(COUPONS_QUERY);

  // Get our data from the coupons query if it's available
  const couponsList =
    couponsQueryResult.data != undefined ? couponsQueryResult.data.coupons : [];

  // Get all redeemed dates for each coupon
  var redeemed: { day: string; time: string }[] = [];
  couponsList.forEach((coupon: any) => {
    coupon.redeemedDates.forEach((date: any) => {
      const formattedDate = new Date(date).toISOString();
      const splitDateTime = formattedDate.split("T");
      redeemed.push({ day: splitDateTime[0], time: splitDateTime[1] });
    });
  });

  // Format the current date
  const currentDateTime: Date = new Date();
  const currentDateTimeStr: string[] = currentDateTime.toISOString().split("T");
  const currentDate: string = currentDateTimeStr[0];

  // Filter all redeemed coupon dates to match today's date
  redeemed = redeemed.filter((dateTime) => dateTime.day === currentDate);

  // Map today's redeemed coupons to their hours
  // Key: Time (00 -> 23), Value: coupon total since Time 00
  const redeemedMap: Map<string, number> = new Map<string, number>();
  redeemed.forEach((dateTime) => {
    const time = dateTime.time.split(":")[0];
    if (redeemedMap.has(time)) {
      redeemedMap.set(time, redeemedMap.get(time)! + 1);
    } else {
      redeemedMap.set(time, 1);
    }
  });

  // Format the data to place into the graph
  const couponsData = sampleData.getDatesForGraph("coupons", redeemedMap);

  // Execute coupons query
  useEffect(() => {
    getCoupons({ variables: { businessId: businessState?.businessId } });
  }, [businessState]);

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
                data={couponsData} 
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

  return (
    <>
      <Analytics />

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
