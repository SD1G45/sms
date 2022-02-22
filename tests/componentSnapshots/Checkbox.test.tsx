import React from 'react';
import renderer from "react-test-renderer";
import "jest-styled-components";
import Checkbox from '../../components/Checkbox';
import Theme from "../../components/styles/Theme";

test("Checkbox renders correctly unchecked", () => {
  const tree = renderer
    .create(
      <Theme>
        <Checkbox checked={false}/>
      </Theme>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Checkbox renders correctly checked", () => {
  const tree = renderer
    .create(
      <Theme>
        <Checkbox checked={true}/>
      </Theme>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});