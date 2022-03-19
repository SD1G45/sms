import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Navbar from "../../components/Navbar";
import { MockedProvider } from '@apollo/client/testing';
import Theme from "../../components/styles/Theme";

jest.mock("next/router", () => ({
  useRouter() {
      return {
          route: "/",
          pathname: "",
          query: "",
          asPath: "",
      };
  },
}));

describe("<Navbar/>", () => {
  it("renders correctly", () => {

    const tree = renderer.create(
      <MockedProvider>
        <Theme>
          <Navbar/>
        </Theme>
      </MockedProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});