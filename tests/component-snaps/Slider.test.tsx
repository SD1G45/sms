import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Slider from "../../components/Slider";
import Theme from "../../components/styles/Theme";

describe("<Slider/>", () => {
  it("renders correctly", () => {
    const tree = renderer.create(
      <Theme>
        <Slider value={1} onChange={() => {}}/>
      </Theme>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});