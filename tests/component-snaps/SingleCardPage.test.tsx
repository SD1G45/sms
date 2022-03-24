import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import SingleCardPage from "../../components/SingleCardPage";

describe("<SingleCardPage/>", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SingleCardPage/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});