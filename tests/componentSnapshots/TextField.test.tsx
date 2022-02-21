import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import TextField from "../../components/TextField";
import Theme from "../../components/styles/Theme";

test("TextField renders correctly", () => {
  const tree = renderer
    .create(
      <Theme>
        <TextField 
          value="TextField"
        />
      </Theme>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("TextField with label renders correctly", () => {
  const tree = renderer
    .create(
      <Theme>
        <TextField 
          value="TextField"
          label="TextField"
        />
      </Theme>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("TextField with error renders correctly", () => {
  const tree = renderer
    .create(
      <Theme>
        <TextField 
          value="TextField"
          error={true}
          errorMessage="There was an error"
        />
      </Theme>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});