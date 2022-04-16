import React, { useState, useEffect } from "react";
import TextArea from "../../../../components/TextArea";
import TextField from "../../../../components/TextField";
import {
  FlexContainer,
  HalfPage,
  Heading,
  PhoneSection,
  SubHeading,
  ButtonContainer,
  StyledSelector,
  StyledMultiSelector,
} from "../../../../page-styles/keywords/create/styles";
import CouponPreview from "../../../../components/CouponPreview";
import Button from "../../../../components/Button";
import { ContainerDiv } from "../../../../page-styles/coupons/styles";
import SideNav from "../../../../components/SideNav";
import { useLazyQuery, useMutation } from "@apollo/client";
import { NEW_KEYWORD } from "../../../../page-mutations/keywords/create";
import { useBusinessState } from "../../../../context/BusinessContext/BusinessContext";
import {
  COUPONS_QUERY,
  CUSTOMER_LIST_QUERY,
} from "../../../../page-queries/keywords/create";
import ErrorPopup from "../../../../components/ErrorPopup";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  StyledCard,
  CardDescription,
  CardHeading,
  SetupLaterButton,
} from "../../../../page-styles/coupons/create/styles";

interface Coupon {
  id: string;
  title: string;
  name: string;
  description: string;
  primaryColor: string;
  expirationDate: number;
}

const EditKeyword = (props: any) => {
  const router = useRouter();
  const couponId = props.initialCouponId;
  const businessState = useBusinessState();

  const [keyword, setKeyword] = useState(props.initialKeyword);
  const [message, setMessage] = useState(props.initialMessage);
  const [description, setDescription] = useState(props.initialDescription);
  const [result, setResult] = useState(false);

  const [selectorSearch, setSelectorSearch] = useState<string | null>(null);
  const [selectedCouponId, setSelectedCouponId] = useState<string | null>(
    couponId as string
  );

  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedCustomerLists, setSelectedCustomerLists] = useState<
    { name: string; id: string }[]
  >([]);

  const [loading, setLoading] = useState(false);
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
  const routes: string[] = ["/keywords", "/keywords/create", "/keywords/faq"];

  const [newKeywordMutation] = useMutation(NEW_KEYWORD, {
    errorPolicy: "all",
  });

  const [getCoupons, couponQueryResult] = useLazyQuery(COUPONS_QUERY);
  const [getCustomerLists, customerListQueryResult] =
    useLazyQuery(CUSTOMER_LIST_QUERY);

  useEffect(() => {
    getCoupons({
      variables: {
        businessId: businessState?.businessId,
      },
    });
  }, [getCoupons, businessState]);

  useEffect(() => {
    getCustomerLists({
      variables: {
        businessId: businessState?.businessId,
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

    setLoading(true);

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
      <CardHeading>New keyword created!</CardHeading>
      <CardDescription>
        You can now use this keyword to market and attract new customers
      </CardDescription>
      {/* <div>
        <ConnectButton onClick={() => router.push("/campaigns")}>
          Connect to campaign
        </ConnectButton>
        <ConnectButton onClick={() => router.push("/keywords")}>
          Connect to keyword
        </ConnectButton>
      </div>
      */}

      <SetupLaterButton id="close" onClick={() => router.push("/keywords")}>
        close
      </SetupLaterButton>
    </StyledCard>
  );

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
      if (selectorSearch == null) {
        setSelectorSearch(currentCoupon.title);
      }
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
            id="keyword"
            label="Keyword"
            value={keyword}
            style={{ marginBottom: 30 }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setKeyword(event.target.value)
            }
          />
          <TextArea
            id="auto-response"
            label="Auto response"
            style={{ marginBottom: 30 }}
            value={message}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(event.target.value)
            }
          />
          <TextArea
            id="description"
            label="Description"
            style={{ marginBottom: 30 }}
            value={description}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(event.target.value)
            }
          />
          <StyledSelector
            id="coupon"
            label="Coupon"
            options={couponOptions}
            searchValue={selectorSearch == null ? "" : selectorSearch}
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
            <Button
              id="create"
              style={{ width: 250 }}
              onClick={() => handleCreate()}
              disabled={loading}
              loading={loading}
            >
              Create Keyword
            </Button>
            {result ? <Results /> : ""}
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

export default EditKeyword;
