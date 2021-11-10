import { useMutation } from "@apollo/client";
import { GraphQLError } from "graphql";
import { useRouter } from "next/router";
import React, { useState } from "react";
import BusinessLogoEditor from "../../components/BusinessLogoEditor";
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
  ErrorMessage,
} from "../../page-styles/create-business/styles";

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
  const [nameSetError, setNameSetError] = useState(false);
  const [emtpyNameError, setEmptyNameError] = useState(false);

  const [createBusinessMutation] = useMutation(CREATE_BUSINESS_MUTATION, {
    errorPolicy: "all",
  });
  const [editBusinessMutation] = useMutation(EDIT_BUSINESS_MUTATION, {
    errorPolicy: "all",
  });

  const mutationMode: "CREATE" | "EDIT" =
    business_id != null ? "EDIT" : "CREATE";

  const handleRequestErrors = (errors: readonly GraphQLError[] | undefined) => {
    if (errors && errors.length > 0) {
      setNameSetError(true);
      return true;
    }
    return false;
  };

  const resetErrors = () => {
    setEmptyNameError(false);
    setNameSetError(false);
  };

  const onNextClick = async () => {
    resetErrors();
    if (businessName.length === 0) {
      setEmptyNameError(true);
      return;
    }

    if (mutationMode === "CREATE") {
      try {
        const { data, errors } = await createBusinessMutation({
          variables: { name: businessName },
        });

        if (handleRequestErrors(errors)) {
          return;
        }

        router.query.business_id = data.newBusiness.id;
        router.push(router);
        onNext();
      } catch (error) {
        setNameSetError(true);
      }
    } else if (mutationMode === "EDIT") {
      try {
        const { data, errors } = await editBusinessMutation({
          variables: { name: businessName, id: business_id },
        });

        if (handleRequestErrors(errors)) {
          return;
        }

        onNext();
      } catch (error) {
        setNameSetError(true);
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
        error={emtpyNameError}
        errorMessage="Please enter a business name"
      />
      <StyledButton onClick={() => onNextClick()}>Next</StyledButton>
      {nameSetError && (
        <ErrorMessage>
          There was an error setting the name of your business. Please try again
          later.
        </ErrorMessage>
      )}
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

const steps = ["Name", "Logo", "Phone number"];

interface Business {
  name: string;
  logoUrl: string;
}

interface CreateBusinessProps {
  business?: Business;
}

const CreateBusiness: React.FC<CreateBusinessProps> = ({ business }) => {
  const router = useRouter();
  const [activeStepperIndex, setActiveStepperIndex] = useState(
    parseInt(router.query.step as string) || 0
  );
  const [businessName, setBusinessName] = useState(business?.name || "");

  const updateActiveStepperIndex = (factor: 1 | -1) => {
    const newStepIndex = activeStepperIndex + factor;
    setActiveStepperIndex(newStepIndex);
    router.query.step = `${newStepIndex}`;
    router.push(router);
  };

  return (
    <SingleCardPage>
      <StyledCard>
        <BusinessLogoEditor onClose={() => {}} />
        {/* <Heading>Create your new business account</Heading>
        <StyledStepper steps={steps} activeIndex={activeStepperIndex} />
        {activeStepperIndex === 0 ? (
          <SetBusinessName
            businessName={businessName}
            onBusinessNameChange={(value) => setBusinessName(value)}
            onNext={() => updateActiveStepperIndex(1)}
          />
        ) : activeStepperIndex === 1 ? (
          <SetBusinessLogo
            onBack={() => updateActiveStepperIndex(-1)}
            onNext={() => updateActiveStepperIndex(1)}
          />
        ) : (
          <div />
        )} */}
      </StyledCard>
    </SingleCardPage>
  );
};

export default CreateBusiness;
