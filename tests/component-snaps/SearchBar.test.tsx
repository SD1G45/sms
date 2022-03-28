import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import SearchBar from "../../components/SearchBar";
import Theme from "../../components/styles/Theme";

describe("<SearchBar/>", () => {
  it("renders correctly", () => {
    const tree = renderer.create(
      <Theme>
        <SearchBar id="search" value="test" onValueChange={() => {}}/>
      </Theme>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});