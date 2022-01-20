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
} from "../../../page-styles/coupons/create/styles";
import { ChromePicker } from "react-color";
import { Label } from "../../../components/TextField/styles";
import CouponPreview from "../../../components/CouponPreview";

const CreateCoupon: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("23:59");
  const [color, setColor] = useState("");

  console.log(time);
  console.log(date);

  // const list: string[] = ["Analytics", "Create new", "FAQ"];
  // const routes: string[] = ["/coupons", "/create-coupon", "/faq-coupon"];

  return (
    <>
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
        </HalfPage>
        <HalfPage>
          <PhoneSection style={{ paddingTop: 50 }}>
            <CouponPreview
              title={title}
              description={description}
              expirationDate={new Date(date)}
              primaryColor={color}
            />
          </PhoneSection>
        </HalfPage>
      </FlexContainer>
    </>
  );
};

export default CreateCoupon;
