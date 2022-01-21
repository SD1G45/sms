import React, { useState } from "react";
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
import { useMutation } from "@apollo/client";
import { NEW_KEYWORD } from "../../../page-mutations/keywords/create";
import { useBusinessState } from "../../../context/BusinessContext/BusinessContext";
import Selector from "../../../components/Selector";
import MultiSelector from "../../../components/MultiSelector";

const selectorOptions = [
  { name: "BOGO", id: "1" },
  { name: "Free Fries", id: "2" },
  { name: "Free Drinks", id: "3" },
];

const options = [
  { name: "VIP List", id: "1" },
  { name: "Main List", id: "2" },
  { name: "Super VIP List", id: "3" },
];

const CreateKeyword: React.FC = () => {
  const businessState = useBusinessState();

  const [keyword, setKeyword] = useState("");
  const [description, setDescription] = useState("");

  const [selectorSearch, setSelectorSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>("1");

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

  const filteredOptions = options.filter(
    ({ id: id1 }) => !selectedOptions.some(({ id: id2 }) => id2 === id1)
  );

  const list: string[] = ["Analytics", "Create new", "FAQ"];
  const routes: string[] = ["/coupons", "/coupons/create", "/faq-coupon"];

  const [newKeywordMutation] = useMutation(NEW_KEYWORD, {
    errorPolicy: "all",
  });

  const handleCreate = () => {
    newKeywordMutation({
      variables: {
        keyword,
        description,
        businessId: businessState?.businessId,
      },
    });
  };

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
            options={selectorOptions}
            searchValue={selectorSearch}
            onSearchValueChange={setSelectorSearch}
            onSelect={(id) => setSelectedId(id)}
            selectedId={selectedId}
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
            {/* <CouponPreview
              title={title}
              description={description}
              expirationDate={dateTime}
              primaryColor={color}
            /> */}
          </PhoneSection>
        </HalfPage>
      </FlexContainer>
    </ContainerDiv>
  );
};

export default CreateKeyword;
