import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import ErrorPopup from "../../components/ErrorPopup";

test("ErrorPopup renders correctly", () => {
  const tree = renderer.create(<ErrorPopup/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test("ErrorPopup renders correctly with message", () => {
  const tree = renderer.create(<ErrorPopup error={true} message="Error"/>).toJSON();
  expect(tree).toMatchSnapshot();
});