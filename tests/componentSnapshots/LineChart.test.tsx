/**
 * @jest-environment jsdom
 */

import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import LineChart from "../../components/LineChart";
import sampleData from "../../sampleData/sampleData";

const couponData = sampleData.couponData();

test("LineChart renders correctly", () => {
  const tree = renderer
    .create(
      <div>
        <LineChart
          title="Coupons"
          data={couponData}
          height={300}
          flexure={1}
        />
      </div>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});