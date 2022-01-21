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

interface Coupon {
  id: string;
  title: string;
  name: string;
  description: string;
  primaryColor: string;
  expirationDate: number;
}

const CreateKeyword: React.FC = () => {
  const businessState = useBusinessState();

  const [keyword, setKeyword] = useState("");
  const [message, setMessage] = useState("");
  const [description, setDescription] = useState("");

  const [selectorSearch, setSelectorSearch] = useState("");
  const [selectedCouponId, setSelectedCouponId] = useState<string | null>(null);

  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedCustomerLists, setSelectedCustomerLists] = useState<
    { name: string; id: string }[]
  >([]);

  const [errorState, setError] = useState({error: false, message: ''});

  const handleRemove = (id: string) => {
    setSelectedCustomerLists(
      selectedCustomerLists.filter((value) => value.id !== id)
    );
  };

  const handleSelect = (id: string, name: string) => {
    setSelectedCustomerLists([{ id, name }, ...selectedCustomerLists]);
  };

  const list: string[] = ["Analytics", "Create new", "FAQ"];
  const routes: string[] = ["/coupons", "/coupons/create", "/faq-coupon"];

  const [newKeywordMutation] = useMutation(NEW_KEYWORD, {
    errorPolicy: "all",
  });

  const [getCoupons, couponQueryResult] = useLazyQuery(COUPONS_QUERY);
  const [getCustomerLists, customerListQueryResult] =
    useLazyQuery(CUSTOMER_LIST_QUERY);

  useEffect(() => {
    getCoupons({
      variables: {
        businessId: businessState?.businessId || "",
      },
    });
  }, [getCoupons, businessState]);

  useEffect(() => {
    getCustomerLists({
      variables: {
        businessId: businessState?.businessId || "",
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

    if (keyword.length == 0 || message.length == 0 || description.length == 0) {
      setError({...errorState, error:true, message: "Missing information."});
      return;
    }

    if (!selectedCouponId) {
      setError({...errorState, error: true, message: "No coupon selected."});
      return;
    }

    if (selectedCouponId.length < 1) {
      setError({...errorState, error: true, message: "No customer list(s) selected."});
    }

    try {

      newKeywordMutation({
        variables: {
          keyword,
          message,
          description,
          businessId: businessState?.businessId,
          couponId: selectedCouponId,
          customerListId: selectedCustomerLists[0].id,
        },
      });
    } catch (error) {
      setError({...errorState, error: true, message: "Something went wrong, please try again later."});
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
      <SideNav items={list} routes={routes} heading={"Keywords"} />
      <FlexContainer>
        <HalfPage>
          <Heading>Create new keyword</Heading>
          <SubHeading>Information</SubHeading>
          <TextField
            label="Keyword"
            value={keyword}
            style={{ marginBottom: 30 }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setKeyword(event.target.value)
            }
          />
          <TextArea
            label="Auto response"
            style={{ marginBottom: 30 }}
            value={message}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(event.target.value)
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
              Create keyword
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

export default CreateKeyword;
