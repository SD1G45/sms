import React, { useState } from "react";
import { useRouter } from "next/router";
import BusinessLogoEditor from "../../../components/BusinessLogoEditor";
import SingleCardPage from "../../../components/SingleCardPage";
import {
  Heading,
  StyledCard,
  StyledStepper,
} from "../../../page-styles/create-business/styles";
import PickPhoneNumber from "./components/PickPhoneNumber";
import SetBusinessLogo from "./components/SetBusinessLogo";
import SetBusinessName from "./components/SetBusinessName";

import SetPaymentInfo from "./components/SetPaymentInfo";

const steps = ["Name", "Logo", "Subscribe", "Phone number"];

export interface Business {
  name: string;
  logoUrl: string;
}

export interface CreateBusinessProps {
  business?: Business;
}

const CreateBusiness: React.FC<CreateBusinessProps> = ({ business }) => {
  const router = useRouter();
  const [activeStepperIndex, setActiveStepperIndex] = useState(
    parseInt(router.query.step as string) || 0
  );
  const [businessName, setBusinessName] = useState(business?.name || "");
  const [logoEditorOpen, setLogoEditorOpen] = useState(false);

  const updateActiveStepperIndex = (factor: 1 | -1) => {
    console.log(factor);
    const newStepIndex = activeStepperIndex + factor;
    setActiveStepperIndex(newStepIndex);
    router.query.step = `${newStepIndex}`;
    router.push(router);
  };

  return (
    <SingleCardPage>
      <StyledCard>
        {logoEditorOpen ? (
          <BusinessLogoEditor onClose={() => setLogoEditorOpen(false)} />
        ) : (
          <>
            <Heading>Create your new business account</Heading>
            <StyledStepper steps={steps} activeIndex={activeStepperIndex} />
            {activeStepperIndex === 0 ? (
              <SetBusinessName
                businessName={businessName}
                onBusinessNameChange={(value) => setBusinessName(value)}
                onNext={() => updateActiveStepperIndex(1)}
              />
            ) : activeStepperIndex === 1 ? (
              <SetBusinessLogo
                onBack={() => updateActiveStepperIndex(-1)}
                onNext={() => updateActiveStepperIndex(1)}
                openLogoEditor={() => setLogoEditorOpen(true)}
              />
            ) : // TODO: Add Billing info
            activeStepperIndex === 2 ? (
              <SetPaymentInfo onSubmit={() => updateActiveStepperIndex(1)} />
            ) : activeStepperIndex === 3 ? (
              <PickPhoneNumber />
            ) : null}
          </>
        )}
      </StyledCard>
    </SingleCardPage>
  );
};

export default CreateBusiness;
