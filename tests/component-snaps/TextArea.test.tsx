import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Theme from "../../components/styles/Theme";
import TextArea from "../../components/TextArea";

const steps = ["Step 1", "Step 2", "Step 3"];

describe("<TextArea/>", () => {
  it("renders correctly with label", () => {
    const tree = renderer.create(
      <Theme>
        <TextArea
          value="test"
        />
      </Theme>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with label", () => {
    const tree = renderer.create(
      <Theme>
        <TextArea
          label="Test"
          value="test"
        />
      </Theme>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with error", () => {
    const tree = renderer.create(
      <Theme>
        <TextArea
          label="Test"
          value="test"
          error={true}
          errorMessage="Test Error"
        />
      </Theme>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});