import { loadStripe } from "@stripe/stripe-js";

export const config = {
  jwtSecret: process.env.JWT_SECRET,
  stripe_pk: process.env.STRIPE_PK,
  stripe_sk: process.env.STRIPE_SK,

  load_stripe: loadStripe(
    "pk_test_51KHFPRHwoWyhJ69QRzdbMz2lcKa1GMQqgIUc9Cn1eGO7bpvV3uLgQcrOjo31aJEttDD4zBqoxMo1XkH3TzIutujd00u3HnhXtG"
  ),
};
