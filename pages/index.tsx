import React, { useEffect, useState } from "react";
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
import { ALL_CUSTOMERS_QUERY } from "../page-queries/customers";
import { MESSAGE_COUNT_QUERY } from "../page-queries/business";

const LineChart = dynamic(() => import("../components/LineChart"), {
  ssr: false,
});

const getCouponsData = (
  couponsQueryResult: any,
  currentDate: string,
  formatter: Intl.DateTimeFormat
): any => {
  const couponsList =
    couponsQueryResult.data != undefined ? couponsQueryResult.data.coupons : [];

  var redeemed: { day: string; time: string }[] = [];

  couponsList.forEach((coupon: any) => {
    coupon.redeemedDates.forEach((date: any) => {
      const unformattedDate = new Date(date);
      const formattedDate = new Date(
        formatter.format(unformattedDate)
      ).toISOString();
      const splitDateTime = formattedDate.split("T");
      redeemed.push({ day: splitDateTime[0], time: splitDateTime[1] });
    });
  });

  redeemed = redeemed.filter((dateTime) => dateTime.day === currentDate);

  // Key: Time (00 -> 23), Value: coupons redeemed total since Time 00
  const redeemedMap: Map<string, number> = new Map<string, number>();
  redeemed.forEach((dateTime) => {
    const time = dateTime.time.split(":")[0];
    if (redeemedMap.has(time)) {
      redeemedMap.set(time, redeemedMap.get(time)! + 1);
    } else {
      redeemedMap.set(time, 1);
    }
  });

  return sampleData.getDatesForGraph("coupons", redeemedMap);
};
const getCustomersData = (
  customersQueryResult: any,
  currentDate: string,
  formatter: Intl.DateTimeFormat
): any => {
  const customersList =
    customersQueryResult.data != undefined
      ? customersQueryResult.data.allCustomers
      : [];

  var onboarded: { day: string; time: string }[] = [];
  customersList.forEach((customer: any) => {
    const unformattedDate = new Date(customer.onboardDate);
    const formattedDate = new Date(
      formatter.format(unformattedDate)
    ).toISOString();
    const splitDateTime = formattedDate.split("T");
    onboarded.push({ day: splitDateTime[0], time: splitDateTime[1] });
  });

  onboarded = onboarded.filter((dateTime) => dateTime.day === currentDate);

  // Key: Time (00 -> 23), Value: customers onboarded total since Time 00
  const onboardedMap: Map<string, number> = new Map<string, number>();
  onboarded.forEach((dateTime) => {
    const time = dateTime.time.split(":")[0];
    if (onboardedMap.has(time)) {
      onboardedMap.set(time, onboardedMap.get(time)! + 1);
    } else {
      onboardedMap.set(time, 1);
    }
  });

  return sampleData.getDatesForGraph("customers", onboardedMap);
};

const Dashboard = (props: any) => {
  const businessState = useBusinessState();
  const [businessName, setBusinessName] = useState("");

  useEffect(() => {
    setBusinessName(businessState?.name || "");
  });

  const [getCoupons, couponsQueryResult] = useLazyQuery(COUPONS_QUERY);
  const [getCustomers, customersQueryResult] =
    useLazyQuery(ALL_CUSTOMERS_QUERY);
  const [getMessageCount, messageCountQueryResult] =
    useLazyQuery(MESSAGE_COUNT_QUERY);

  // Get the current date
  const currentDateTime: Date = new Date();

  const firstDay = new Date(
    currentDateTime.getFullYear(),
    currentDateTime.getMonth(),
    1
  ).toDateString();
  const lastDay = new Date(
    currentDateTime.getFullYear(),
    currentDateTime.getMonth() + 1,
    0
  ).toDateString();

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
  });
  const currentDateObj = new Date();
  const currentDate = new Date(dateFormatter.format(currentDateObj))
    .toISOString()
    .split("T")[0];

  // Format the data to place into the graph
  const couponsData = getCouponsData(
    couponsQueryResult,
    currentDate,
    dateFormatter
  );
  const customersData = getCustomersData(
    customersQueryResult,
    currentDate,
    dateFormatter
  );
  const messageCount: number =
    messageCountQueryResult.data != undefined
      ? messageCountQueryResult.data.messageCount
      : 0;
  const amountSpent: number = messageCount * 0.05;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const totalSpent: string = formatter.format(amountSpent);

  useEffect(() => {
    getCoupons({ variables: { businessId: businessState?.businessId } });
    getCustomers({ variables: { businessId: businessState?.businessId } });
    getMessageCount({ variables: { businessId: businessState?.businessId } });
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
              spentAmount={totalSpent}
              salesAmount="$00.00"
              billingCycle={firstDay + " - " + lastDay}
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
        </ColumnDiv>
        <ColumnDiv>
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
        <ColumnDiv>
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
        </ColumnDiv>
      </ContainerDiv>
    </>
  );
};

export default Dashboard;
