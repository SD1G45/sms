import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import SingleCardPage from "../../components/SingleCardPage";
import TextField from "../../components/TextField";
import {
  CREATE_BUSINESS_MUTATION,
  EDIT_BUSINESS_MUTATION,
} from "../../page-mutations/create-business";
import {
  Heading,
  StyledCard,
  StyledStepper,
  StyledButton,
  ButtonContainer,
  ButtonDivider,
  LogoCircle,
  LogoPickerContainer,
  UploadLogoButton,
} from "../../page-styles/create-business/styles";

const steps = ["Name", "Logo", "Phone number"];

interface SetBusinessNameProps {
  businessName: string;
  onBusinessNameChange: (value: string) => void;
  onNext: () => void;
}
const SetBusinessName: React.FC<SetBusinessNameProps> = ({
  businessName,
  onBusinessNameChange,
  onNext,
}) => {
  const router = useRouter();
  const business_id = router.query.business_id;
  const [createBusinessMutation] = useMutation(CREATE_BUSINESS_MUTATION, {
    errorPolicy: "all",
  });
  const [editBusinessMutation] = useMutation(EDIT_BUSINESS_MUTATION, {
    errorPolicy: "all",
  });

  const mutationMode: "CREATE" | "EDIT" =
    business_id != null ? "EDIT" : "CREATE";

  console.log(mutationMode);

  const onNextClick = async () => {
    switch (mutationMode) {
      case "CREATE": {
        try {
          const { data, errors } = await createBusinessMutation({
            variables: { name: businessName },
          });
        } catch (error) {
          console.log(error);
        }
      }
      case "EDIT": {
        try {
          const { data, errors } = await editBusinessMutation({
            variables: { name: businessName, id: business_id },
          });
        } catch (error) {
          console.log(error);
        }
      }
      default: {
        console.log("FIX THIS - should do something here, not sure what yet");
      }
    }
  };

  return (
    <>
      <TextField
        value={businessName}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          onBusinessNameChange(event.target.value)
        }
        label="Business Name"
      />
      <StyledButton onClick={() => onNextClick()}>Next</StyledButton>
    </>
  );
};

interface SetBusinessLogoProps {
  onNext: () => void;
  onBack: () => void;
}
const SetBusinessLogo: React.FC<SetBusinessLogoProps> = ({
  onNext,
  onBack,
}) => {
  return (
    <>
      <LogoPickerContainer>
        <LogoCircle />
        <UploadLogoButton invert>Upload logo</UploadLogoButton>
      </LogoPickerContainer>
      <ButtonContainer>
        <StyledButton onClick={onBack} invert>
          Back
        </StyledButton>
        <ButtonDivider />
        <StyledButton onClick={onNext}>Next</StyledButton>
      </ButtonContainer>
    </>
  );
};

const Createbusiness = () => {
  const [activeStepperIndex, setActiveStepperIndex] = useState(0);
  const [businessName, setBusinessName] = useState("");

  return (
    <SingleCardPage>
      <StyledCard>
        <Heading>Create your new business account</Heading>
        <StyledStepper steps={steps} activeIndex={activeStepperIndex} />
        {activeStepperIndex === 0 ? (
          <SetBusinessName
            businessName={businessName}
            onBusinessNameChange={(value) => setBusinessName(value)}
            onNext={() => setActiveStepperIndex(activeStepperIndex + 1)}
          />
        ) : activeStepperIndex === 1 ? (
          <SetBusinessLogo
            onBack={() => setActiveStepperIndex(activeStepperIndex - 1)}
            onNext={() => setActiveStepperIndex(activeStepperIndex + 1)}
          />
        ) : (
          <div />
        )}
      </StyledCard>
    </SingleCardPage>
  );
};

export default Createbusiness;