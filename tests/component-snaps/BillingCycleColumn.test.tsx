import React from 'react';
import renderer from "react-test-renderer";
import "jest-styled-components";
import BillingCycleColumn from "../../components/BillingCycleColumn";

test('BillingCycleColumn renders correctly', () => {
  const tree = renderer
    .create(
      <BillingCycleColumn
        spentAmount="$1,180.00"
        salesAmount="$175.00"
        billingCycle="10/07/21 - 10/31/21"
        billingCycleRoute="/billing"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});