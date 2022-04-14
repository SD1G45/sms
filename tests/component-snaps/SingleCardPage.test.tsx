import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import SingleCardPage from "../../components/SingleCardPage";
import { ParallaxProvider } from "react-scroll-parallax";

describe("<SingleCardPage/>", () => {
  it("renders correctly", () => {
    const tree = renderer.create(
      <ParallaxProvider>
        <SingleCardPage/>
      </ParallaxProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});