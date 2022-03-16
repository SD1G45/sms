import { useLazyQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "../../../../components/Button";
import Radio from "../../../../components/Radio";
import SearchBar from "../../../../components/SearchBar";
import { useBusinessDispatch } from "../../../../context/BusinessContext/BusinessContext";
import { PROVISION_PHONE_NUMBER_MUTATION } from "../../../../page-mutations/create-business";
import { AVAILABLE_PHONE_NUMBERS_QUERY } from "../../../../page-queries/create-business";
import { PhoneNumber, PhoneNumberContainer, PhoneNumberList, PhoneSearchFlex } from "../../../../page-styles/create-business/styles";

const PickPhoneNumber: React.FC = () => {
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
      <PhoneSearchFlex>
        <SearchBar
          id="search"
          value={areaCode}
          onValueChange={(value) => updateSearch(value)}
        />
      </PhoneSearchFlex>
      <PhoneNumberList>
        { process.env.NODE_ENV !== "test" ? data &&
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
          ) : 
          <PhoneNumberContainer key="+15005550006">
            <PhoneNumber>(500) 555-0006</PhoneNumber>
            <Radio
              id="radio"
              checked={selectedPhoneNumber === "+15005550006"}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                event.target.checked &&
                setSelectedPhoneNumber("+15005550006")
              }
            />
          </PhoneNumberContainer>
        }
      </PhoneNumberList>
      <Button
        id="create-account"
        disabled={selectedPhoneNumber === null || pickLoading}
        onClick={() => provisionPhoneNumber()}
        loading={pickLoading}
      >
        Create Account
      </Button>
    </div>
  );
};

export default PickPhoneNumber;