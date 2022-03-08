import { useRouter } from "next/router";
import React from "react";
import { 
  ButtonContainer, 
  ButtonDivider, 
  LogoCircle, 
  LogoPickerContainer, 
  StyledButton, 
  UploadLogoButton 
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
      <LogoPickerContainer>
        <LogoCircle
          src={`https://smsmp-business-logos-local.s3.amazonaws.com/${business_id}.png`}
        />
        <UploadLogoButton id="upload" invert onClick={() => openLogoEditor()}>
          Upload logo
        </UploadLogoButton>
      </LogoPickerContainer>
      <ButtonContainer>
        <StyledButton onClick={onBack} invert>
          Back
        </StyledButton>
        <ButtonDivider />
        <StyledButton id="next" onClick={onNext}>Next</StyledButton>
      </ButtonContainer>
    </>
  );
};

export default SetBusinessLogo;