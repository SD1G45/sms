import { useLazyQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "../../../../components/Button";
import Radio from "../../../../components/Radio";
import SearchBar from "../../../../components/SearchBar";
import { useBusinessDispatch } from "../../../../context/BusinessContext/BusinessContext";
import { PROVISION_PHONE_NUMBER_MUTATION } from "../../../../page-mutations/create-business";
import { AVAILABLE_PHONE_NUMBERS_QUERY } from "../../../../page-queries/create-business";
import {
  ButtonContainer,
  ButtonDivider,
  HeadingDiv,
  PhoneNumber,
  PhoneNumberContainer,
  PhoneNumberList,
  PhoneSearchFlex,
  StyledButton,
  Subheading,
} from "../../../../page-styles/create-business/styles";

interface PickPhoneNumberProps {
  onBack: () => void;
}
const PickPhoneNumber: React.FC<PickPhoneNumberProps> = ({ onBack }) => {
  const [areaCode, setAreaCode] = useState("");
  const [pickLoading, setPickLoading] = useState(false);
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState<string | null>(
    null
  );

  const router = useRouter();
  const business_id = router.query.business_id;
  const businessDispatch = useBusinessDispatch();

  const [getPhoneNumbers, { loading, error, data }] = useLazyQuery(
    AVAILABLE_PHONE_NUMBERS_QUERY
  );

  const [provisionPhoneNumberMutation] = useMutation(
    PROVISION_PHONE_NUMBER_MUTATION,
    {
      errorPolicy: "all",
    }
  );

  const updateSearch = (value: string) => {
    getPhoneNumbers({ variables: { areaCode: value } });
    setAreaCode(value);
  };

  const provisionPhoneNumber = async () => {
    setPickLoading(true);
    const { data, errors } = await provisionPhoneNumberMutation({
      variables: { phoneNumber: selectedPhoneNumber, businessId: business_id },
    });

    setPickLoading(false);
    if (data) {
      router.push("/");
    }
  };

  return (
    <div>
      <HeadingDiv>
        <Subheading>
          Type in the area code you would like and select from the available
          phone numbers
        </Subheading>
      </HeadingDiv>
      <PhoneSearchFlex>
        <SearchBar
          id="search"
          value={areaCode}
          onValueChange={(value) => updateSearch(value)}
        />
      </PhoneSearchFlex>
      <PhoneNumberList>
        {data &&
          data.availablePhoneNumbers &&
          data.availablePhoneNumbers.map(
            (value: { phoneNumber: string; friendlyName: string }) => (
              <PhoneNumberContainer key={value.phoneNumber}>
                <PhoneNumber>{value.friendlyName}</PhoneNumber>
                <Radio
                  id="radio"
                  checked={selectedPhoneNumber === value.phoneNumber}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    event.target.checked &&
                    setSelectedPhoneNumber(value.phoneNumber)
                  }
                />
              </PhoneNumberContainer>
            )
          )}
      </PhoneNumberList>
      <ButtonContainer>
        <StyledButton id="back" onClick={onBack} invert>
          Back
        </StyledButton>
        <ButtonDivider />
        <StyledButton
          id="create-account"
          disabled={selectedPhoneNumber === null || pickLoading}
          onClick={() => provisionPhoneNumber()}
          loading={pickLoading}
        >
          Create Account
        </StyledButton>
      </ButtonContainer>
    </div>
  );
};

export default PickPhoneNumber;
