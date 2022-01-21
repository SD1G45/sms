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
import Selector from "../../../components/Selector";
import MultiSelector from "../../../components/MultiSelector";
import {
  COUPONS_QUERY,
  CUSTOMER_LIST_QUERY,
} from "../../../page-queries/keywords/create";

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
  const [description, setDescription] = useState("");

  const [selectorSearch, setSelectorSearch] = useState("");
  const [selectedCouponId, setSelectedCouponId] = useState<string | null>(null);

  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState<
    { name: string; id: string }[]
  >([]);

  const handleRemove = (id: string) => {
    setSelectedOptions(selectedOptions.filter((value) => value.id !== id));
  };

  const handleSelect = (id: string, name: string) => {
    setSelectedOptions([{ id, name }, ...selectedOptions]);
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
      !selectedOptions.some(({ id: id2 }) => id2 === id1)
  );

  const handleCreate = () => {
    newKeywordMutation({
      variables: {
        keyword,
        description,
        businessId: businessState?.businessId,
      },
    });
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

  for (const coupon in couponOptions) {
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
            selectedOptions={selectedOptions}
            onRemove={(id) => handleRemove(id)}
          />
          <ButtonContainer>
            <Button style={{ width: 250 }} onClick={() => handleCreate()}>
              Create keyword
            </Button>
          </ButtonContainer>
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
