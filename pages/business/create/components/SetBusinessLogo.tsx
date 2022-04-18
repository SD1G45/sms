import { useRouter } from "next/router";
import React from "react";
import {
  ButtonContainer,
  ButtonDivider,
  HeadingDiv,
  LogoCircle,
  LogoPickerContainer,
  StyledButton,
  Subheading,
  UploadLogoButton,
} from "../../../../page-styles/create-business/styles";

interface SetBusinessLogoProps {
  openLogoEditor: () => void;
  onNext: () => void;
  onBack: () => void;
}

const SetBusinessLogo: React.FC<SetBusinessLogoProps> = ({
  onNext,
  onBack,
  openLogoEditor,
}) => {
  const router = useRouter();
  const { business_id } = router.query;
  return (
    <>
      <HeadingDiv>
        <Subheading>
          Upload your business logo. This image will be displayed on materials
          you send to your customers.
        </Subheading>
      </HeadingDiv>
      <LogoPickerContainer>
        <LogoCircle
          src={`https://smsmp-business-logos-local.s3.amazonaws.com/${business_id}.png`}
        />
        <UploadLogoButton id="upload" invert onClick={() => openLogoEditor()}>
          Upload logo
        </UploadLogoButton>
        * please upload a PNG or JPEG file
      </LogoPickerContainer>
      <ButtonContainer>
        <StyledButton id="back" onClick={onBack} invert>
          Back
        </StyledButton>
        <ButtonDivider />
        <StyledButton id="next" onClick={onNext}>
          Next
        </StyledButton>
      </ButtonContainer>
    </>
  );
};

export default SetBusinessLogo;
