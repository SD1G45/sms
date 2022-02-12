import React from "react";
import BillingCycleInfo from "../BillingCycleInfo";
import { SalesColumnDiv, SalesDivider } from "./styles";
import { BillingCycleColumnProps } from "./types";

const BillingCycleColumn: React.FC<BillingCycleColumnProps> = ({
  salesAmount,
  spentAmount,
  billingCycle,
  billingCycleRoute
}) => {
  return (
    <SalesColumnDiv>
      <BillingCycleInfo
        title="Amount Spent"
        viewLinkText="View billing cycle"
        amount={spentAmount}
        subtitle={"Billing cycle: " + billingCycle}
        linkRoute={billingCycleRoute}
      />
      <SalesDivider/>
      <BillingCycleInfo
        title="Estimated Sales"
        amount={salesAmount}
        subtitle="*Estimation only*"
      />
    </SalesColumnDiv>
  );
};

export default BillingCycleColumn;