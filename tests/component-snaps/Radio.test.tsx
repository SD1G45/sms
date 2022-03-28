import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Radio from "../../components/Radio";

describe("<Radio/>", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Radio/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});