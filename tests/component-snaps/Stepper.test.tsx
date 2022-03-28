import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Slider from "../../components/Slider";
import Theme from "../../components/styles/Theme";
import Stepper from "../../components/Stepper";

const steps = ["Step 1", "Step 2", "Step 3"];

describe("<Slider/>", () => {
  it("renders correctly", () => {
    const tree = renderer.create(
      <Theme>
        <Stepper steps={steps} activeIndex={1}/>
      </Theme>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});