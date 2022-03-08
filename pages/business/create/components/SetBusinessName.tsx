import { useMutation } from "@apollo/client";
import { GraphQLError } from "graphql";
import { useRouter } from "next/router";
import React, { useState } from "react";
import TextField from "../../../../components/TextField";
import { useBusinessDispatch } from "../../../../context/BusinessContext/BusinessContext";
import { CREATE_BUSINESS_MUTATION, EDIT_BUSINESS_MUTATION } from "../../../../page-mutations/create-business";
import { StyledButton, ErrorMessage } from "../../../../page-styles/create-business/styles";

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
  const [loading, setLoading] = useState(false);

  const [createBusinessMutation] = useMutation(CREATE_BUSINESS_MUTATION, {
    errorPolicy: "all",
  });
  const [editBusinessMutation] = useMutation(EDIT_BUSINESS_MUTATION, {
    errorPolicy: "all",
  });

  const businessDispatch = useBusinessDispatch();

  const mutationMode: "CREATE" | "EDIT" =
    business_id != null ? "EDIT" : "CREATE";

  const handleRequestErrors = (errors: readonly GraphQLError[] | undefined) => {
    if (errors && errors.length > 0) {
      console.log(errors);
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

    setLoading(true);

    if (mutationMode === "CREATE") {
      try {
        const { data, errors } = await createBusinessMutation({
          variables: { name: businessName },
        });

        if (handleRequestErrors(errors)) {
          setLoading(false);
          return;
        }

        router.query.business_id = data.newBusiness.id;

        businessDispatch({
          type: "setActiveBusiness",
          payload: {
            businessId: data.newBusiness.id,
            name: businessName,
            logoUrl: `https://smsmp-business-logos-local.s3.amazonaws.com/${data.newBusiness.id}.png`,
          },
        });

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
          setLoading(false);
          return;
        }

        onNext();
      } catch (error) {
        setNameSetError(true);
      }
    }

    setLoading(false);
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
      <StyledButton
        onClick={() => onNextClick()}
        disabled={loading}
        loading={loading}
      >
        Next
      </StyledButton>
      {nameSetError && (
        <ErrorMessage>
          There was an error setting the name of your business. Please try again
          later.
        </ErrorMessage>
      )}
    </>
  );
};

export default SetBusinessName;