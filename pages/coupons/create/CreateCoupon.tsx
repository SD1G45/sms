import React, { useState } from "react";
import TextArea from "../../../components/TextArea";
import TextField from "../../../components/TextField";
import Image from "next/image";
import { useRouter } from "next/router";
// import reactCSS from "reactcss";

import {
  ExpirationContainer,
  FlexContainer,
  HalfPage,
  Heading,
  PhoneSection,
  StyledTimePicker,
  SubHeading,
  ButtonContainer,
  StyledCard,
  CardDescription,
  ConnectButton,
  CardHeading,
  SetupLaterButton,
  CreateButton,
  HeaderDiv,
  ColorPicker,
} from "../../../page-styles/coupons/create/styles";
import { TwitterPicker } from "react-color";
import { Label } from "../../../components/TextField/styles";
import CouponPreview from "../../../components/CouponPreview";
import { ColumnDiv, ContainerDiv } from "../../../page-styles/coupons/styles";
import SideNav from "../../../components/SideNav";
import { useMutation } from "@apollo/client";
import { NEW_COUPON } from "../../../page-mutations/coupons/create";
import { useBusinessState } from "../../../context/BusinessContext/BusinessContext";
import ErrorPopup from "../../../components/ErrorPopup";

const CreateCoupon: React.FC = () => {
  const businessState = useBusinessState();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [result, setResult] = useState(false);

  const initDate = new Date();
  initDate.setDate(initDate.getDate() + 7);
  const [date, setDate] = useState(initDate.toISOString().split("T")[0]);

  const [time, setTime] = useState("23:59");
  const [color, setColor] = useState("#4881F0");

  const [loading, setLoading] = useState(false);
  const [errorState, setError] = useState({ error: false, message: "" });

  const list: string[] = ["Analytics", "Create New", "FAQ"];
  const routes: string[] = ["/coupons", "/coupons/create", "/coupons/faq"];

  const [newCouponMutation] = useMutation(NEW_COUPON, {
    errorPolicy: "all",
  });

  const dateTime = new Date(
    Number(date.split("-")[0]),
    Number(date.split("-")[1]) - 1,
    Number(date.split("-")[2]),
    Number(time.split(":")[0]),
    Number(time.split(":")[1])
  );

  const Search = () => {
    const [showCards, setShowCards] = React.useState(false);
    return (
      <>
        <CreateButton
          onClick={() => {
            handleCreate();
          }}
          disabled={loading}
          loading={loading}
        >
          Create Coupon
        </CreateButton>
        {result ? <Results /> : null}
      </>
    );
  };

  const Results = () => (
    <StyledCard>
      <Image src="/check.png" width={100} height={100} />
      <CardHeading>New coupon created!</CardHeading>
      <CardDescription>
        You can now use "{title}" in a campaign message or an auto response via
        a keyword.
      </CardDescription>
      <div>
        <ConnectButton onClick={() => router.push("/campaigns")}>
          Connect to campaign
        </ConnectButton>
        <ConnectButton onClick={() => router.push("/keywords")}>
          Connect to keyword
        </ConnectButton>
      </div>

      <SetupLaterButton onClick={() => router.push("/coupons")}>
        Setup later
      </SetupLaterButton>
    </StyledCard>
  );

  const handleCreate = async () => {
    if (title.length == 0 || description.length == 0) {
      setError({
        ...errorState,
        error: true,
        message: "Missing title or message",
      });
      return;
    }

    const today = new Date();
    if (dateTime.getDate() < today.getDate()) {
      setError({
        ...errorState,
        error: true,
        message: "Invalid date: Expiration date has passed.",
      });
      return;
    }

    setLoading(true);

    try {
      const { data, errors } = await newCouponMutation({
        variables: {
          name: title,
          title,
          description,
          expirationDate: dateTime,
          primaryColor: color,
          businessId: businessState?.businessId,
        },
      });

      if (errors && errors.length > 0) {
        setError({ ...errorState, error: true, message: errors[0].message });
        setLoading(false);
        return;
      }
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

  return (
    <ContainerDiv>
      <SideNav items={list} routes={routes} heading={"Coupons"} />
      <FlexContainer>
        <HalfPage>
          <Heading>Create new coupon</Heading>
          <SubHeading>Information</SubHeading>
          <TextField
            label="Title"
            value={title}
            style={{ marginBottom: 30 }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(event.target.value)
            }
          />
          <TextArea
            label="Message"
            style={{ marginBottom: 30 }}
            value={description}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(event.target.value)
            }
          />
          <ExpirationContainer>
            <TextField
              label="Expiration date"
              type="date"
              value={date}
              style={{ marginBottom: 30 }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setDate(event.target.value)
              }
            />
            <StyledTimePicker
              label="Expiration time"
              type="time"
              value={time}
              style={{ marginBottom: 30 }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setTime(event.target.value)
              }
            />
          </ExpirationContainer>
          <Label>Primary color</Label>
          <ColorPicker
            style={{
              backgroundColor: color,
            }}
          ></ColorPicker>
          <TwitterPicker
            color={color}
            onChange={(color: any) => setColor(color.hex)}
          />

          <ButtonContainer>
            <Search />
          </ButtonContainer>
          <ErrorPopup error={errorState.error} message={errorState.message} />
        </HalfPage>

        <HalfPage>
          <PhoneSection style={{ paddingTop: 70 }}>
            <CouponPreview
              title={title}
              description={description}
              expirationDate={dateTime}
              primaryColor={color}
            />
          </PhoneSection>
        </HalfPage>
      </FlexContainer>
    </ContainerDiv>
  );
};

export default CreateCoupon;
