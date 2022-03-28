import React from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { SubscribeContainerDiv } from "../../../../page-styles/create-business/styles.ts";
import SetupForm from "./SetupForm";
// import { RowDiv } from "../../../page-styles/coupons/styles";
import { StyledCard } from "../../../../components/Card/styles";
const stripePromise = loadStripe(
  "pk_test_51KHFPRHwoWyhJ69QRzdbMz2lcKa1GMQqgIUc9Cn1eGO7bpvV3uLgQcrOjo31aJEttDD4zBqoxMo1XkH3TzIutujd00u3HnhXtG"
);


const SetPaymentInfo = ({ onSubmit }) => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      "seti_1KIcHaHwoWyhJ69QnEWl0zGD_secret_KyZQsFo7YMQZF07CeQU1GAWhcvY5me5",
  };

  //   const list: string[] = ["Payment Information", "History"];
  return (
    <SubscribeContainerDiv>
      {/* <RowDiv> */}
      {/* <SideNav items={list} index={0} heading={"Coupons"} /> */}

      <StyledCard>
        <Elements stripe={stripePromise} options={options}>
          <SetupForm onSubmit={onSubmit} />
        </Elements>
      </StyledCard>
      {/* </RowDiv> */}
    </SubscribeContainerDiv>
  );
};
export default SetPaymentInfo;
