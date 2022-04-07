import Link from "next/link";
import { useRouter } from "next/router";
import { FcMoneyTransfer } from "react-icons/fc";
import Card from "../../../components/Card";
import SingleCardPage from "../../../components/SingleCardPage";
import newRouteWithQueries from "../../../helpers/newRouteWithQueries";
import { Heading } from "../../../page-styles/billing/styles";
import { StyledLink } from "../../../page-styles/settings/profile/styles";

export const History = () => {
  const router = useRouter();
  return (
    <SingleCardPage>
      <Card>
        <Heading>
          <FcMoneyTransfer />
          Billing History
        </Heading>
        <p>No charges to see</p>

        <Link href={newRouteWithQueries("/settings", router)}>
          <StyledLink>Back to settings</StyledLink>
        </Link>
      </Card>
    </SingleCardPage>
  );
};

export default History;
