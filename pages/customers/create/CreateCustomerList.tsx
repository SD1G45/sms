import React, { useState, useEffect } from "react";
import TextArea from "../../../components/TextArea";
import TextField from "../../../components/TextField";
import {
  FlexContainer,
  Heading,
  ButtonContainer,
} from "../../../page-styles/customers/create/styles";
import Button from "../../../components/Button";
import { ContainerDiv } from "../../../page-styles/coupons/styles";
import SideNav from "../../../components/SideNav";
import { useMutation } from "@apollo/client";
import { NEW_CUSTOMER_LIST } from "../../../page-mutations/customers/create";
import { useBusinessState } from "../../../context/BusinessContext/BusinessContext";
import ErrorPopup from "../../../components/ErrorPopup";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  StyledCard,
  CardDescription,
  CardHeading,
  SetupLaterButton,
} from "../../../page-styles/coupons/create/styles";

const CreateCustomer: React.FC = () => {
  const router = useRouter();
  const businessState = useBusinessState();

  const [name, setCustomer] = useState("");
  const [description, setDescription] = useState("");
  const [result, setResult] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorState, setError] = useState({ error: false, message: "" });

  const list: string[] = ["Analytics", "Create New", "FAQ"];
  const routes: string[] = [
    "/customers",
    "/customers/create",
    "/customers/faq",
  ];

  const [newCustomerListMutation] = useMutation(NEW_CUSTOMER_LIST, {
    errorPolicy: "all",
  });

  const handleCreate = () => {
    if (name.length == 0) {
      setError({ ...errorState, error: true, message: "Missing information." });
      return;
    }

    setLoading(true);

    try {
      newCustomerListMutation({
        variables: {
          name,
          description,
          businessId: businessState?.businessId || "7a6a0a03-5196-4952-aa9b-248c9daf1827",
        },
      });
      setResult(true);
      setLoading(false);
    } catch (error) {
      setError({
        ...errorState,
        error: true,
        message: "Something went wrong, please try again later.",
      });
      setLoading(false);
    }
  };

  const Results = () => (
    <StyledCard>
      <Image src="/check.png" width={100} height={100} />
      <CardHeading>New customer created!</CardHeading>
      <CardDescription>
        You can now use this customer to market and attract new customers
      </CardDescription>
      <SetupLaterButton onClick={() => router.push("/customers")}>
        close
      </SetupLaterButton>
    </StyledCard>
  );

  return (
    <ContainerDiv>
      <SideNav items={list} routes={routes} heading={"Customers"} />
      <FlexContainer>
        <Heading>Create new customer list</Heading>
        <TextField
          label="Name"
          value={name}
          style={{ marginBottom: 30 }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setCustomer(event.target.value)
          }
        />
        <TextArea
          label="Description"
          style={{ marginBottom: 30 }}
          value={description}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(event.target.value)
          }
        />
        <ButtonContainer>
          <Button
            style={{ width: 250 }}
            onClick={() => handleCreate()}
            disabled={loading}
            loading={loading}
          >
            Create Customer List
          </Button>
          {result ? <Results /> : ""}
        </ButtonContainer>
        <ErrorPopup error={errorState.error} message={errorState.message} />
      </FlexContainer>
    </ContainerDiv>
  );
};

export default CreateCustomer;
