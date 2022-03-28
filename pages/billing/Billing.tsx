// import React from "react";
// import SingleCardPage from "../../components/SingleCardPage";
// import SideNav from "../../components/SideNav";

// import {
//   Heading,
//   StyledCard,
//   StyledButton,
//   ContainerDiv,
// } from "../../page-styles/billing/styles";
// import Link from "next/link";

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// import SetupForm from "../business/create/components/SetupForm";
// import { RowDiv } from "../../page-styles/coupons/styles";

// const stripePromise = loadStripe(
//   "pk_test_51KHFPRHwoWyhJ69QRzdbMz2lcKa1GMQqgIUc9Cn1eGO7bpvV3uLgQcrOjo31aJEttDD4zBqoxMo1XkH3TzIutujd00u3HnhXtG"
// );

// function Billing() {
//   const options = {
//     // passing the client secret obtained from the server
//     clientSecret:
//       "seti_1KIcHaHwoWyhJ69QnEWl0zGD_secret_KyZQsFo7YMQZF07CeQU1GAWhcvY5me5",
//   };

//   const list: string[] = ["Payment Information", "History"];
//   return (
//     <ContainerDiv>
//       <RowDiv>
//         {/* <SideNav items={list} index={0} heading={"Coupons"} /> */}

//         <StyledCard>
//           <Elements stripe={stripePromise} options={options}>
//             <SetupForm />
//           </Elements>
//         </StyledCard>
//       </RowDiv>
//     </ContainerDiv>
//   );
// }

const Billing = () => {
  return <></>;
};
export default Billing;
