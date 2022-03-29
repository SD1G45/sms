import React from "react";
import { config } from "../../../../config";
import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import { SubscribeContainerDiv } from "../../../../page-styles/create-business/styles";
import SetupForm from "./SetupForm";
// import { RowDiv } from "../../../page-styles/coupons/styles";
import { StyledCard } from "../../../../components/Card/styles";
import { ButtonContainer } from "../../../../components/BusinessLogoEditor/styles";
import { StyledButton } from "../../../../components/Button/styles";
import { ButtonDivider } from "../../../../page-styles/create-business/styles";

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
    // passing the client secret obtained from the server
    clientSecret:
      "seti_1KIcHaHwoWyhJ69QnEWl0zGD_secret_KyZQsFo7YMQZF07CeQU1GAWhcvY5me5",
  };

  const stripePromise = config.load_stripe;

  //   const list: string[] = ["Payment Information", "History"];
  return (
    <SubscribeContainerDiv>
      <StyledCard>
        <Elements stripe={stripePromise} options={options}>
          <SetupForm onSubmit={onSubmit} />
        </Elements>
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
    </SubscribeContainerDiv>
  );
};
export default SetPaymentInfo;
