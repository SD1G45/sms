import React from 'react';
import renderer from "react-test-renderer";
import "jest-styled-components";
import Button from "../../components/Button";

test('Button renders correctly', () => {
  const tree = renderer.create(<Button/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button renders as disabled', () => {
  const tree = renderer.create(<Button disabled={true}/>).toJSON();
  expect(tree).toMatchSnapshot();
}); 

test('Button renders as loading', () => {
  const tree = renderer.create(<Button loading={true}/>).toJSON();
  expect(tree).toMatchSnapshot();
});