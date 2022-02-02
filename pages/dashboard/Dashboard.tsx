import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import SingleCardPage from "../../components/SingleCardPage";
import Image from "next/image";

import {
  ContainerDiv,
  ColumnDiv,
  RowDiv,
  StyledCard,
} from "../../page-styles/dashboard/styles";
import { StyledHeader } from "../../page-styles/coupons/styles";
import Link from "next/link";
import { useBusinessState } from "../../context/BusinessContext/BusinessContext";
import dynamic from "next/dynamic";
import sampleData from "../../sampleData/sampleData";

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

  return (
    <>
      <ContainerDiv>
        <StyledHeader>{businessName}</StyledHeader>
      </ContainerDiv>

      <ContainerDiv>
        <ColumnDiv>
          <LineChart
            title="Coupons"
            data={couponData}
            height={300}
            flexure={1}
          />
        </ColumnDiv>
        <ColumnDiv>
          <LineChart
            title="Customers"
            data={customersData}
            height={300}
            flexure={1}
          />
        </ColumnDiv>
        <ColumnDiv>
          {/* TODO: Build up Amount Spent & Estimated Sales */}
        </ColumnDiv>
      </ContainerDiv>

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
