import React from "react";
import SingleCardPage from "../../components/SingleCardPage";
import {
  Heading,
  StyledCard,
  StyledButton,
} from "../../page-styles/billing/styles";
import Link from "next/link";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import SetupForm from "./SetupForm";
const stripePromise = loadStripe(
  "pk_test_51KHFPRHwoWyhJ69QRzdbMz2lcKa1GMQqgIUc9Cn1eGO7bpvV3uLgQcrOjo31aJEttDD4zBqoxMo1XkH3TzIutujd00u3HnhXtG"
);

function Billing() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      "seti_1KIcHaHwoWyhJ69QnEWl0zGD_secret_KyZQsFo7YMQZF07CeQU1GAWhcvY5me5",
  };
  return (
    <SingleCardPage>
      <StyledCard>
        <Elements stripe={stripePromise} options={options}>
          <SetupForm />
        </Elements>
      </StyledCard>
    </SingleCardPage>
  );
}

export default Billing;
