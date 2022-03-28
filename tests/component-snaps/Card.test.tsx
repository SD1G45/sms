import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Card from "../../components/Card";

describe("<Card/>", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Card/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});