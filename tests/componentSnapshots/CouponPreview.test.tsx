import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import CouponPreview from "../../components/CouponPreview";
import Theme from "../../components/styles/Theme";

test("Coupon preview renders correctly", () => {
  const tree = renderer
    .create(
      <Theme>
        <CouponPreview
          title={"Coupon"}
          description={"This is a sample coupon"}
          expirationDate={new Date(0)}
          primaryColor={"#fff"}
        />
      </Theme>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});