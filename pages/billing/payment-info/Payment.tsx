import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FcDataEncryption, FcMoneyTransfer } from "react-icons/fc";
import Card from "../../../components/Card";
import SingleCardPage from "../../../components/SingleCardPage";
import newRouteWithQueries from "../../../helpers/newRouteWithQueries";
import {
  Heading,
  StyledButton,
  StyledCard,
} from "../../../page-styles/billing/styles";
import {
  HeaderDiv,
  StyledHeader,
  StyledLink,
} from "../../../page-styles/settings/profile/styles";

interface InitialDisplayProps {
  setViewInfo: (value: boolean) => void;
  setChangeInfo: (value: boolean) => void;
}

const InitialDisplay: React.FC<InitialDisplayProps> = ({
  setViewInfo,
  setChangeInfo,
}) => {
  const router = useRouter();
  return (
    <>
      <StyledCard>
        <HeaderDiv>
          <StyledHeader>
            <FcMoneyTransfer />
            Payment Information
          </StyledHeader>
        </HeaderDiv>
        <StyledButton onClick={() => setViewInfo(true)}>
          View Payment Information
        </StyledButton>
        <StyledButton onClick={() => setChangeInfo(true)}>
          Change Payment Information
        </StyledButton>
        <Link href={newRouteWithQueries("/settings", router)}>
          <StyledLink>Back to settings</StyledLink>
        </Link>
      </StyledCard>
    </>
  );
};

export const Payment = () => {
  const router = useRouter();
  const [viewInfo, setViewInfo] = useState(false);
  const [changeInfo, setChangeInfo] = useState(false);
  return (
    <SingleCardPage>
      {!viewInfo && !changeInfo && (
        <InitialDisplay
          setViewInfo={(viewInfo) => setChangeInfo(viewInfo)}
          setChangeInfo={(changeInfo) => setChangeInfo(changeInfo)}
        />
      )}
    </SingleCardPage>
  );
};

export default Payment;
