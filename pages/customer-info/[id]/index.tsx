import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { StyledButton } from "../../../components/Button/styles";
import { Heading } from "../../../components/CouponPreview/styles";
import ErrorPopup from "../../../components/ErrorPopup";
import Timer from "../../../components/Timer";
import { initializeApollo } from "../../../lib/apolloClient";
import { OPEN_COUPON, REDEEM_COUPON } from "../../../page-mutations/reward";
import { useLazyQuery } from "@apollo/client";
import { UPDATE_CUSTOMER_INFO } from "../../../page-mutations/customers/create";
import { EmailTextField } from "../../../page-styles/landingpage/styles";
import {
  Bottom,
  Container,
  Description,
  Logo,
  Middle,
  Name,
  Page,
  RedeemButton,
  Top,
} from "../../../page-styles/reward/styles";

interface Customer {
  phoneNumber: string;
  firstName?: string;
  lastName?: string;
}

interface Props {
  customer: Customer;
}

const CUSTOMER_QUERY = gql`
  query CustomerByPhoneNumber($phoneNumber: String!) {
    customerByPhonenumber(phoneNumber: $phoneNumber) {
      id
      firstName
      lastName
    }
  }
`;

const index: React.FC<Props> = ({ customer }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorState, setError] = useState({ error: false, message: "" });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [openMutation] = useMutation(OPEN_COUPON);
  const [redeemMutation] = useMutation(REDEEM_COUPON);

  const [getCustomers, customerQueryResult] = useLazyQuery(CUSTOMER_QUERY);

  useEffect(() => {
    if (router.query.id) {
      getCustomers({
        variables: {
          phoneNumber: router.query.id as string,
        },
      });
    }
  }, [router.query.id]);

  const customerId =
    customerQueryResult.data != undefined
      ? customerQueryResult.data.customerByPhonenumber.id
      : undefined;
  console.log(customerId);

  const [updateInfoMutation] = useMutation(UPDATE_CUSTOMER_INFO, {
    errorPolicy: "all",
  });
  const handleSubmit = async () => {
    if (firstName.length < 1 || lastName.length < 1) {
      setError({
        ...errorState,
        error: true,
        message: "Please enter both fields!",
      });
      return;
    }
    try {
      const { data, errors } = await updateInfoMutation({
        variables: {
          id: customerId,
          first: firstName,
          last: lastName,
        },
      });
    } catch (error) {
      setLoading(false);
      setError({ ...errorState, error: true, message: "error" });
    }
    setSubmitted(true);
  };

  if (customerQueryResult.data != undefined) {
    if (customerQueryResult.data.customerByPhonenumber.firstName != null) {
      return (
        <>
          {!submitted && (
            <Page>
              <Container>
                <Top>
                  <Name>
                    You've already completed your profile,{" "}
                    {customerQueryResult.data.customerByPhonenumber.firstName}!
                  </Name>
                  <Description>Stay tuned for more offers</Description>
                </Top>
                <Middle></Middle>
                <Bottom></Bottom>
                <ErrorPopup
                  error={errorState.error}
                  message={errorState.message}
                ></ErrorPopup>
              </Container>
            </Page>
          )}{" "}
          {submitted && (
            <Page>
              <Container>
                <Top>
                  <Name>Thanks!</Name>
                  <Description>Stay tuned for more offers</Description>
                </Top>
                <Middle></Middle>
                <Bottom></Bottom>
              </Container>
            </Page>
          )}
        </>
      );
    }
  }
  return (
    <>
      {!submitted && (
        <Page>
          <Container>
            <Top>
              <Name>Complete your profile</Name>
              <Description>Let [business] know who you are!</Description>
            </Top>
            <Middle>
              {" "}
              <Heading>Enter your first and last name</Heading>
              <EmailTextField
                label="First name"
                value={firstName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setFirstName(event.target.value)
                }
              />
              <EmailTextField
                label="Last name"
                value={lastName}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setLastName(event.target.value)
                }
              />
              <ErrorPopup
                error={errorState.error}
                message={errorState.message}
              />
            </Middle>
            <Bottom>
              {" "}
              <StyledButton
                onClick={() => {
                  handleSubmit();
                }}
                disabled={loading}
                loading={loading}
              >
                Complete my profile
              </StyledButton>
            </Bottom>
          </Container>
        </Page>
      )}
      {submitted && (
        <Page>
          <Container>
            <Top>
              <Name>Thanks!</Name>
              <Description>Stay tuned for more offers</Description>
            </Top>
            <Middle></Middle>
            <Bottom></Bottom>
          </Container>
        </Page>
      )}
    </>
  );
};

export default index;
