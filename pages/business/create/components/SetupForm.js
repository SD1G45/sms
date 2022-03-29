import React from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
// const stripe = require("stripe")(
//   "sk_test_51KHFPRHwoWyhJ69QrajNDJSoTWrIIMl1GZsBdOldlHc6lXGvuR7Q7RY5X01UnTwtva6V5Yw49t2zB6C5tUjTl6TJ00wfTWoedL"
// );

import Button from "../../../../components/Button";

// const customer = await stripe.customers.create();

const SetupForm = ({ onSubmit }) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <PaymentElement />
        <Button onClick={onSubmit}>Submit</Button>
      </form>
    </>
  );
};

export default SetupForm;
