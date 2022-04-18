import React, { useState } from "react";
import { config } from "../../../../config";
import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import {
  HeadingDiv,
  NextStep,
  ResultsDiv,
  Subheading,
  SubscribeContainerDiv,
} from "../../../../page-styles/create-business/styles";
import SetupForm from "./SetupForm";
// import { RowDiv } from "../../../page-styles/coupons/styles";
import { StyledCard } from "../../../../components/Card/styles";
import { ButtonContainer } from "../../../../components/BusinessLogoEditor/styles";
import { StyledButton } from "../../../../components/Button/styles";
import { ButtonDivider } from "../../../../page-styles/create-business/styles";
import Image from "next/image";
import { CardHeading } from "../../../../page-styles/settings/styles";
import {
  CardDescription,
  SetupLaterButton,
} from "../../../../page-styles/coupons/create/styles";
interface SetPaymentInfoProps {
  onSubmit: () => void;
  onNext: () => void;
  onBack: () => void;
}

const SetPaymentInfo: React.FC<SetPaymentInfoProps> = ({
  onSubmit,
  onNext,
  onBack,
}) => {
  const options = {
    wallets: { applePay: "auto" },
    clientSecret:
      "seti_1KIcHaHwoWyhJ69QnEWl0zGD_secret_KyZQsFo7YMQZF07CeQU1GAWhcvY5me5",
  };

  const [submitted, setSubmitted] = useState(false);
  const Results = () => (
    <ResultsDiv>
      <Image src="/check.png" width={100} height={100} />
      <HeadingDiv>
        <Subheading>Payment info added</Subheading>
      </HeadingDiv>
      <NextStep>You're almost there! Last step: Choose a phone number</NextStep>

      <ButtonContainer>
        <StyledButton id="back" onClick={onBack} invert>
          Back
        </StyledButton>
        <ButtonDivider />
        <StyledButton id="next" onClick={onNext}>
          Next
        </StyledButton>
      </ButtonContainer>
    </ResultsDiv>
  );
  const stripePromise = config.load_stripe;

  //   const list: string[] = ["Payment Information", "History"];
  return (
    <>
      <SubscribeContainerDiv>
        <HeadingDiv>
          <Subheading>
            Enter your payment info. You will not be charged at this time.
          </Subheading>
        </HeadingDiv>
        {submitted ? (
          <Results />
        ) : (
          <StyledCard>
            {stripePromise && (
              <Elements stripe={stripePromise} options={options}>
                <SetupForm onSubmit={() => setSubmitted(true)} />
              </Elements>
            )}
            <ButtonContainer>
              <StyledButton id="back" onClick={onBack} invert>
                Back
              </StyledButton>
              <ButtonDivider />
              <StyledButton id="next" onClick={onNext}>
                Next
              </StyledButton>
            </ButtonContainer>
          </StyledCard>
        )}
      </SubscribeContainerDiv>
    </>
  );
};
export default SetPaymentInfo;
