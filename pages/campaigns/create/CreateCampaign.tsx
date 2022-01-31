import React, { useState, useEffect } from "react";
import TextArea from "../../../components/TextArea";
import TextField from "../../../components/TextField";
import {
  FlexContainer,
  HalfPage,
  Heading,
  PhoneSection,
  SubHeading,
  ButtonContainer,
  StyledSelector,
  StyledMultiSelector,
} from "../../../page-styles/keywords/create/styles";
import CouponPreview from "../../../components/CouponPreview";
import Button from "../../../components/Button";
import { ContainerDiv } from "../../../page-styles/coupons/styles";
import SideNav from "../../../components/SideNav";
import { useLazyQuery, useMutation } from "@apollo/client";
import { NEW_KEYWORD } from "../../../page-mutations/keywords/create";
import { useBusinessState } from "../../../context/BusinessContext/BusinessContext";
import {
  COUPONS_QUERY,
  CUSTOMER_LIST_QUERY,
} from "../../../page-queries/keywords/create";
import ErrorPopup from "../../../components/ErrorPopup";
import { NEW_CAMPAIGN } from "../../../page-mutations/campaigns/create";

interface Coupon {
  id: string;
  title: string;
  name: string;
  description: string;
  primaryColor: string;
  expirationDate: number;
}

const CreateCampaign: React.FC = () => {
  const businessState = useBusinessState();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [selectorSearch, setSelectorSearch] = useState("");
  const [selectedCouponId, setSelectedCouponId] = useState<string | null>(null);

  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedCustomerLists, setSelectedCustomerLists] = useState<
    { name: string; id: string }[]
  >([]);

  const [errorState, setError] = useState({ error: false, message: "" });

  const handleRemove = (id: string) => {
    setSelectedCustomerLists(
      selectedCustomerLists.filter((value) => value.id !== id)
    );
  };

  const handleSelect = (id: string, name: string) => {
    setSelectedCustomerLists([{ id, name }, ...selectedCustomerLists]);
  };

  const list: string[] = ["Analytics", "Create New", "FAQ"];
  const routes: string[] = ["/campaigns", "/campaigns/create", "/campaigns/faq"];

  const [newCampaignMutation] = useMutation(NEW_CAMPAIGN, {
    errorPolicy: "all",
  });

  const [getCoupons, couponQueryResult] = useLazyQuery(COUPONS_QUERY);
  const [getCustomerLists, customerListQueryResult] =
    useLazyQuery(CUSTOMER_LIST_QUERY);

  useEffect(() => {
    getCoupons({
      variables: {
        businessId: businessState?.businessId || "13a1fcc2-dc74-4467-9eb4-b8ede588791d",
      },
    });
  }, [getCoupons, businessState]);

  useEffect(() => {
    getCustomerLists({
      variables: {
        businessId: businessState?.businessId || "13a1fcc2-dc74-4467-9eb4-b8ede588791d",
      },
    });
  }, [getCustomerLists, businessState]);

  const couponOptions: Coupon[] =
    (couponQueryResult.data && couponQueryResult.data.coupons) || [];

  const customerListOptions =
    (customerListQueryResult.data &&
      customerListQueryResult.data.customerLists) ||
    [];

  const filteredOptions = customerListOptions.filter(
    ({ id: id1 }: { id: string }) =>
      !selectedCustomerLists.some(({ id: id2 }) => id2 === id1)
  );

  const handleCreate = () => {
    if (name.length == 0 || message.length == 0) {
      setError({ ...errorState, error: true, message: "Missing information." });
      return;
    }

    if (!selectedCouponId) {
      setError({ ...errorState, error: true, message: "No coupon selected." });
      return;
    }

    if (selectedCouponId.length < 1) {
      setError({
        ...errorState,
        error: true,
        message: "No customer list(s) selected.",
      });
    }

    try {
      newCampaignMutation({
        variables: {
          name,
          message,
          businessId: businessState?.businessId == null ? "13a1fcc2-dc74-4467-9eb4-b8ede588791d" : "",
          couponId: selectedCouponId,
          customerListId: selectedCustomerLists[0].id,
        },
      });
    } catch (error) {
      setError({
        ...errorState,
        error: true,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  let couponTitle = "";
  let couponDescription = "";
  let couponPrimaryColor = "";
  let couponExpirationDate = 0;
  for (let index = 0; index < couponOptions.length; index++) {
    const currentCoupon = couponOptions[index];
    if (currentCoupon.id === selectedCouponId) {
      couponTitle = currentCoupon.title;
      couponDescription = currentCoupon.description;
      couponPrimaryColor = currentCoupon.primaryColor;
      couponExpirationDate = currentCoupon.expirationDate;
    }
  }

  return (
    <ContainerDiv>
      <SideNav items={list} routes={routes} heading={"Campaigns"} />
      <FlexContainer>
        <HalfPage>
          <Heading>Create new campaign</Heading>
          <SubHeading>Information</SubHeading>
          <TextField
            label="Campaign"
            value={name}
            style={{ marginBottom: 30 }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setName(event.target.value)
            }
          />
          <TextArea
            label="Message"
            style={{ marginBottom: 30 }}
            value={message}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(event.target.value)
            }
          />
          <StyledSelector
            label="Coupon"
            options={couponOptions}
            searchValue={selectorSearch}
            onSearchValueChange={setSelectorSearch}
            onSelect={(id) => setSelectedCouponId(id)}
            selectedId={selectedCouponId}
          />
          <StyledMultiSelector
            label="Customer list(s)"
            options={filteredOptions}
            searchValue={searchValue}
            onSearchValueChange={(id) => setSearchValue(id)}
            onSelect={({ name, id }) => handleSelect(id, name)}
            selectedOptions={selectedCustomerLists}
            onRemove={(id) => handleRemove(id)}
          />
          <ButtonContainer>
            <Button style={{ width: 250 }} onClick={() => handleCreate()}>
              Create campaign
            </Button>
          </ButtonContainer>
          <ErrorPopup error={errorState.error} message={errorState.message} />
        </HalfPage>

        <HalfPage>
          <PhoneSection style={{ paddingTop: 70 }}>
            {selectedCouponId && (
              <CouponPreview
                title={couponTitle}
                description={couponDescription}
                expirationDate={new Date(couponExpirationDate)}
                primaryColor={couponPrimaryColor}
              />
            )}
          </PhoneSection>
        </HalfPage>
      </FlexContainer>
    </ContainerDiv>
  );
};

export default CreateCampaign;
