import React, { useState } from "react";
import TextArea from "../../../components/TextArea";
import TextField from "../../../components/TextField";
import {
  ExpirationContainer,
  FlexContainer,
  HalfPage,
  Heading,
  PhoneSection,
  StyledTimePicker,
  SubHeading,
  ButtonContainer,
} from "../../../page-styles/coupons/create/styles";
import { ChromePicker } from "react-color";
import { Label } from "../../../components/TextField/styles";
import CouponPreview from "../../../components/CouponPreview";
import Button from "../../../components/Button";
import { ColumnDiv, ContainerDiv } from "../../../page-styles/coupons/styles";
import SideNav from "../../../components/SideNav";
import { useMutation } from "@apollo/client";
import { NEW_COUPON } from "../../../page-mutations/coupons/create";
import { useBusinessState } from "../../../context/BusinessContext/BusinessContext";
import ErrorPopup from "../../../components/ErrorPopup";

const CreateCoupon: React.FC = () => {
  const businessState = useBusinessState();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const initDate = new Date();
  initDate.setDate(initDate.getDate() + 7);
  const [date, setDate] = useState(initDate.toISOString().split("T")[0]);

  const [time, setTime] = useState("23:59");
  const [color, setColor] = useState("#4881F0");

  const [errorState, setError] = useState({error: false, message: ''});

  const list: string[] = ["Analytics", "Create new", "FAQ"];
  const routes: string[] = ["/coupons", "/coupons/create", "/faq-coupon"];

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

    
    

  const handleCreate = async () => {

    if (title.length == 0 || description.length == 0) {
      setError({...errorState, error: true, message: "Missing title or message"});
      return;
    }

    const today = new Date();
    if (dateTime.getDate() < today.getDate()) {
      setError({...errorState, error: true, message: "Invalid date: Expiration date has passed."})
      return;
    }

    try {
    const {data, errors} = await newCouponMutation({
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
      setError({...errorState, error: true, message: errors[0].message});
      return;
    }

    } catch (error) {
      setError({...errorState, error: true, message: "Something went wrong, please try again later."});
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
          <ChromePicker
            color={color}
            onChange={(color: any) => setColor(color.hex)}
          />
          <ButtonContainer>
            <Button style={{ width: 250 }} onClick={() => handleCreate()}>
              Create coupon
            </Button>
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
